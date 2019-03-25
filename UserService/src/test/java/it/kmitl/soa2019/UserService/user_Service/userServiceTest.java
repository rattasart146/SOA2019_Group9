package it.kmitl.soa2019.UserService.user_Service;


import it.kmitl.soa2019.UserService.user_service.model.User;
import org.junit.Test;
import static org.junit.Assert.*;

public class userServiceTest {
    private User userExpected = new User("organizer01", "Bruce", "Wayne");

    @Test
    public void getUser() {
        User userActual = new User("organizer01", "Bruce", "Wayne");

        assertEquals(userExpected.getUsername(), userActual.getUsername());
    }

}
