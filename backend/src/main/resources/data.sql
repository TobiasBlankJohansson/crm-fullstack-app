-- Insert customers
INSERT INTO customer (id, company_name, address, phone_number, email)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'Tech Innovators Inc.', '123 Innovation Drive, Tech City, TX 75001', '800-555-1234', 'contact@techinnovators.com'),
    ('e2b19dcd-8e8d-4b2b-8c4b-b3a9d6e098b9', 'Next Gen Solutions', '456 Future Blvd, Innovate City, CA 90210', '900-555-5678', 'contact@nextgensolutions.com');

-- Insert contacts
INSERT INTO contact (id, first_name, last_name, email, phone, customer_id)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9b', 'John', 'Smith', 'john.smith@techinnovators.com', '123-456-7890', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a'),
    ('7d221cde-1a2b-4e3c-9f6d-1e78910ab20c', 'Jane', 'Doe', 'jane.doe@nextgensolutions.com', '987-654-3210', 'e2b19dcd-8e8d-4b2b-8c4b-b3a9d6e098b9');

-- Insert projects
INSERT INTO project (id, name, description, started, ended, sales)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 'AI Development', 'Develop AI-powered solutions', '2024-01-01', '2024-12-31', 1000000),
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9e', 'Web App Overhaul', 'Revamp web platform for better user experience', '2024-02-01', '2024-06-30', 500000),
    ('8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f', 'Mobile App Launch', 'Launch a cutting-edge mobile app', '2024-03-01', '2024-08-31', 750000);

-- Map projects to customers
INSERT INTO project_customers (customers_id, projects_id)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9d'),
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9e'),
    ('e2b19dcd-8e8d-4b2b-8c4b-b3a9d6e098b9', '8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f');

-- Insert tags for customers
INSERT INTO customer_tags (customer_id, tags)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'TECHNOLOGY'),
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'INNOVATION'),
    ('e2b19dcd-8e8d-4b2b-8c4b-b3a9d6e098b9', 'SOFTWARE');
