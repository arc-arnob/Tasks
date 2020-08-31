package com.springsecurityjpa.spirngsecurityjpa;

import java.util.Optional;

import com.springsecurityjpa.spirngsecurityjpa.models.MyUserDetail;
import com.springsecurityjpa.spirngsecurityjpa.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    UserRepo userRepository;
    
    @Override //THis needs to call an jpa api-> loadUserByUserName
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

            Optional<User> user = userRepository.findByUserName(username);

            user.orElseThrow(() -> new UsernameNotFoundException("Not Found"+ username));

            return user.map(MyUserDetail::new).get();
    }
    
}