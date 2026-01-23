<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# User API with NestJS, MongoDB & TypeScript

A simple **User CRUD API** built using **NestJS**, **MongoDB**, and **TypeScript**.  
This project demonstrates a clean, modular backend structure with DTO validation and optional data seeding.

### Demo url: https://user-api-nest.vercel.app/api/users
---

## Features

- User CRUD operations
- Modular NestJS architecture
- MongoDB integration with Mongoose
- DTO-based validation
- Type-safe code with TypeScript
- Optional sample data seeding
- Postman-ready APIs

---

## Tech Stack

- Framework: NestJS
- Database: MongoDB (Atlas)
- ODM: Mongoose
- Language: TypeScript
- Validation: class-validator, class-transformer

---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| POST | /api/users | Create a user |
| PUT | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

---

## User Fields

- name: string (required)
- age: number (required, ≥ 0)
- role: admin | user

---

## Prerequisites

- Node.js v16+
- MongoDB Atlas account
- NestJS CLI  
  npm i -g @nestjs/cli
- Postman or Thunder Client

---

## Installation & Setup

### Clone Repository


git clone <repo-url>
cd user-api-nest


### Install Dependencies


npm install


### Environment Variables

Create a `.env` file:


MONGODB_URL=your_mongodb_atlas_uri
PORT=5000


---

## Run the Project



npm run start:dev


Expected logs:
- Database connected
- Routes mapped
- Seeder logs (if enabled)
- 🚀 Server running on http://localhost:5000

---
