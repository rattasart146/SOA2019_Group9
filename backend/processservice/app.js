const express = require('express')
const bodyParser = require('body-parser')
const Eureka = require('eureka-js-client').Eureka;


// Constants
const PORT = process.env.PORT || 3006
const HOST = '0.0.0.0';
const app = express();


// parse application/json
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())


// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'process-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
        vipAddress: 'process-service',
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
        leaseRenewalIntervalInSeconds: 1,
        leaseExpirationDurationInSeconds: 2
    },
    eureka: {
        // Eureka server
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || 'Eureka client started');

    const ProcessController = require('./src/controller/ProcessController')
    app.use("/process", ProcessController);
});





app.listen(PORT, HOST);
console.log(`User Service Running on http://${HOST}:${PORT}`);

module.exports = app