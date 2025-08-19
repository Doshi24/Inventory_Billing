CREATE TABLE invoice_items (
    id VARCHAR(36) PRIMARY KEY,
    invoice_id VARCHAR(36),
    product_id VARCHAR(36),
    product_name VARCHAR(255),
    qty INT NOT NULL,
    size VARCHAR(50),
    unit_price DECIMAL(10,2),
    gst_rate DECIMAL(5,2),
    discount DECIMAL(10,2),
    line_total DECIMAL(12,2),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id),
    FOREIGN KEY (product_id) REFERENCES products(product_code)
);