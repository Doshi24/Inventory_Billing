create table products(
product_code VARCHAR(36) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    description TEXT,
    per_unit_price DECIMAL(10,4) NOT NULL,
    tax_rate DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id VARCHAR(36),
    brand_id VARCHAR(36),
    unit_of_measure VARCHAR(50),
    tax_code_id VARCHAR(36)
);

select * from products;