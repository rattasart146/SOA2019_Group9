package it.kmitl.soa2019.UserService.user_service;


import it.kmitl.soa2019.UserService.user_service.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class userService {
    private java.util.ArrayList<String> ArrayList;
    private User user = new User("organizer01", "bruce", "wayne");
    private User user2 = new User("organizer02", "damian", "wayne");
    private ArrayList<String> owns,join,owns2,join2;

    public userService() {
        owns = new ArrayList<String>();
        owns.add("new game");
        owns.add("sea game");
        user.setMatchOwns(owns);


        join = new ArrayList<String>();
        join.add("aaa game");
        join.add("bbb game");
        user.setMatchJoin(join);


        owns2 = new ArrayList<String>();
        owns2.add("aaa game");
        owns2.add("bbb game");
        user2.setMatchOwns(owns2);


        join2 = new ArrayList<String>();
        join2.add("new game");
        join2.add("sea game");
        user2.setMatchJoin(join2);

    }


    public User getUser() {
        if(user != null) {
            return user;
        }
        return null;
    }
    public User getUser2() {
        if(user2 != null) {
            return user2;
        }
        return null;
    }
}
