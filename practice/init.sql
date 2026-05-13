USE company_db;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(100),
    salary INT
);

INSERT INTO employees (name, department, salary) VALUES
('Alice', 'HR', 50000),
('Bob', 'Engineering', 75000),
('Charlie', 'Finance', 65000),
('David', 'Marketing', 55000),
('Eva', 'Engineering', 80000);