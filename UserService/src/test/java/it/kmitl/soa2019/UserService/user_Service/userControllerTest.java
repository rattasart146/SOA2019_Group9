package it.kmitl.soa2019.UserService.user_Service;



import it.kmitl.soa2019.UserService.user_service.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class userControllerTest {

    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    public void getUser() {
        User userTest = new User("organizer01", "bruce", "wayne");

        ResponseEntity<User> response = testRestTemplate.exchange(
                "/user",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<User>() {
                });
        User userResponse = response.getBody();

        assertEquals(userTest.getUsername(), userResponse.getUsername());

        assertEquals(userTest.getFirstname(), userResponse.getFirstname());
        assertEquals(userTest.getLastname(), userResponse.getLastname());
        assertEquals(userTest.getUsername(), userResponse.getUsername());
    }


}
