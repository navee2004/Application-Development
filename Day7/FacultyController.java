package com.example.demo.controller;

import com.example.demo.model.Faculty;
import com.example.demo.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/faculties")
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @PostMapping
    public Faculty createFaculty(@RequestBody Faculty faculty) {
        return facultyService.createFaculty(faculty);
    }

    @GetMapping
    public List<Faculty> getAllFaculties() {
        return facultyService.getAllFaculties();
    }

    @GetMapping("/{id}")
    public Optional<Faculty> getFacultyById(@PathVariable Long id) {
        return facultyService.getFacultyById(id);
    }

    @PutMapping("/{id}")
    public Faculty updateFaculty(@PathVariable Long id, @RequestBody Faculty facultyDetails) {
        return facultyService.updateFaculty(id, facultyDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteFaculty(@PathVariable Long id) {
        facultyService.deleteFaculty(id);
    }
}

// package com.example.demo.controller;

// import com.example.demo.model.Faculty;
// import com.example.demo.service.FacultyService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/faculties")
// public class FacultyController {

//     @Autowired
//     private FacultyService facultyService;

//     @GetMapping
//     public List<Faculty> getAllFaculties() {
//         return facultyService.getAllFaculties();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Faculty> getFacultyById(@PathVariable Long id) {
//         Optional<Faculty> faculty = facultyService.getFacultyById(id);
//         return faculty.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     public Faculty createFaculty(@RequestBody Faculty faculty) {
//         return facultyService.saveFaculty(faculty);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Faculty> updateFaculty(@PathVariable Long id, @RequestBody Faculty facultyDetails) {
//         Optional<Faculty> faculty = facultyService.getFacultyById(id);

//         if (faculty.isPresent()) {
//             Faculty updatedFaculty = faculty.get();
//             updatedFaculty.setUser(facultyDetails.getUser());

//             facultyService.saveFaculty(updatedFaculty);
//             return ResponseEntity.ok(updatedFaculty);
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteFaculty(@PathVariable Long id) {
//         Optional<Faculty> faculty = facultyService.getFacultyById(id);

//         if (faculty.isPresent()) {
//             facultyService.deleteFaculty(id);
//             return ResponseEntity.ok().build();
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }
// }
