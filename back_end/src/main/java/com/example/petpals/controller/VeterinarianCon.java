package com.example.petpals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.petpals.model.Veterinarian;
import com.example.petpals.service.VeterinarianService;

public class VeterinarianCon {
	 @Autowired
	    private VeterinarianService veterinarianservice;

	    @GetMapping("/veterinarians/available")
	    public List<Veterinarian> getAvailableVeterinarians(
	            @RequestParam String location,
	            @RequestParam String service) {
	        return veterinarianservice.getAvailableVeterinarians(location, service);
	    }
}
