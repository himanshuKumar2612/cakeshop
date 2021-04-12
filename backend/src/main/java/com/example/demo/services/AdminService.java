package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.Admin;
import com.example.demo.repositories.AdminRepo;

@Service
public class AdminService {
	@Autowired
	AdminRepo arepo;
	
	public Admin save(Admin ad)
	{
		return arepo.save(ad);
	}
	
	
}
