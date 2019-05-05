const server = require('../server');
const request = require('supertest');

// คืออะไร?
var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 3006 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server close')
    })

    // /:matchid/allteam
    describe('GET /api/:matchid/allteam with correct', () => {
        it('should return all team by match id', async () => {
            const res = await request(server).get('/10/allteam')
            expect(res.body).toEqual([
                {
                    "teamid":22,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":23,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":24,
                    "match_id":"10",
                    "team_name":"team2",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":25,
                    "match_id":"10",
                    "team_name":"team3",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                }
            ])
        })
    })

    describe('GET /api/matchid/:matchid with incorrect', () => {
        it('should return all team by match id', async () => {
            const res = await request(server).get('/7/allteam')
            expect(res.body).toEqual([
                {
                    "teamid":22,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":23,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":24,
                    "match_id":"10",
                    "team_name":"team2",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":25,
                    "match_id":"10",
                    "team_name":"team3",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                }
            ])
        })
    })

    describe('GET /api/matchid/:matchid NOT FOUND', () => {
        it('should return all team by match id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /:matchid/teamjoin GET ออกมาไม่ได้ มันไม่มี teamjoin

    // /:matchid/allschedule
    describe('GET /api/:matchid/allteam with correct', () => {
        it('should return all schedule by match id', async () => {
            const res = await request(server).get('/10/allschedule')
            expect(res.body).toEqual([
                {
                    "schedule_id":7,
                    "match_id":"10",
                    "team_1_name":"team aaa",
                    "team_2_name":"team www",
                    "month":5,
                    "year":2020,
                    "hr":16,
                    "min":40,
                    "team_1_score":0,
                    "team_2_score":0,
                    "date":5
                },
                {
                    "schedule_id":8,
                    "match_id":"10",
                    "team_1_name":"team aaa",
                    "team_2_name":"team www",
                    "month":5,
                    "year":2020,
                    "hr":16,
                    "min":40,
                    "team_1_score":0,
                    "team_2_score":0,
                    "date":5
                },
                {
                    "schedule_id":9,
                    "match_id":"10",
                    "team_1_name":"team aaa",
                    "team_2_name":"team bbb",
                    "month":10,
                    "year":2025,
                    "hr":17,
                    "min":40,
                    "team_1_score":0,
                    "team_2_score":0,
                    "date":20
                },
                {
                    "schedule_id":10,
                    "match_id":"10",
                    "team_1_name":"team my",
                    "team_2_name":"team mine",
                    "month":10,
                    "year":2025,
                    "hr":17,
                    "min":40,
                    "team_1_score":0,
                    "team_2_score":0,
                    "date":20
                }
            ])
        })
    })

    describe('GET /api/:matchid/allteam with incorrect', () => {
        it('should return all schedule by match id', async () => {
            const res = await request(server).get('/7/allschedule')
            expect(res.body).toEqual([
                {
                    "teamid":22,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":23,
                    "match_id":"10",
                    "team_name":"team1",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":24,
                    "match_id":"10",
                    "team_name":"team2",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                },
                {
                    "teamid":25,
                    "match_id":"10",
                    "team_name":"team3",
                    "team_contact":"blablaaasdada",
                    "team_owner":"team_owner1"
                }
            ])
        })
    })

    describe('GET /api/:matchid/allteam NOT FOUND', () => {
        it('should return all schedule by match id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /getallteamowner
    describe('GET /api/getallteamowner with correct', () => {
        it('should return all teamowner', async () => {
            const res = await request(server).get('/')
            expect(res.body).toEqual([
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"17",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"16",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"15",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"18",
                    "team_owner":"test1"
                },
                {
                    "match_id":"18",
                    "team_owner":"test1"
                },
                {
                    "match_id":"15",
                    "team_owner":"test1"
                },
                {
                    "match_id":"12",
                    "team_owner":"test1"
                }
            ])
        })
    })

    describe('GET /api/getallteamowner with incorrect', () => {
        it('should return all teamowner', async () => {
            const res = await request(server).get('/10')
            expect(res.body).toEqual([
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"10",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner1"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"11",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"17",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"16",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"15",
                    "team_owner":"team_owner2"
                },
                {
                    "match_id":"18",
                    "team_owner":"test1"
                },
                {
                    "match_id":"18",
                    "team_owner":"test1"
                },
                {
                    "match_id":"15",
                    "team_owner":"test1"
                },
                {
                    "match_id":"12",
                    "team_owner":"test1"
                }
            ])
        })
    })

    describe('GET /api/getallteamowner NOT FOUND', () => {
        it('should return all teamowner', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    // /getmatchidfromteamowner/:username
    describe('GET /api/getmatchidfromteamowner/:username correct', () => {
        it('should return match id by team owner', async () => {
            const res = await request(server).get('/team_owner1')
            expect(res.body).toEqual([
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"11"
                }
            ])
        })
    })

    describe('GET /api/getmatchidfromteamowner/:username with incorrect', () => {
        it('should return match id by team owner', async () => {
            const res = await request(server).get('/team_owner2')
            expect(res.body).toEqual([
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"10"
                },
                {
                    "match_id":"11"
                }
            ])
        })
    })

    describe('GET /api/getmatchidfromteamowner/:username NOT FOUND', () => {
        it('should return match id by team owner', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })
})

// /:matchid/newschedule ทำไม่เป็น