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

#### Example Request
```json
POST /register
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Example Response
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2025-06-17T12:00:00.000Z"
  },
  "message": "User registered successfully"
}
```

---

### POST /user/login
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  - `email`: User's email address
  - `password`: User's password
- **Response**:
  - `token`: Authentication token
  - `user`: User object

#### Example Request
```json
POST /user/login
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Example Response
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2025-06-17T12:00:00.000Z"
  }
}
```

#### Error Response Example
```json
{
  "message": "Invalid email or password"
}
```

## Captain API Endpoints

### POST /captain/register
- **Description**: Registers a new captain (driver) with vehicle details.
- **Request Body**:
  - `fullname`: Object containing:
    - `firstname`: String (required)
    - `lastname`: String (required)
  - `email`: String (required)
  - `password`: String (required, min 6 chars)
  - `vehicle`: Object containing:
    - `color`: String (required)
    - `plate`: String (required)
    - `capacity`: Number (required, min 1)
    - `vehicleType`: String (required, one of: `car`, `bike`, `van`, `truck`, `auto`)
- **Response**:
  - `token`: Authentication token
  - `captain`: Captain object

#### Example Request
```json
POST /captain/register
{
  "fullname": {
    "firstname": "Ali",
    "lastname": "Khan"
  },
  "email": "ali.khan@example.com",
  "password": "strongPassword123",
  "vehicle": {
    "color": "White",
    "plate": "ABC-1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "ABC-1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Response Example
```json
{
  "message": "Captain with this email already exists"
}
```
or
```json
{
  "errors": [
    {
      "msg": "Please provide a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

### POST /captain/login
- **Description**: Authenticates a captain and returns a JWT token.
- **Request Body**:
  - `email`: String (required)
  - `password`: String (required, min 6 chars)
- **Response**:
  - `token`: Authentication token
  - `captain`: Captain object

#### Example Request
```json
POST /captain/login
{
  "email": "ali.khan@example.com",
  "password": "strongPassword123"
}
```

#### Example Response
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "ABC-1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Response Example
```json
{
  "message": "Invalid email or password"
}
```

---

### GET /captain/profile
- **Description**: Retrieves the authenticated captain's profile information.
- **Headers**:
  - `Authorization`: Bearer `<jwt_token>` (or via cookie if using cookies)
- **Response**:
  - `captain`: Captain object

#### Example Request
```
GET /captain/profile
Authorization: Bearer <jwt_token>
```

#### Example Response
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "ABC-1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### GET /captain/logout
- **Description**: Logs out the authenticated captain by invalidating the JWT token (adds it to a blacklist).
- **Headers**:
  - `Authorization`: Bearer `<jwt_token>` (or via cookie if using cookies)
- **Response**:
  - `message`: Success message

#### Example Request
```
GET /captain/logout
Authorization: Bearer <jwt_token>
```

#### Example Response
```json
{
  "message": "Logged out successfully"
}
```