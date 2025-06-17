# Uber Clone Backend

## Overview
This project is a backend implementation for a user registration system, part of the Uber Clone application. It is built using Node.js, Express, and MongoDB with Mongoose for data modeling.

## Features
- User registration with validation
- Password hashing for security
- Generation of authentication tokens
- Structured MVC architecture

## File Structure
```
backend
├── controller
│   └── user.controller.js       # Handles user registration logic
├── models
│   └── user.model.js            # Defines the user schema and methods
├── routes
│   └── user.routes.js           # Defines routes for user-related operations
├── services
│   └── user.service.js          # Contains business logic for user creation
└── README.md                    # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the server, run:
```
npm start
```
Ensure that you have MongoDB running and the environment variables set up for JWT secret and database connection.

## API Endpoints
### POST /register
- **Description**: Registers a new user.
- **Request Body**:
  - `fullname`: Object containing `firstname` and `lastname`
  - `email`: User's email address
  - `password`: User's password
- **Response**:
  - `token`: Authentication token
  - `user`: User object
  - `message`: Success message

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.