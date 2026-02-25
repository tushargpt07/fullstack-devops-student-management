package com.devops.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devops.backend.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

