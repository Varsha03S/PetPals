package com.example.petpals.service;

import com.example.petpals.model.Register;
import com.example.petpals.repository.RegisterRepo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
	
    @Autowired
    private RegisterRepo registerrepo;

    public Register registerUser(Register user) {
        if (registerrepo.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User with email " + user.getEmail() + " already exists.");
        }
        return registerrepo.save(user);
    }

    public Register findByUsername(String username) {
        return registerrepo.findByUsername(username);
    }

    public Optional<Register> loginUser(String username, String password) {
        return registerrepo.findByUsernameAndPassword(username, password);
    }
}