package com.example.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petpals.model.Discussion;

public interface DiscussionRepo extends JpaRepository<Discussion, Long>  {

}
