# User Management API

## Table of Contents

1. [Overview](#overview)
    - 1.1 [Project Description](#project-description)
    - 1.2 [Features](#features)
2. [Getting Started](#getting-started)
    - 2.1 [Installation](#installation)
    - 2.2 [Running the Server](#running-the-server)
3. [API Endpoints](#api-endpoints)
    - 3.1 [Create User](#create-user)
    - 3.2 [Get All Users](#get-all-users)
    - 3.3 [Get Single User](#get-single-user)
    - 3.4 [Update User](#update-user)
    - 3.5 [Delete User](#delete-user)
4. [Usage](#usage)
    - 4.1 [Testing the Endpoints](#testing-the-endpoints)
5. [Notes](#notes)
    - 5.1 [Password Hashing](#password-hashing)
    - 5.2 [Error Handling](#error-handling)
6. [Contributing](#contributing)
7. [Author](#author)

## Overview

### Project Description

This is a simple user management API built with Express.js and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on users.

### Features

- Create a new user with a hashed password
- Get all users (excluding passwords)
- Get a single user by email (excluding password)
- Update a user by email
- Delete a user by email

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies with `npm install`

### Running the Server

1. Start the server with `npm start`

## API Endpoints

### Create User

- `POST /api/users`: Create a new user

### Get All Users

- `GET /api/users`: Get all users

### Get Single User

- `GET /api/users/:email`: Get a single user by email

### Update User

- `PUT /api/users/:email`: Update a user by email

### Delete User

- `DELETE /api/users/:email`: Delete a user by email

## Usage

### Testing the Endpoints

1. Use a tool like Postman or cURL to test the endpoints

## Notes

### Password Hashing

- Passwords are hashed using the `hashPassword` function from `../utils/hashPasswords.mjs`

### Error Handling

- Error handling is basic and returns a 400 status code for most errors

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

- Name: [Pulipati Vijaya Simha]
- Email: [pulipativijayasimha@gmail.com]
- GitHub: [(https://github.com/Vijay2887)]
