package com.example.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Appointment;
import com.example.petpals.model.AppointmentRequest;
import com.example.petpals.repository.AppointmentRepo;

@Service
public class AppointmentService {

	@Autowired
    private AppointmentRepo appointmentRepo;

    public void bookAppointment(AppointmentRequest request) {
        // Create a new Appointment entity from the request data
        Appointment appointment = new Appointment();
        appointment.setName(request.getName());
        appointment.setEmail(request.getEmail());
//        appointment.setPreferredDate(request.getPreferredDate());
//        appointment.setPreferredTime(request.getPreferredTime());
        appointment.setDoctorId(request.getDoctorId());

        // Save the appointment to the database
        appointmentRepo.save(appointment);
    }
}

