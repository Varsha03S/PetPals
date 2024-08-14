package com.example.petpals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.petpals.model.Appointment;
import com.example.petpals.service.AppointmentService;

@RestController
@CrossOrigin(origins=" http://localhost:3000")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentservice;
	 
	@PostMapping
    public ResponseEntity<String> createAppointment(@RequestBody Appointment request) {
        try {
            appointmentservice.bookAppointment(request);
            return ResponseEntity.ok("Appointment booked successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error booking the appointment.");
        }
    }
}
