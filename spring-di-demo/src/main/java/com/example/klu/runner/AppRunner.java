package com.example.klu.runner;

import javax.transaction.Transactional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.klu.dao.ProductDAO;
import com.example.klu.entity.Product;

@Component
@Transactional
public class AppRunner implements CommandLineRunner {

    private final ProductDAO dao;

    public AppRunner(ProductDAO dao) {
        this.dao = dao;
    }

    @Override
    public void run(String... args) {

        dao.save(new Product("Laptop", "Electronics", 55000, 5));
        dao.save(new Product("Mouse", "Electronics", 500, 20));
        dao.save(new Product("Chair", "Furniture", 1500, 0));
        dao.save(new Product("Table", "Furniture", 3000, 10));
        dao.save(new Product("Phone", "Electronics", 20000, 15));

        System.out.println("Total products: " + dao.countAll());
        System.out.println("Available: " + dao.countAvailable());
    }
}
