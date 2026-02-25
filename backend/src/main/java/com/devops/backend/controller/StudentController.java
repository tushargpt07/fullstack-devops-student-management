package com.devops.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.devops.backend.repository.StudentRepository;
import com.devops.backend.entity.Student;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {

    private final StudentRepository repo;

    public StudentController(StudentRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Student> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Student create(@RequestBody Student student) {
        return repo.save(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
