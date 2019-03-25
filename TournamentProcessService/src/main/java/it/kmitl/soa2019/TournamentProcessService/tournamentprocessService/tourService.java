package it.kmitl.soa2019.TournamentProcessService.tournamentprocessService;

import it.kmitl.soa2019.TournamentProcessService.tournamentprocessService.Model.Tournament;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class tourService {

    private Tournament tournament = new Tournament("01", "BruceWayne","Gotham","during match");
    private tourService(){
        ArrayList<String> team = new ArrayList<String>();
        team.add("Justice League");
        team.add("The Avengers");
        team.add("X-men");
        team.add("X-Force");
        team.add("Fantastic Four");
        team.add("Teen Titans");
        team.add("Young Justice");
        team.add("Lantern Corps");
        tournament.setJointeam(team);
    }

    public Tournament getTour() {
        return tournament;
    }

    public String getTourStatus() {
        return tournament.getStatus();
    }

    public ArrayList<String> getTourTeam() {
        return tournament.getJointeam();
    }
}
