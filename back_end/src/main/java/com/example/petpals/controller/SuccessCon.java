package com.example.petpals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Success;
import com.example.petpals.service.SuccessService;

@RestController
@RequestMapping("/success-stories")
@CrossOrigin(origins="http://localhost:3000")
public class SuccessCon {
	 @Autowired
	  private SuccessService service;

	  @GetMapping
	  public List<Success> getAllSuccess() {
	    return service.getAllSuccess();
	  }

	  @PostMapping
	  public Success createSuccessStory(@RequestBody Success success) {
	    return service.saveSuccessStory(success);
	  }
}
