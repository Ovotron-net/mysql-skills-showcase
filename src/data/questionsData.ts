
import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    title: 'Basic SQL Understanding',
    description: 'Which of the following SQL statements would you use to retrieve data from a database?',
    choices: [
      { id: 'a', text: 'INSERT' },
      { id: 'b', text: 'UPDATE' },
      { id: 'c', text: 'SELECT' },
      { id: 'd', text: 'DELETE' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 2,
    type: 'multiple-choice',
    title: 'Primary Keys',
    description: 'What is the main purpose of a PRIMARY KEY constraint in MySQL?',
    choices: [
      { id: 'a', text: 'To ensure all values in a column are unique' },
      { id: 'b', text: 'To uniquely identify each record in a table and ensure data integrity' },
      { id: 'c', text: 'To create relationships between tables' },
      { id: 'd', text: 'To prevent NULL values in a column' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 3,
    type: 'sql-query',
    title: 'Writing a Simple Query',
    description: 'Write a SQL query to select all columns from the "employees" table where the "department" is "IT".',
    correctAnswer: 'SELECT * FROM employees WHERE department = "IT";',
  },
  {
    id: 4,
    type: 'multiple-choice',
    title: 'MySQL JOIN Operations',
    description: 'Which JOIN type returns rows when there is at least one match in both tables?',
    choices: [
      { id: 'a', text: 'LEFT JOIN' },
      { id: 'b', text: 'RIGHT JOIN' },
      { id: 'c', text: 'INNER JOIN' },
      { id: 'd', text: 'FULL OUTER JOIN' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 5,
    type: 'multiple-choice',
    title: 'Database Normalization',
    description: 'What is the main purpose of normalization in database design?',
    choices: [
      { id: 'a', text: 'To speed up query performance' },
      { id: 'b', text: 'To reduce data redundancy and improve data integrity' },
      { id: 'c', text: 'To encrypt sensitive data' },
      { id: 'd', text: 'To compress data and save storage space' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 6,
    type: 'sql-query',
    title: 'Advanced Query',
    description: 'Write a SQL query to count the number of employees in each department and order the results by the count in descending order.',
    correctAnswer: 'SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department ORDER BY employee_count DESC;',
  },
  {
    id: 7,
    type: 'multiple-choice',
    title: 'MySQL Indexes',
    description: 'What is the primary benefit of using indexes in MySQL?',
    choices: [
      { id: 'a', text: 'They make data entry faster' },
      { id: 'b', text: 'They improve query performance by allowing faster data retrieval' },
      { id: 'c', text: 'They prevent duplicate records' },
      { id: 'd', text: 'They automatically correct data entry errors' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 8,
    type: 'multiple-choice',
    title: 'MySQL Storage Engines',
    description: 'Which MySQL storage engine supports transactions, foreign keys, and row-level locking?',
    choices: [
      { id: 'a', text: 'MyISAM' },
      { id: 'b', text: 'InnoDB' },
      { id: 'c', text: 'MEMORY' },
      { id: 'd', text: 'ARCHIVE' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 9,
    type: 'sql-query',
    title: 'JOIN Query',
    description: 'Write a SQL query to join the "orders" table with the "customers" table using the customer_id field and retrieve the customer name and order date for all orders placed in 2023.',
    correctAnswer: 'SELECT customers.name, orders.order_date FROM orders INNER JOIN customers ON orders.customer_id = customers.id WHERE YEAR(orders.order_date) = 2023;',
  },
  {
    id: 10,
    type: 'multiple-choice',
    title: 'MySQL Transactions',
    description: 'Which of the following statements correctly describes ACID properties in MySQL transactions?',
    choices: [
      { id: 'a', text: 'Atomicity, Consistency, Isolation, Durability' },
      { id: 'b', text: 'Authentication, Certification, Integration, Documentation' },
      { id: 'c', text: 'Authority, Certification, Identification, Distribution' },
      { id: 'd', text: 'Authorization, Credential, Indexing, Development' },
    ],
    correctAnswer: 'a',
  },
];
