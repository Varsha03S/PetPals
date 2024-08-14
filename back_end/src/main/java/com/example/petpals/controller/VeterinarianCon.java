package com.example.petpals.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Veterinarian;
import com.example.petpals.service.VeterinarianService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class VeterinarianCon {
	 @Autowired
	    private VeterinarianService veterinarianservice;

	 @GetMapping("/api/veterinarians")
	 public List<Veterinarian> getVeterinarians(@RequestParam String location, @RequestParam String service) {
	        return veterinarianservice.findVeterinariansByLocationAndService(location, service);
	    }
}
