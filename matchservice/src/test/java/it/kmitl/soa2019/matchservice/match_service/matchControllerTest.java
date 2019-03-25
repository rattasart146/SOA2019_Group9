package it.kmitl.soa2019.matchservice.match_service;

import it.kmitl.soa2019.matchservice.match_service.match.Match;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class matchControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void getAllMatch() {

        ArrayList<Match> subjectList = new ArrayList<>(Arrays.asList(
                new Match("My game", "1", "somchai", "ladkrabang", "Registering"),
                new Match("Big game", "2", "somrak", "bangkok", "During Match"),
                new Match("Bang-ra-chan game", "3", "tongmhen", "newyork", "Registering"),
                new Match("SEA game", "4", "nipon", "pattaya", "Registering")
        ));


        ResponseEntity<List<Match>> response = testRestTemplate.exchange(
                "/match",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Match>>(){});
        List<Match> subjectsResponse = response.getBody();

        assertEquals(subjectList.size(), subjectsResponse.size());
        assertEquals(subjectList.get(0).getId(), subjectsResponse.get(0).getId());
        assertEquals(subjectList.get(0).getId(), subjectsResponse.get(0).getId());
    }

}
