package com.example.petpals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petpals.model.Discussion;
import com.example.petpals.repository.DiscussionRepo;

@Service
public class DiscussionService {
	  @Autowired
	    private DiscussionRepo discussionrepo;

	    public List<Discussion> getAllDiscussions() {
	        return discussionrepo.findAll();
	    }

	    public Discussion addDiscussion(Discussion discussion) {
	        return discussionrepo.save(discussion);
	    }
}
