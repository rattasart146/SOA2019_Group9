const server = require('../server');
const request = require('supertest');

var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 3001 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server close')
    })

    describe('GET /api/user/:userid with correct', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/1')
            expect(res.body).toEqual([
                {
                    "username": "PrayuthFC",
                    "password": "12345678",
                    "firstname": "Prayuth",
                    "lastname": "Chan-O-Cha"
                }
            ])
        })
    })

    describe('GET /api/user/:userid with incorrect', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/2')
            expect(res.body).toEqual([
                {
                    "username": "PrayuthFC",
                    "password": "12345678",
                    "firstname": "Prayuth",
                    "lastname": "Chan-O-Cha"
                }
            ])
        })
    })

    

    describe('GET /api/user/:userid/ NOT FOUND', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })
})

describe("POST NEWUSER", () => {
    it("should postNewuser success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/newuser")
            .send({
                username: "PrayuthFC",
                password: "12345678",
                firstname: "Prayuth",
                lastname: "Chan-O-Cha"
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("shouldn't postNewuser success", done => {
        chai
            .request(server)
            .post("/newuser")
            .send({
                username: "PrayuthFC",
                password: "11111111",
                firstname: "Prayuth",
                lastname: "Chan-O-Cha"
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("shouldn't login success because username & password null", done => {
        chai
            .request(server)
            .post("/newuser")
            .send({
                username: null,
                password: null,
                firstname: null,
                lastname: null
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});

describe("POST LOGIN", () => {
    it("should login success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/login")
            .send({
                username: "it59070181",
                password: "123456789"
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("shouldn't login success", done => {
        chai
            .request(server)
            .post("/login")
            .send({
                username: "test",
                password: "test"
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("shouldn't login success because username & password null", done => {
        chai
            .request(server)
            .post("/login")
            .send({
                username: null,
                password: null
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});