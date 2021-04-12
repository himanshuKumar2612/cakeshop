package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.LoginService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class LoginController {

	@Autowired 
	LoginService lservice;
	
	@GetMapping("/checkLogin")
	public String checkLogin(@RequestParam("uid") String uid, @RequestParam("pwd") String pwd)
	{
		return lservice.checkLogin(uid, pwd);
	}
	
}
