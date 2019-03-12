package com.imearth.Match_Service.match_service.model;

public class Match {

    private  String matchname;
    private  int id;
    private  String owner_username;
    private  String location;
    private  String status;

    public Match() {
    }

    public Match(String matchname, int id, String owner_username, String location, String status) {
        this.matchname = matchname;
        this.id = id;
        this.owner_username = owner_username;
        this.location = location;
        this.status = status;
    }

    public String getMatchname() {
        return matchname;
    }

    public void setMatchname(String matchname) {
        this.matchname = matchname;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOwner_username() {
        return owner_username;
    }

    public void setOwner_username(String owner_username) {
        this.owner_username = owner_username;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
