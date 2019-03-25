package it.kmitl.soa2019.matchservice.match_service;

import it.kmitl.soa2019.matchservice.match_service.match.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class matchController {

    @Autowired
    matchService matchservice;



    @RequestMapping(value = "/match/{id}")
    public List<Match> getFindMatch(@PathVariable String id) {
        return matchservice.getMatchs(id);
    }




    @GetMapping("/match")
    public ArrayList<Match> getAllMatch( ){
        return matchservice.getAllMatch();
        //แสดง match ทั้งหมด
    }

    @PostMapping(value = "/match/new")
    public Match createNewMatch() {
        return matchservice.createNewMatch();
    }
    @GetMapping(value = "/match/{id}/created")
    public Match showCreatedMatch() {
        return matchservice.showCreatedMatch();
    }


    /*

    @GetMapping("/match/{id}/detail")
    public String ShowMatchdetail(@PathVariable int id){
            return matchservice.searchbyid(id);
        //ดูช้อมูล match
    }


    /*
    @GetMapping("/match/{id}/register")
    public
    //กรอกข้อมูลสมัครเช้าร่วม match
    */

}
