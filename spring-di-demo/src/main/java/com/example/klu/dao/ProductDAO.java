package com.example.klu.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.example.Product;

@Repository
public class ProductDAO {

    @PersistenceContext
    private EntityManager em;

    // Insert
    public void Save(Product p) {
        em.persist(p);
    }

    // 3a: Price ASC
    public List<Product> sortPriceAsc() {
        return em.createQuery(
            "from Product order by price asc", Product.class).getResultList();
    }

    // 3b: Price DESC
    public List<Product> sortPriceDesc() {
        return em.createQuery(
            "from Product order by price desc", Product.class).getResultList();
    }

    // 4: Quantity high to low
    public List<Product> sortByQuantity() {
        return em.createQuery(
            "from Product order by quantity desc", Product.class).getResultList();
    }

    // 5: Pagination
    public List<Product> pagination(int start, int size) {
        return em.createQuery("from Product", Product.class)
                 .setFirstResult(start)
                 .setMaxResults(size)
                 .getResultList();
    }

    // 6a: Count all
    public Long countAll() {
        return em.createQuery(
            "select count(p) from Product p", Long.class).getSingleResult();
    }

    // 6b: Quantity > 0
    public Long countAvailable() {
        return em.createQuery(
            "select count(p) from Product p where quantity > 0", Long.class)
            .getSingleResult();
    }

    // 6d: Min & Max price
    public Object[] minMaxPrice() {
        return em.createQuery(
            "select min(price), max(price) from Product", Object[].class)
            .getSingleResult();
    }

    // 7: Group by description
    public List<Object[]> groupByDescription() {
        return em.createQuery(
            "select description, count(*) from Product group by description")
            .getResultList();
    }

    // 8: Price range
    public List<Product> priceBetween(double min, double max) {
        return em.createQuery(
            "from Product where price between :min and :max", Product.class)
            .setParameter("min", min)
            .setParameter("max", max)
            .getResultList();
    }

    // 9: LIKE
    public List<Product> startsWith(String s) {
        return em.createQuery(
            "from Product where name like :x", Product.class)
            .setParameter("x", s + "%")
            .getResultList();
    }

    public List<Product> endsWith(String s) {
        return em.createQuery(
            "from Product where name like :x", Product.class)
            .setParameter("x", "%" + s)
            .getResultList();
    }

    public List<Product> contains(String s) {
        return em.createQuery(
            "from Product where name like :x", Product.class)
            .setParameter("x", "%" + s + "%")
            .getResultList();
    }

    public List<Product> exactLength(int len) {
        return em.createQuery(
            "from Product where length(name) = :l", Product.class)
            .setParameter("l", len)
            .getResultList();
    }

	public void save(com.example.klu.entity.Product product) {
		// TODO Auto-generated method stub
		
	}
}
