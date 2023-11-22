package com.example.fullstackApp.fullstackProject.controller;

import com.example.fullstackApp.fullstackProject.Repository.UserRepository;
import com.example.fullstackApp.fullstackProject.Repository.UsertypeRepository;
import com.example.fullstackApp.fullstackProject.entity.User;
import com.example.fullstackApp.fullstackProject.entity.Usertype;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UsertypeRepository usertypeRepository;


    @PostMapping("/users")
    void addUser(@RequestBody User user){
        Optional<Usertype> usert=usertypeRepository.findById(user.getUsertype().getId());
        if(usert.isPresent()){
            user.setUsertype(usert.get());
        }
        userRepository.save(user);
    }

    @GetMapping("/users")
    public @ResponseBody Iterable<User> getUsers(@RequestParam(required=false) Integer id){
        if(id ==null){
            return userRepository.findAll();
        }
        else{
            Optional<User> usertype=userRepository.findById(id);
            ArrayList<User> e=new ArrayList<User>();
            e.add(usertype.get());
            return e;
        }

    }


    @DeleteMapping("/users")
    void deleteUser(@RequestParam("id") Integer id){
            userRepository.deleteById(id);
    }


    @GetMapping("/types")
    public @ResponseBody Iterable<Usertype> getAllUsertype(@RequestParam(required=false) Integer id){
        if(id ==null){
            return usertypeRepository.findAll();
        }
        else{
            Optional<Usertype> usertype=usertypeRepository.findById(id);
            List e=new ArrayList();


            if(usertype.isPresent()){
                e.add(usertype.get());
            }


            return e;
        }

    }

    @PostMapping("/types")
    public void addUsertype(@RequestBody Usertype usertype){
        usertypeRepository.save(usertype);
    }

    @GetMapping("/types?id={id}")
    public @ResponseBody Usertype getOneUsertype(@RequestParam("id") Integer id){
        Optional<Usertype> usertypeTosend=usertypeRepository.findById(id);
        if(usertypeTosend.isPresent()){
            System.out.println(usertypeTosend.get().toString());
            return usertypeTosend.get();
        }
        return null;
    }

    @DeleteMapping("/types")
    void deleteType(@RequestParam("id") Integer id){
            Iterable<User> users =userRepository.findAll();
        users.forEach(user ->{
            if((user.getUsertype()!=null)&&(user.getUsertype().getId()==id)){
            user.setUsertype(null);
        }});

            usertypeRepository.deleteById(id);
    }

}
