package com.example.petpals.repository;
import com.example.petpals.model.Register;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterRepo extends JpaRepository<Register, Long> {
    Register findByEmail(String email);

	Register findByUsername(String username);

	Optional<Register> findByUsernameAndPassword(String username, String password);
}