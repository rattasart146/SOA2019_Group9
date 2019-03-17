package com.imearth.Match_Service.match_service.repository;

import com.imearth.Match_Service.match_service.matchRepository;
import com.imearth.Match_Service.match_service.model.Match;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class matchRepositoryTest {

    @Autowired
    private com.imearth.Match_Service.match_service.matchRepository matchRepository;

    @Test
    public void success_find_by_id(){
        //initial data in database
        Match gamez = new Match();
        gamez.setId(1);
        gamez.setMatchname("my game");
        gamez.setOwner_username("King");
        gamez.setStatus("Openning");
        gamez.setLocation("mai bok");
        matchRepository.save(gamez);

        //find by id
        Optional<Match> SomeId = matchRepository.findById(1);


        //Assert
        assertEquals("1", SomeId.get().getId());

    }

}