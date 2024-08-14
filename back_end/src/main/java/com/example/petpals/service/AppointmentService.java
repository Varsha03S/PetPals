package com.example.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.petpals.model.Appointment;
import com.example.petpals.repository.AppointmentRepo;

@Service
public class AppointmentService {

	@Autowired
    private AppointmentRepo appointmentrepo;
	
	 public Appointment bookAppointment(Appointment appointment) {
	        return appointmentrepo.save(appointment);
	    }
}

