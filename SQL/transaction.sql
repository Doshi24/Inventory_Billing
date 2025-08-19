CREATE TABLE transactions (
    id VARCHAR(36) PRIMARY KEY,
    transaction_type VARCHAR(50),
    invoice_id VARCHAR(36),
    product_id VARCHAR(36),
    qty INT,
    price DECIMAL(10,2),
    gst_applied DECIMAL(5,2),
    discount DECIMAL(10,2),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id),
    FOREIGN KEY (product_id) REFERENCES products(product_code)
);