package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "faculties")
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String department;
    private String designation;
    private String expertise;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and setters
    // ...
}

// package com.example.demo.model;

// import jakarta.persistence.*;
// import java.util.List;

// @Entity
// @Table(name = "faculty")
// public class Faculty {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @OneToOne
//     @JoinColumn(name = "user_id", referencedColumnName = "id")
//     private User user;

//     @OneToMany(mappedBy = "faculty", cascade = CascadeType.ALL, orphanRemoval = true)
//     private List<Booking> bookings;

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }

//     public List<Booking> getBookings() {
//         return bookings;
//     }

//     public void setBookings(List<Booking> bookings) {
//         this.bookings = bookings;
//     }
// }
