package it.kmitl.soa2019.TournamentProcessService.tournamentprocessService;


import it.kmitl.soa2019.TournamentProcessService.tournamentprocessService.Model.Tournament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class tourController {
    @Autowired
    tourService tourService;

    @GetMapping(value = "/tour")
    public Tournament getUser() {
        return tourService.getTour();
    }
}
