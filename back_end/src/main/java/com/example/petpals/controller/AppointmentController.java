package com.example.petpals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.petpals.model.AppointmentRequest;
import com.example.petpals.service.AppointmentService;

@RestController
@CrossOrigin(origins=" http://localhost:3000")
public class AppointmentController {

	 @PostMapping("/appointment")
	    public ResponseEntity<String> bookAppointment(@RequestBody AppointmentRequest appointmentRequest) {
	        // Validate and process the appointment request
	        // Example: save to database or trigger notification
	        return ResponseEntity.ok("Appointment booked successfully!");
	    }
}
