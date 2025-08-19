CREATE TABLE payments (
    id VARCHAR(36) PRIMARY KEY,
    invoice_id VARCHAR(36),
    payment_date DATE,
    amount_paid DECIMAL(12,2),
    payment_status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(50),
    reference_number VARCHAR(100),
    partial_payment_allowed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);