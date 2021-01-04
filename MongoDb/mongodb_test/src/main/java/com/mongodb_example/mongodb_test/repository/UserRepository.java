// DAO
package com.mongodb_example.mongodb_test.repository;

import com.mongodb_example.mongodb_test.document.User;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {
 
}
