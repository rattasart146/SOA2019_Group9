const express = require('express')
const httpProxy = require('express-http-proxy')
const request = require('request-promise-native')
const xml = require('xml')
const Eureka = require('eureka-js-client').Eureka;

// Constants
const PORT = process.env.PORT || 3001
const HOST = '0.0.0.0';
const app = express()

// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'api-gateway',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
        vipAddress: 'api-gateway',
        port: {
            $: PORT,
            '@enabled': 'true',
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        registerWithEureka: true,
        fetchRegistry: true,
    },
    eureka: {
        // Eureka server
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start(error => {
    console.log(error || 'NodeJS Eureka client Started!');

    // Service discovery from Eureka server


    const userServiceInstance = client.getInstancesByAppId('user-service');
    const userServiceUrl = `http://${userServiceInstance[0].hostName}:${userServiceInstance[0].port.$}`;
    const userServiceProxy = httpProxy(userServiceUrl)
    console.log(`User-Service: ${userServiceUrl}`);


    const matchServiceInstance = client.getInstancesByAppId('match-service');
    const matchServiceUrl = `http://${matchServiceInstance[0].hostName}:${matchServiceInstance[0].port.$}`;
    const matchServiceProxy = httpProxy(matchServiceUrl)
    console.log(`match-Service: ${matchServiceUrl}`);

    const processServiceInstance = client.getInstancesByAppId('process-service');
    const processServiceUrl = `http://${processServiceInstance[0].hostName}:${processServiceInstance[0].port.$}`;
    const processServiceProxy = httpProxy(processServiceUrl)
    console.log(`process-Service: ${processServiceUrl}`);

    // Set CORS
    app.use((req, res, next) => {
        const allowedOrigins = [
            'http://localhost:8080/'
        ];
        if (!allowedOrigins.includes(req.headers.origin)) {
            res.header("Access-Control-Allow-Origin", req.headers.origin);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        }
        return next();
    })

    // Proxy request after authentication

    app.use('/api/usergateway', (req, res, next) => {
        userServiceProxy(req, res, next)
    })

    app.use('/api/matchgateway', (req, res, next) => {
        matchServiceProxy(req, res, next)
    })

    app.use('/api/processgateway', (req, res, next) => {
        processServiceProxy(req, res, next)
    })

});

// Shared general logic: Authentication
// app.use((req, res, next) => {
//     // TODO: my authentication logic
//     console.log(`Authentication: ${req.path}`)
//     next()
// })

app.listen(PORT, HOST);
console.log(`API Gateway Running on http://${HOST}:${PORT}`);