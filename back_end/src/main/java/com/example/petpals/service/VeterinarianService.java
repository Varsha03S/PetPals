package com.example.petpals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Veterinarian;
import com.example.petpals.repository.VeterinarianRepo;

@Service
public class VeterinarianService {
	 @Autowired
	    private VeterinarianRepo veterinarianrepo;
	 
	  public List<Veterinarian> findVeterinariansByLocationAndService(String location, String service) {
	        return veterinarianrepo.findByLocationAndService(location, service);
	    }
}
