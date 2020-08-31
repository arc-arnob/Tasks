package com.springsecurityjpa.spirngsecurityjpa;

import java.util.Optional;

import com.springsecurityjpa.spirngsecurityjpa.models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>{

    Optional<User> findByUserName(String userName);
    
}