package com.example.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petpals.model.Appointment;

public interface AppointmentRepo extends JpaRepository<Appointment, Long> {


}
