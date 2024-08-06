package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}

// package com.example.demo.controller;

// import com.example.demo.model.User;
// import com.example.demo.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @PostMapping("/register")
//     public User registerUser(@RequestBody User user) {
//         return userService.registerUser(user);
//     }

//     @PostMapping("/login")
//     public User loginUser(@RequestBody User user) {
//         User existingUser = userService.findByEmail(user.getEmail());
//         if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
//             return existingUser;
//         }
//         return null; // Or throw an appropriate exception
//     }

//     @GetMapping("/{id}")
//     public User getUser(@PathVariable Long id) {
//         return userService.findById(id);
//     }

//     @GetMapping
//     public List<User> getAllUsers() {
//         return userService.findAll();
//     }

//     @PutMapping("/{id}")
//     public User updateUser(@PathVariable Long id, @RequestBody User user) {
//         return userService.updateUser(id, user);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteUser(@PathVariable Long id) {
//         userService.deleteUser(id);
//     }
// }
