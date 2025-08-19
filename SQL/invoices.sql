CREATE TABLE invoices (
    id VARCHAR(36) PRIMARY KEY,
    invoice_number VARCHAR(100) NOT NULL,
    invoice_type VARCHAR(50),
    company_id VARCHAR(36),
    dealer_id VARCHAR(36),
    invoice_date DATE,
    total_amount DECIMAL(12,2),
    tax_amount DECIMAL(12,2),
    discount DECIMAL(12,2),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    printed BOOLEAN DEFAULT FALSE,
    payment_mode VARCHAR(50),
    due_date DATE,
    remarks TEXT,
    FOREIGN KEY (company_id) REFERENCES companies(id),
    FOREIGN KEY (dealer_id) REFERENCES dealers(id)
);