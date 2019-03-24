package it.kmitl.soa2019.TournamentProcessService.tournamentprocessService;


import it.kmitl.soa2019.TournamentProcessService.tournamentprocessService.Model.Tournament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class tourController {
    @Autowired
    tourService tourService;


    @GetMapping(value = "/tour")
    public Tournament getTour() {
        return tourService.getTour();
    }

    @GetMapping(value = "/tour/team")
    public ArrayList<String> getTourTeam() {
        return tourService.getTourTeam();
    }

    @GetMapping(value = "/tour/status")
    public String getTourStatus() {
        return tourService.getTourStatus();
    }

}
