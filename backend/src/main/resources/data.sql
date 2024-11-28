-- Inserting some sample customers
INSERT INTO customer (id, company_name, address, phone_number, email)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'Tech Innovators Inc.', '123 Innovation Drive, Tech City, TX 75001', '800-555-1234', 'contact@techinnovators.com'),
    ('7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', 'Creative Solutions LLC', '456 Creative Avenue, Design City, NY 10001', '800-555-5678', 'contact@creativesolutions.com');

-- Inserting some sample projects
INSERT INTO project (id, name, description, started, ended)
VALUES
    ('8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 'AI Development', 'Develop AI-powered solutions', '2024-01-01', '2024-12-31'),
    ('9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 'Web App Overhaul', 'Revamp web platform for better user experience', '2024-02-01', '2024-06-30');

-- Inserting sales data (note the customer and project IDs)
INSERT INTO sale (id, customer_id, project_id, sales_amount)
VALUES
    ('1f621bcb-8d42-4c10-a9ae-d9f7e010cb9e', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 15000000),  -- $150,000 for Tech Innovators Inc. on AI Development
    ('2f621bcb-8d42-4c10-a9ae-d9f7e010cb9f', '7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', '9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 5000000);  -- $50,000 for Creative Solutions LLC on Web App Overhaul
