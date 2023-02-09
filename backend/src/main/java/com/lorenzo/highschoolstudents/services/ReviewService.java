package com.lorenzo.highschoolstudents.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lorenzo.highschoolstudents.dto.ReviewDTO;
import com.lorenzo.highschoolstudents.entities.Review;
import com.lorenzo.highschoolstudents.entities.Student;
import com.lorenzo.highschoolstudents.entities.User;
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
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findReviewsByStudentId(Long StudentId) {
		Student Student = studentRepository.getOne(StudentId);
		return Student.getReviews().stream().map(review -> new ReviewDTO(review)).collect(Collectors.toList());
	}
	
	@Transactional
	public ReviewDTO insert(ReviewDTO reviewDTO) {
		User user = authService.authenticated(); // VERIFICAR SE É UM USUÁRIO VÁLIDO
		
		Review review = new Review();
		review.setText(reviewDTO.getText());
		review.setStudent(studentRepository.getOne(reviewDTO.getStudentId()));
		review.setUser(user);
			
		repository.save(review);
		return new ReviewDTO(review);
	}
}
