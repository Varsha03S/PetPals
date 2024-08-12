package com.example.petpals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.FindHelp;
import com.example.petpals.service.FindHelpService;

@RestController
@RequestMapping("/find-help")
@CrossOrigin(origins="http://localhost:3000")
public class FindHelpCon {
	 @Autowired
	  private FindHelpService findhelpservice;

	  @PostMapping
	  public FindHelp createHelpRequest(@RequestBody FindHelp findhelp) {
	    return findhelpservice.saveFindHelp(findhelp);
	  }
}
