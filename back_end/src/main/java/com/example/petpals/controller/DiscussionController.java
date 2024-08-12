package com.example.petpals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.petpals.model.Discussion;
import com.example.petpals.service.DiscussionService;

@RestController
@RequestMapping("/general-discussions")
@CrossOrigin(origins = "http://localhost:3000") 
public class DiscussionController {

    @Autowired
    private DiscussionService discussionservice;

    @GetMapping
    public List<Discussion> getAllDiscussions() {
        return discussionservice.getAllDiscussions();
    }

    @PostMapping
    public Discussion createDiscussion(@RequestBody Discussion discussion) {
        return discussionservice.addDiscussion(discussion);
    }
}
