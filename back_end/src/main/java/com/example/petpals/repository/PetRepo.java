package com.example.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petpals.model.Pet;

public interface PetRepo extends JpaRepository<Pet, Long>{

}
