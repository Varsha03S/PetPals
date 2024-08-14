package com.example.petpals.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.petpals.model.Veterinarian;

public interface VeterinarianRepo  extends JpaRepository<Veterinarian, Long>{
	 @Query("SELECT v FROM Veterinarian v WHERE LOWER(v.location) LIKE LOWER(CONCAT('%', :location, '%')) AND LOWER(v.service) LIKE LOWER(CONCAT('%', :service, '%'))")
	    List<Veterinarian> findByLocationAndService(@Param("location") String location, @Param("service") String service);
}

