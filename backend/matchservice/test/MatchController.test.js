const server = require('../src/controller/MatchController');

// คืออะไร?
// var chai = require("chai");
// const should = chai.should();
// const chaiHttp = require("chai-http");

// chai.use(chaiHttp);

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 3004 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server close')
    })

    // Get All นี่ไม่รู้ต้องทำป่าว

    // /matchid/:matchid
    describe('GET /api/matchid/:matchid with correct', () => {
        it('should return match information by id', async () => {
            const res = await request(server).get('/7')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchid/:matchid with incorrect', () => {
        it('should return match information by id', async () => {
            const res = await request(server).get('/2')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchid/:matchid NOT FOUND', () => {
        it('should return match information by id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /matchname/:matchname
    describe('GET /api/matchname/:matchname with correct', () => {
        it('should return match information by match name', async () => {
            const res = await request(server).get('/testendmatchzz')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchname/:matchname with incorrect', () => {
        it('should return match information by match name', async () => {
            const res = await request(server).get('/test')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchname/:matchname NOT FOUND', () => {
        it('should return match information by match name', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /matchsize/:matchid
    describe('GET /api/matchsize/:matchid with correct', () => {
        it('should return match size by match id', async () => {
            const res = await request(server).get('/7')
            expect(res.body).toEqual([
                {
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchsize/:matchid with incorrect', () => {
        it('should return match size by match id', async () => {
            const res = await request(server).get('/2')
            expect(res.body).toEqual([
                {
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/matchsize/:matchid NOT FOUND', () => {
        it('should return match size by match id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /status/:status
    describe('GET /api/status/:status with correct', () => {
        it('should return match information by match status', async () => {
            const res = await request(server).get('/end')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                },
                {
                    "match_id":8,
                    "matchname":"kmitl",
                    "matchowner":"suzuke",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/status/:status with incorrect', () => {
        it('should return match information by match status', async () => {
            const res = await request(server).get('/registering')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                },
                {
                    "match_id":8,
                    "matchname":"kmitl",
                    "matchowner":"suzuke",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/status/:status NOT FOUND', () => {
        it('should return match information by match status', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /owner/:matchowner
    describe('GET /api/owner/:matchowner with correct', () => {
        it('should return match information by match owner', async () => {
            const res = await request(server).get('/naruto')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/owner/:matchowner with incorrect', () => {
        it('should return match information by match owner', async () => {
            const res = await request(server).get('/thanos')
            expect(res.body).toEqual([
                {
                    "match_id":7,
                    "matchname":"testendmatchzz",
                    "matchowner":"naruto",
                    "match_desc":"bla bla bla blaaaaaa",
                    "match_location":"bangkok",
                    "match_status":"end",
                    "match_size":4
                }
            ])
        })
    })

    describe('GET /api/owner/:matchowner NOT FOUND', () => {
        it('should return match information by match owner', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /join/:username หาไม่เจอ
    describe('GET /api/join/:username with correct', () => {
        it('should return match by userjoin', async () => {
            const res = await request(server).get('/')
            expect(res.body).toEqual([
                {
                   
                }
            ])
        })
    })

    describe('GET /api/join/:username with incorrect', () => {
        it('should return match by userjoin', async () => {
            const res = await request(server).get('/')
            expect(res.body).toEqual([
                {
                   
                }
            ])
        })
    })

    describe('GET /api/join/:username NOT FOUND', () => {
        it('should return match by userjoin', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })
});

// /newmatch
// describe("POST NEWMATCH", () => {
//     it("should postNewMatch success", function (done) {
//         this.timeout(10000);
//         chai
//             .request(server)
//             .post("/newmatch")
//             .send({
//                 match_id:5,
//                 matchname:"testendmatchzz",
//                 matchowner:"naruto",
//                 match_desc:"bla bla bla blaaaaaa",
//                 match_location:"bangkok",
//                 match_status:"end",
//                 match_size:4
//             })
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             });
//     });

//     it("shouldn't postNewMatch success", done => {
//         chai
//             .request(server)
//             .post("/newuser")
//             .send({
//                 match_id:7,
//                 matchname:"testendmatchzz",
//                 matchowner:"naruto",
//                 match_desc:"bla bla bla blaaaaaa",
//                 match_location:"bangkok",
//                 match_status:"end",
//                 match_size:4
//             })
//             .end((err, res) => {
//                 res.should.have.status(400);
//                 done();
//             });
//     });

//     it("shouldn't postNewMatch success because information is null", done => {
//         chai
//             .request(server)
//             .post("/newuser")
//             .send({
//                 match_id:null,
//                 matchname:null,
//                 matchowner:null,
//                 match_desc:null,
//                 match_location:null,
//                 match_status:null,
//                 match_size:null
//             })
//             .end((err, res) => {
//                 res.should.have.status(400);
//                 done();
//             });
//     });

    // postUpdateStatus ทำไม่เป็น

});