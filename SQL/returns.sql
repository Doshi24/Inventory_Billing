CREATE TABLE returns (
    id VARCHAR(36) PRIMARY KEY,
    invoice_id VARCHAR(36),
    product_id VARCHAR(36),
    qty INT,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id),
    FOREIGN KEY (product_id) REFERENCES products(product_code)
);