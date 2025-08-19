CREATE TABLE inventory (
    id VARCHAR(36) PRIMARY KEY,
    product_id VARCHAR(36),
    company_id VARCHAR(36),
    quantity INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_code),
    FOREIGN KEY (company_id) REFERENCES companies(id)
);