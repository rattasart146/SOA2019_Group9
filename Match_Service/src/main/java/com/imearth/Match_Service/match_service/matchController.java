package com.imearth.Match_Service.match_service;


import com.imearth.Match_Service.match_service.model.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
public class matchController {

    @Autowired
    matchService matchservice;

    @GetMapping("/match")
    public ArrayList<Match> getMatch( ){
        return matchservice.getAll();
        //แสดง match ทั้งหมด
    }

    /*
    @GetMapping("/match/{id}")
    public Match  ShowMatchdetail(@PathVariable int id){
            matchService.
            return new Match();
        //ดูช้อมูล match
    }



    @GetMapping("/match/{id}/register")
    public
    //กรอกข้อมูลสมัครเช้าร่วม match
    */

}
