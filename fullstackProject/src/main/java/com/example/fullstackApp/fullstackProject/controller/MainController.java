package com.example.fullstackApp.fullstackProject.controller;

import com.example.fullstackApp.fullstackProject.Repository.UserRepository;
import com.example.fullstackApp.fullstackProject.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    /*
    Get POST request on /users  and save the User received.
     */
    @PostMapping("/users")
    void addUser(@RequestBody User user){
        userRepository.save(user);
    }

    @GetMapping("/users")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
}
