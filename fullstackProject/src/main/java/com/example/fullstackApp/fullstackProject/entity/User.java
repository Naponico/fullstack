package com.example.fullstackApp.fullstackProject.entity;

import jakarta.persistence.*;

@Entity
@Table(name="User")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String name;

    private String firstname;
    private String email;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name="usertype_id")
    private Usertype usertype;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Usertype getUsertype() {
        return usertype;
    }

    public void setUsertype(Usertype usertype) {
        this.usertype = usertype;
    }
}
