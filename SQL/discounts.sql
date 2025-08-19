CREATE TABLE discounts (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100),
    discount_type VARCHAR(50), -- e.g. percentage/fixed
    value DECIMAL(10,2),
    start_date DATE,
    end_date DATE,
    product_id VARCHAR(36),
    FOREIGN KEY (product_id) REFERENCES products(product_code)
);