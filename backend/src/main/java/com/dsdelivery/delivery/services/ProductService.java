package com.dsdelivery.delivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsdelivery.delivery.dto.ProductDTO;
import com.dsdelivery.delivery.entities.Product;
import com.dsdelivery.delivery.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> showAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(product -> new ProductDTO(product)).collect(Collectors.toList());
	}
}
