package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.CakeInfo;
import com.example.demo.entites.CustomerOrders;
import com.example.demo.entites.Registration;
import com.example.demo.repositories.CakeRepo;
import com.example.demo.repositories.CustomerOrdersRepo;
import com.example.demo.repositories.RegistrationRepo;
@Service
public class CustomerOrdersService {
	
	@Autowired
	CustomerOrdersRepo csorepo;
	
	@Autowired
	CakeRepo cakeRepo;
	
	@Autowired
	RegistrationRepo regRepo;
	
	public List<CustomerOrders> getAll()
	{
		return csorepo.findAll();
	}
	
	public boolean save(int customerId, int cakeId) 
	{
		boolean send = false;
		Registration customer = regRepo.findById(customerId).get();
		CakeInfo cake = cakeRepo.findById(cakeId).get();
		customer.addCake(cake);
		CustomerOrders co = new CustomerOrders(cakeId, customerId);
		
	 try {
		regRepo.save(customer);
		csorepo.save(co);
		send = true;
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
		return send;
	}

}
