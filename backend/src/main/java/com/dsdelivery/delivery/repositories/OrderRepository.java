package com.dsdelivery.delivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dsdelivery.delivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.product "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrderWithProducts();
}
