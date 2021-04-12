package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.CustomerOrders;
@Repository
public interface CustomerOrdersRepo extends JpaRepository<CustomerOrders, Integer> {

}
