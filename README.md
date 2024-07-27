# Database Managment with MySQL and Node.js || Expense Tracker Application

This project is an expense tracking application built using Node.js, Sequelize, and MySQL. The application allows users to track their expenses, manage budgets, and categorize expenses efficiently.

## Features

- User authentication and management
- Expense tracking with categories
- Budget management
- Payment method tracking

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- JavaScript

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/UWINTWALI/nodejs-sequelize-expense-tracker.git
   cd nodejs-sequelize-expense-tracker


## Requirements:

### Database Schema Design:
        Users
                user_id (Primary Key)
                username
                email
                password
                created_at
                updated_at
                
        Expenses
                expense_id (Primary Key)
                user_id (Foreign Key referencing Users)
                category_id (Foreign Key referencing Categories)
                amount
                date
                description
                created_at
                updated_at
                
        Categories
                category_id (Primary Key)
                user_id (Foreign Key referencing Users)
                category_name
                created_at
                updated_at
                
        Payment Methods
                payment_method_id (Primary Key)
                user_id (Foreign Key referencing Users)
                payment_method_name
                created_at
                updated_at
        
        Budgets
                budget_id (Primary Key)
                user_id (Foreign Key referencing Users)
                category_id (Foreign Key referencing Categories)
                amount
                start_date
                end_date
                created_at
                updated_at


### Project Structure:
```bash
./nodejs-sequelize-expense-tracker
├── models
│   ├── User.js
│   ├── Category.js
│   ├── Expense.js
│   ├── PaymentMethod.js
│   ├── Budget.js
│   └── index.js
├── sync.js
├── database.js
├── package.json
├── .env
└── README.md
```

### Contributing:
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

``` bash
You can customize the repository URL, database credentials, and any other specific details as per your project requirements.
```
### Contact: 
```bash
Name:   Jean de Dieu UWINTWALI
Email: uwintwalijeandedieu@gmail.com
```

