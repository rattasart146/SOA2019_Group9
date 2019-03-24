package it.kmitl.soa2019.TournamentProcessService.tournamentprocessService.Model;

import java.util.ArrayList;

public class Tournament {
    private String tourID;
    private String tourOwner;
    private ArrayList<String> jointeam;
    private String location;
    private String status;

    public Tournament(String tourID, String tourOwner, String location, String status) {
        this.tourID = tourID;
        this.tourOwner = tourOwner;
        this.location = location;
        this.status = status;
    }

    public String getTourID() {
        return tourID;
    }

    public void setTourID(String tourID) {
        this.tourID = tourID;
    }

    public String getTourOwner() {
        return tourOwner;
    }

    public void setTourOwner(String tourOwner) {
        this.tourOwner = tourOwner;
    }

    public ArrayList<String> getJointeam() {
        return jointeam;
    }

    public void setJointeam(ArrayList<String> jointeam) {
        this.jointeam = jointeam;
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
