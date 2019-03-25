package it.kmitl.soa2019.matchservice.match_service;

import it.kmitl.soa2019.matchservice.match_service.match.Match;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class matchServiceTest {

    private ArrayList<Match> matchList = new ArrayList<>(Arrays.asList(
            new Match("My game", "1", "somchai", "ladkrabang", "Registering"),
            new Match("Big game", "2", "somrak", "bangkok", "During Match"),
            new Match("Bang-ra-chan game", "3", "tongmhen", "newyork", "Registering"),
            new Match("SEA game", "4", "nipon", "pattaya", "Registering")
    ));

    private ArrayList<Match> matchListExpected = new ArrayList<>(Arrays.asList(
            new Match("My game", "1", "somchai", "ladkrabang", "Registering")
            ));



    @Test
    public void getMatch() {
        List<Match> matchesIdentityById = new ArrayList<>();
        for(int count = 0;count < matchList.size();count++) {
            if(matchList.get(count).getId().equals("1")) {
                matchesIdentityById.add(matchList.get(count));
            }
        }

        assertEquals(matchListExpected.size(), matchesIdentityById.size());
        assertEquals(matchListExpected.get(0).getId(), matchesIdentityById.get(0).getId());
        assertEquals(matchListExpected.get(0).getId(), matchesIdentityById.get(0).getId());
    }
}
