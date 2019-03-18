package com.imearth.Match_Service.match_service;


import com.imearth.Match_Service.match_service.model.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.ArrayList;
import java.util.List;

@RestController
public class matchController {

    @Autowired
    matchService matchservice;



    @RequestMapping(value = "/match/{id}")
    public List<Match> getAllMatch(@PathVariable String id) {
        return matchservice.getMatchs(id);
    }




    @GetMapping("/match")
    public ArrayList<Match> getMatch( ){
        return matchservice.getAllMatch();
        //แสดง match ทั้งหมด
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
