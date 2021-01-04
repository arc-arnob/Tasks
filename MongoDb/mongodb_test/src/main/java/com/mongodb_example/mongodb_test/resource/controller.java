package com.mongodb_example.mongodb_test.resource;

import java.util.List;
import java.util.Optional;

import com.mongodb_example.mongodb_test.config.mongoConfig;
import com.mongodb_example.mongodb_test.document.User;
import com.mongodb_example.mongodb_test.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rest/user")
public class controller {

    @Autowired
    private mongoConfig mongoConfigobj;
    
    @GetMapping("/home")
    public String home(){
        return "This is home";
    }
    

    @GetMapping("/all")
    public List<User> getAll() {
        return this.mongoConfigobj.getAllUsers();
    }

    @GetMapping("/user/{user_id}")
    public List<User> userById(@PathVariable String user_id){
        return this.mongoConfigobj.getUser(Integer.parseInt(user_id));
    }

    
}
