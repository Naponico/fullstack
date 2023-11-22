package com.example.fullstackApp.fullstackProject.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Usertype")
public class Usertype{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String usertype;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsertype() {
        return usertype;
    }

    public void setUsertype(String usertype) {
        this.usertype = usertype;
    }
}