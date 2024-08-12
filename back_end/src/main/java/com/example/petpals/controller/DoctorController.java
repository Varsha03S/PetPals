package com.example.petpals.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Doctor;
import com.example.petpals.service.DoctorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {
	 @Autowired
	 private DoctorService doc;
	 
	 @GetMapping("/vaccinations")
	 public List<Doctor> findByVaccination(){
		 return doc.findAllVaccination();
	 }
	 
	 @GetMapping("/surgery")
	 public List<Doctor> findBySurgery(){
		 return doc.findAllSurgery();
	 }
	 
	 @GetMapping("/dental-care")
	 public List<Doctor> findByDental(){
		 return doc.findAllDental();
	 }
	 
	 @GetMapping("/diagnostic-testing")
	 public List<Doctor> findByTesting(){
		 return doc.findAllTesting();
	 }
	 
	 @GetMapping("/microchip-identification")
	 public List<Doctor> findByMicrochip(){
		 return doc.findAllMicrochip();
	 }
	 
	 @GetMapping("/wellness-exams")
	 public List<Doctor> findByWellness(){
		 return doc.findAllWellness();
	 }

}
