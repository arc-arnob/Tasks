package com.mongodb_example.mongodb_test.config;

import java.util.List;
import java.util.Optional;

import com.mongodb_example.mongodb_test.document.User;
import com.mongodb_example.mongodb_test.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Service
public class mongoConfig implements mongoConfigInterface {

    @Autowired
    UserRepository userRepository;
    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public List<User> getAllUsers() {
        // TODO Auto-generated method stub
        return userRepository.findAll();
    }

    @Override //Custom Query
    public List<User> getUser(Integer id) {
        // TODO Auto-generated method stub
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is("Sam"));
        return mongoTemplate.find(query, User.class);

    }

    @Override
    public User createUser(User user) {
        // TODO Auto-generated method stub
        return userRepository.save(user);
    }

    @Override
    public User updateuser(User user) {
        // TODO Auto-generated method stub
        return userRepository.save(user);
    }

    // @Override
    // @Query(value="{'id' : $0}", delete = true)
    // public User deleteById(Integer id);
    
    

    // @Bean //This will run as soon as springboot server starts
    // CommandLineRunner commandLineRunner(UserRepository userRepository) {
    //     return strings -> {
    //         userRepository.save(new User(1, "Peter", 45,2000.12));
    //         userRepository.save(new User(2, "Sam", 35,20000.00));
    //     };
    
    // }   

}
