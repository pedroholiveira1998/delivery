package com.dsdelivery.delivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsdelivery.delivery.dto.OrderDTO;
import com.dsdelivery.delivery.entities.Order;
import com.dsdelivery.delivery.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> showAll(){
		List<Order> list = repository.findOrderWithProducts();
		return list.stream().map(product -> new OrderDTO(product)).collect(Collectors.toList());
	}
}
