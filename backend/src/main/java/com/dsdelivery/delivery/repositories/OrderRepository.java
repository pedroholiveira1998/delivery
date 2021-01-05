package com.dsdelivery.delivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsdelivery.delivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
