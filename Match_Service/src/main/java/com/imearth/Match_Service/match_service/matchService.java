package com.imearth.Match_Service.match_service;

import com.imearth.Match_Service.match_service.model.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;

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


    public String searchbyid (int id){
        Optional<Match> SomeMatch = matchRepository.findById(id);
        return "Hello "+ SomeMatch.get().getId();
    }
}



