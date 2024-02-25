package com.example.backend.service;

import com.example.backend.model.Product;

import java.util.Optional;

public interface IProductService {
    Iterable<Product> findAll();
    Product save(Product product);
    Optional<Product> findById(Long id);


    void delete(Long id);


}
