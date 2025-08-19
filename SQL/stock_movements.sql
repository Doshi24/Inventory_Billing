CREATE TABLE stock_movements (
    id VARCHAR(36) PRIMARY KEY,
    product_id VARCHAR(36),
    old_qty INT,
    new_qty INT,
    movement_type VARCHAR(50), -- e.g. purchase/sale/return
    ref_id VARCHAR(36),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_code)
);