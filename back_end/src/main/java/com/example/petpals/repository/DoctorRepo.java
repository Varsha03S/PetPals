package com.example.petpals.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.petpals.model.Doctor;

public interface DoctorRepo  extends JpaRepository<Doctor, Integer>{
	
	@Query("select d from Doctor d where d.service = :service")
	List<Doctor> findDoctorsByService(@Param("service") String service);
	

}
