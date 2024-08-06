package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        return studentService.updateStudent(id, studentDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}

// package com.example.demo.controller;

// import com.example.demo.model.Student;
// import com.example.demo.service.StudentService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/students")
// public class StudentController {

// @Autowired
// private StudentService studentService;

// @GetMapping
// public List<Student> getAllStudents() {
// return studentService.getAllStudents();
// }

// @GetMapping("/{id}")
// public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
// Optional<Student> student = studentService.getStudentById(id);
// return student.map(ResponseEntity::ok).orElseGet(() ->
// ResponseEntity.notFound().build());
// }

// @PostMapping
// public Student createStudent(@RequestBody Student student) {
// return studentService.saveStudent(student);
// }

// @PutMapping("/{id}")
// public ResponseEntity<Student> updateStudent(@PathVariable Long id,
// @RequestBody Student studentDetails) {
// Optional<Student> student = studentService.getStudentById(id);

// if (student.isPresent()) {
// Student updatedStudent = student.get();
// updatedStudent.setUser(studentDetails.getUser());
// updatedStudent.setRegisterNumber(studentDetails.getRegisterNumber());

// studentService.saveStudent(updatedStudent);
// return ResponseEntity.ok(updatedStudent);
// } else {
// return ResponseEntity.notFound().build();
// }
// }

// @DeleteMapping("/{id}")
// public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
// Optional<Student> student = studentService.getStudentById(id);

// if (student.isPresent()) {
// studentService.deleteStudent(id);
// return ResponseEntity.ok().build();
// } else {
// return ResponseEntity.notFound().build();
// }
// }
// }
