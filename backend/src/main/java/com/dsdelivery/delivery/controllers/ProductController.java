package com.dsdelivery.delivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsdelivery.delivery.dto.ProductDTO;
import com.dsdelivery.delivery.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> showAll(){
		List<ProductDTO> list = service.showAll();
		return ResponseEntity.ok().body(list);
	}
}
