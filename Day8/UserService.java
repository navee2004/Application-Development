package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDetails.getName());
        user.setDateOfBirth(userDetails.getDateOfBirth());
        user.setGender(userDetails.getGender());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setRole(userDetails.getRole());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(user);
    }
}

// package com.example.demo.service;

// import com.example.demo.model.User;
// import com.example.demo.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class UserService {

// @Autowired
// private UserRepository userRepository;

// public User registerUser(User user) {
// return userRepository.save(user);
// }

// public User findByEmail(String email) {
// return userRepository.findByEmail(email);
// }

// public User findById(Long id) {
// return userRepository.findById(id).orElse(null);
// }

// public List<User> findAll() {
// return userRepository.findAll();
// }

// public User updateUser(Long id, User user) {
// user.setId(id);
// return userRepository.save(user);
// }

// public void deleteUser(Long id) {
// userRepository.deleteById(id);
// }
// }
