package com.example.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Contact;
import com.example.petpals.repository.ContactRepo;


@Service
public class ContactService {
	@Autowired
	private ContactRepo contactrepo;

    public ContactService(ContactRepo contactrepo) {
        this.contactrepo = contactrepo;
    }

    public Contact saveContact(Contact contact) {
        return contactrepo.save(contact);
    }
}