package com.example.fullstackApp.fullstackProject.Repository;


import com.example.fullstackApp.fullstackProject.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository  extends CrudRepository<User,Integer> {
}
