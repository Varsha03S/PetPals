package com.example.petpals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Success;
import com.example.petpals.repository.SuccessRepo;

@Service
public class SuccessService {
	  @Autowired
	  private SuccessRepo successrepo;

	  public Success saveSuccessStory(Success success) {
	    return successrepo.save(success);
	  }

	  public List<Success> getAllSuccess() {
	    return successrepo.findAll();
	  }
}
