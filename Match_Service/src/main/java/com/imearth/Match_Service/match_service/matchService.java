package com.imearth.Match_Service.match_service;

import com.imearth.Match_Service.match_service.model.Match;
import com.imearth.Match_Service.match_service.repository.matchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;

@Service
public class matchService {

    @Autowired
    private matchRepository matchRepository;



    public  ArrayList<Match> getAll(){
        Iterator<Match> dataSet = matchRepository.findAll().iterator();
        ArrayList<Match> matchs = new ArrayList<>();

        while (dataSet.hasNext()){
            matchs.add(dataSet.next());
        }
        return matchs;
    }



    public Match searchbyid (int id){
        return null;
    }
}



