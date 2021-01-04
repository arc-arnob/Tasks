//service
package com.mongodb_example.mongodb_test.config;

import java.util.List;
import java.util.Optional;

import com.mongodb_example.mongodb_test.document.User;

public interface mongoConfigInterface {

    public List<User> getAllUsers();
    public List<User> getUser(Integer id);
    public User createUser(User user);
    public User updateuser(User user);
    // public User deleteById(Integer id);

    
}
