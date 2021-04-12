package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.CakeInfo;
//import com.example.demo.entites.Registration;

@Repository
public interface CakeRepo extends JpaRepository<CakeInfo, Integer> {
	

}
