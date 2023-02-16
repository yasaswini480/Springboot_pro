package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repository.Employee_repository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class Employee_controller 
{
	@Autowired
	private Employee_repository emprepo;
	@GetMapping("/employees")
	public List<Employee> getallemployees()
	{
		return emprepo.findAll();
	}
	
	@PostMapping("/employees")
	public Employee createemployee(@RequestBody Employee emp)
	{
	    System.out.println(emp);
		return emprepo.save(emp);
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getemployeeid(@PathVariable Long id)
	{
		Employee employee = emprepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist " + id));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateemployee(@PathVariable Long id, @RequestBody Employee employeedetails)
	{
		Employee employee = emprepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist " + id));
		
		employee.setFirstname(employeedetails.getFirstname());
		employee.setLastname(employeedetails.getLastname());
		employee.setEmailid(employeedetails.getEmailid());
		Employee updated = emprepo.save(employee);
		return ResponseEntity.ok(updated);
	}
	@DeleteMapping("/employees/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteemp(@PathVariable Long id)
	{
		Employee employee = emprepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist " + id));
		emprepo.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
	
}
