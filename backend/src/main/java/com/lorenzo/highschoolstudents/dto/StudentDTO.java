package com.lorenzo.highschoolstudents.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.lorenzo.highschoolstudents.entities.Course;
import com.lorenzo.highschoolstudents.entities.Student;

public class StudentDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String name;
	private String nickname;
	private Integer age;
	private Boolean graduated;
	private String imgUrl;
	
	
	private List<CourseDTO> courses = new ArrayList<>();
	
	
	public StudentDTO() {}


	public StudentDTO(Long id, String name, String nickname, Integer age,
			Boolean graduated, String imgUrl) {
		super();
		this.id = id;
		this.name = name;
		this.nickname = nickname;
		this.age = age;
		this.graduated = graduated;
		this.imgUrl = imgUrl;
	}
	
	public StudentDTO(Student entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.nickname = entity.getNickname();
		this.age = entity.getAge();
		this.graduated = entity.getGraduated();
		this.imgUrl = entity.getImgUrl();
	}
	
	public StudentDTO(Student entity, Set<Course> courses) {
		this(entity); 
		courses.forEach(c -> this.courses.add(new CourseDTO(c)));
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getNickname() {
		return nickname;
	}


	public void setNickname(String nickname) {
		this.nickname = nickname;
	}


	public Integer getAge() {
		return age;
	}


	public void setAge(Integer age) {
		this.age = age;
	}


	public Boolean getGraduated() {
		return graduated;
	}


	public void setGraduated(Boolean graduated) {
		this.graduated = graduated;
	}


	public String getImgUrl() {
		return imgUrl;
	}


	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}


	public List<CourseDTO> getCourses() {
		return courses;
	}
	

	
	
}
