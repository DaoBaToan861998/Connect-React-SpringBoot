package com.example.backend.controller;

import com.example.backend.model.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/product/list")
    public ResponseEntity<Iterable<Product>> getAll(){
        List<Product> products= (List<Product>) productService.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("/product/add")
    public  ResponseEntity<Product> save(@RequestBody Product product){
        return  new ResponseEntity<>(productService.save(product),HttpStatus.OK);
    }

    @DeleteMapping("/product/delete/{id}")
    public ResponseEntity<Product> deleteById(@PathVariable Long id){
        Optional<Product> productOptional=productService.findById(id);
            if(!productOptional.isPresent()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            productService.delete(productOptional.get().getId());
        return  new ResponseEntity<>(productOptional.get(),HttpStatus.OK);
    }
    @GetMapping("/product/findProduct/{id}")
    public  ResponseEntity<Product> findById(@PathVariable Long id){
        Optional<Product> productOptional=productService.findById(id);
        if(!productOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
          return new ResponseEntity<>(productOptional.get(),HttpStatus.OK);
    }

    @PutMapping("/product/update/{id}")
    public  ResponseEntity<Product> deleteProduct(@RequestBody Product productUpdate,@PathVariable Long id){
        Optional<Product> productOptional=productService.findById(id);
        if(!productOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productUpdate.setId(productOptional.get().getId());
        return  new ResponseEntity<>(productService.save(productUpdate),HttpStatus.OK);
    }



}
