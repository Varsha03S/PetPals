package com.example.petpals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Pet;
import com.example.petpals.service.PetService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/pets")
public class PetController {

	 @Autowired
	    private PetService petService;

	    @GetMapping
	    public List<Pet> getAllPets() {
	        return petService.getAllPets();
	    }
	    
	    @PostMapping("/list")
	    public Pet listPet(@RequestBody Pet pet) {
	        System.out.println("Received request to list pet: " + pet);
	        return petService.savePet(pet);
	    }

	    @PutMapping("/update")
	    public Pet updatePet(@RequestBody Pet pet) {
	    	System.out.println("Received request: "+pet);
	        return petService.updatePet(pet);
	    }

	    @GetMapping("/{id}")
	    public Pet getPetById(@PathVariable Long id) {
	        return petService.getPetById(id);
	    }
}