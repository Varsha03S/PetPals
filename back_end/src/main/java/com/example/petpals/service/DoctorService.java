package com.example.petpals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Doctor;
import com.example.petpals.repository.DoctorRepo;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    public List<Doctor> findAllVaccination() {
    	String serv = "vaccinations";
    	return doctorRepo.findDoctorsByService(serv);
    }
    
    public List<Doctor> findAllSurgery(){
    	String serv = "surgery";
    	return doctorRepo.findDoctorsByService(serv);
    }

	public List<Doctor> findAllDental() {
		String serv = "dental-care";
    	return doctorRepo.findDoctorsByService(serv);
	}

	public List<Doctor> findAllTesting() {
		String serv = "diagnostic-testing";
    	return doctorRepo.findDoctorsByService(serv);
	}

	public List<Doctor> findAllMicrochip() {
		String serv = "microchip-identification";
    	return doctorRepo.findDoctorsByService(serv);
	}

	public List<Doctor> findAllWellness() {
		String serv = "wellness-exams";
    	return doctorRepo.findDoctorsByService(serv);
	}
}

