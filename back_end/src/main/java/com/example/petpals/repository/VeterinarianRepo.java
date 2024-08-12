package com.example.petpals.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.petpals.model.Veterinarian;

public interface VeterinarianRepo  extends JpaRepository<Veterinarian, Long>{

	List<Veterinarian> findByLocationAndService(String location, String service);




}
