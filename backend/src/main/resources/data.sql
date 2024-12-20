-- Inserting customers
INSERT INTO customer (id, company_name, address, phone_number, email)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'Tech Innovators Inc.', '123 Innovation Drive, Tech City, TX 75001', '800-555-1234', 'contact@techinnovators.com'),
    ('7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', 'Creative Solutions LLC', '456 Creative Avenue, Design City, NY 10001', '800-555-5678', 'contact@creativesolutions.com')
ON CONFLICT (id) DO NOTHING;

-- Inserting projects
INSERT INTO project (id, name, duration)
VALUES
    ('8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 'AI Development', 365),
    ('9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 'Web App Overhaul', 150),
    ('8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f', 'Mobile App Launch', 183)
ON CONFLICT (id) DO NOTHING;

INSERT INTO notes (id, project_id, note)
VALUES
    ('8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 'Initial brainstorming session completed.'),
    ('9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', '9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 'Wireframe designs are finalized.'),
    ('8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f', '8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f', 'Market research report submitted.')
ON CONFLICT DO NOTHING;

-- Inserting sales data
INSERT INTO sale (id, name, customer_id, project_id, sales_amount)
VALUES
    ('1f621bcb-8d42-4c10-a9ae-d9f7e010cb9e', 'AI-Dev Services', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 11000000),
    ('2f621bcb-8d42-4c10-a9ae-d9f7e010cb9f', 'DevOps Services', '7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', '9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 7000000),
    ('3f621bcb-8d42-4c10-a9ae-d9f7e010cb91', 'Consulting Services', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 5000000),
    ('4f621bcb-8d42-4c10-a9ae-d9f7e010cb92', 'Website Revamp', '7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', '9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d', 7500000),
    ('5f621bcb-8d42-4c10-a9ae-d9f7e010cb93', 'Mobile Deployment', '7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', '8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f', 1200000),
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb94', 'AI Training Program', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c', 12400000)
ON CONFLICT (id) DO NOTHING;

-- Inserting customer tags
INSERT INTO tag (id,customer_id, tag)
VALUES
    ('1f621bcb-8d42-4c10-a9ae-d9f7e010cb9e','6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'TECHNOLOGY'),
    ('2f621bcb-8d42-4c10-a9ae-d9f7e010cb9f', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', 'INNOVATION'),
    ('3f621bcb-8d42-4c10-a9ae-d9f7e010cb91','7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', 'SOFTWARE');

-- Inserting customer contacts
INSERT INTO contact (id, first_name, last_name, email, phone, customer_id)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9b', 'John', 'Smith', 'john.smith@techinnovators.com', '123-456-7890', '6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a'),
    ('7d221cde-1a2b-4e3c-9f6d-1e78910ab20c', 'Jane', 'Doe', 'jane.doe@nextgensolutions.com', '987-654-3210', '7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b')
ON CONFLICT (id) DO NOTHING;

-- Mapping projects to customers
INSERT INTO customer_project (customer_id, project_id)
VALUES
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '8f621bcb-8d42-4c10-a9ae-d9f7e010cb9c'), -- Tech Innovators and AI Development
    ('6f621bcb-8d42-4c10-a9ae-d9f7e010cb9a', '9a621bcb-8d42-4c10-a9ae-d9f7e010cb9d'), -- Tech Innovators and Web App Overhaul
    ('7a621bcb-8d42-4c10-a9ae-d9f7e010cb9b', '8d3f2bcb-2c34-4a10-a9cd-d3f5e011ab1f') -- Creative Solutions and Mobile App Launch
