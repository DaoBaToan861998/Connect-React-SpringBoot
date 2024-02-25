package com.example.backend.service;


import com.example.backend.model.Product;
import com.example.backend.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService implements  IProductService{
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public Iterable<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public Product save(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return iProductRepository.findById(id);
    }



    @Override
    public void delete(Long id) {
        iProductRepository.deleteById(id);
    }
}
