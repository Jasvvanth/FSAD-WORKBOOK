package com.klu.config;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@Configuration
public class HibernateConfig {

    @Bean
    public LocalSessionFactoryBean sessionFactory() {

        LocalSessionFactoryBean factory = new LocalSessionFactoryBean();
        factory.setPackagesToScan("com.fsad.entity");

        Properties props = new Properties();
        props.put("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect");
        props.put("hibernate.hbm2ddl.auto", "update");
        props.put("hibernate.show_sql", "true");

        props.put("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver");
        props.put("hibernate.connection.url", "jdbc:mysql://localhost:3306/skill3_db");
        props.put("hibernate.connection.username", "root");
        props.put("hibernate.connection.password", "root");

        factory.setHibernateProperties(props);

        return factory;
    }
}
