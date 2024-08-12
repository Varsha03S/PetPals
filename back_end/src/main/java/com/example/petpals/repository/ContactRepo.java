package com.example.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petpals.model.Contact;

public interface ContactRepo extends JpaRepository<Contact, Long>{

}
