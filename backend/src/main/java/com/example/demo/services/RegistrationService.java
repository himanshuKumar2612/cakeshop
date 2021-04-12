package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entites.Registration;
import com.example.demo.repositories.RegistrationRepo;


@Service
public class RegistrationService {
	@Autowired
	RegistrationRepo rrepo;
	public List<Registration> getAll()
	{
		return rrepo.findAll();
	}
	public Registration save(Registration rs)
	{
		return rrepo.save(rs);
		
	}
	
	public String check(String email,String password)
	{
		
		Registration r = rrepo.check(email, password);
		
		String send = r.getUsertype()+" "+r.getRegid();
		
		return send;
	}
	
	
	
	
}
