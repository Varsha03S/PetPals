package com.example.petpals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Pet;
import com.example.petpals.repository.PetRepo;

@Service
public class PetService {

	 @Autowired
	    private PetRepo petRepository;

	    public List<Pet> getAllPets() {
	        return petRepository.findAll();
	    }

	    public Pet savePet(Pet pet) {
	        return petRepository.save(pet);
	    }

	    public Pet updatePet(Pet pet) {
	    	System.out.println("Updating pet: "+pet);
	        return petRepository.save(pet);
	    }

	    public Pet getPetById(Long id) {
	        return petRepository.findById(id).orElse(null);
	    }
}