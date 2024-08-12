package com.example.petpals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Contact;
import com.example.petpals.service.ContactService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ContactController {

	@Autowired
	 private ContactService contactservice;

	    public ContactController(ContactService contactservice) {
	        this.contactservice = contactservice;
	    }

	    @PostMapping("/contact-us")
	    public ResponseEntity<String> submitContact(@RequestBody Contact contact) {
	        try {
	            contactservice.saveContact(contact);
	            return ResponseEntity.ok("Your message has been sent successfully!");
	        } catch (Exception e) {
	            return ResponseEntity.status(500).body("There was an error sending your message. Please try again.");
	        }
	    }
	}