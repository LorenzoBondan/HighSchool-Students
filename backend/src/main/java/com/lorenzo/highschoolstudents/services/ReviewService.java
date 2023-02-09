package com.lorenzo.highschoolstudents.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lorenzo.highschoolstudents.repositories.ReviewRepository;
import com.lorenzo.highschoolstudents.repositories.StudentRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private AuthService authService;
	
	
}
