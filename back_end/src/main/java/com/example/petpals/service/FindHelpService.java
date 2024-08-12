package com.example.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.FindHelp;
import com.example.petpals.repository.FindHelpRepo;

@Service
public class FindHelpService {

	 @Autowired
	  private FindHelpRepo findhelprepo;

	 
	 public FindHelp saveFindHelp(FindHelp findhelp) {
		  return findhelprepo.save(findhelp);
	 }

}
