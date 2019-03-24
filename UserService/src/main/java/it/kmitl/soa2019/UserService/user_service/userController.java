package it.kmitl.soa2019.UserService.user_service;


import it.kmitl.soa2019.UserService.user_service.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {
    @Autowired
    userService userService;

    @GetMapping(value = "/user")
    public User getUser() {
        return userService.getUser();
    }

    @GetMapping(value = "/user2")
    public User getUser2() {
        return userService.getUser2();
    }
}
