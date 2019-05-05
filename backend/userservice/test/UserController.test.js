const server = require('../server');
const request = require('supertest');

var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 3002 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server close')
    })
    
    // Get All นี่ไม่รู้ต้องทำป่าว

    // /id/:userid
    describe('GET /api/user/:userid with correct', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/4')
            expect(res.body).toEqual([
                {
                    "user_id":4,
                    "username":"test1",
                    "password":"1234",
                    "firstname":"man",
                    "lastname":"man"
                }
            ])
        })
    })

    describe('GET /api/user/:userid with incorrect', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/2')
            expect(res.body).toEqual([
                {
                    "user_id":4,
                    "username":"test1",
                    "password":"1234",
                    "firstname":"man",
                    "lastname":"man"
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

// /newuser
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

// /login
describe("POST LOGIN", () => {
    it("should login success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/login")
            .send({
                username: "test1",
                password: "1234"
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