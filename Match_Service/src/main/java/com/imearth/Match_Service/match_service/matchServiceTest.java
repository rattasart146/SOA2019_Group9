package com.imearth.Match_Service.match_service;

import com.imearth.Match_Service.match_service.model.Match;
import com.imearth.Match_Service.match_service.repository.matchRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class matchServiceTest {

    @Mock
    matchRepository matchRepository;

    @Test
    public String searchbyid (int id){
        Optional<Match> SomeMatch = matchRepository.findById(id);
        return "Hello "+ SomeMatch.get().getId();
    }
}
