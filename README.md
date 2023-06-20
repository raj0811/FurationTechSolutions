# Furation Tech Solutions Backend Task

## Backend API to Create,See,Edit and Delete item from Database

## How to Setup
- Clone the repo
    `https://github.com/raj0811/FurationTechSolutions.git`
- And go to project Directory `cd FurationTechSolutions`

- Install dependencies `npm install`
- Start Project with `npm start`
- The Server should now be running at http://localhost

## Technology I used
- NodeJs
- Express
- MongoDB
- JSON Web token

## API Calls and Responses

- GET `/api/items` Retrieve all items from the database.
- GET `/api/items/?page=1&limit=2`  Retrieve all items from the database with pagination
- GET `/api/items/:id` - Retrieve a specific item by its ID.
- POST `/api/items` - Create a new item in the database.
- PUT `/api/items/:id` - Update an existing item by its ID.
- DELETE `/api/items/:id` - Delete an item by its ID.

### API calls for Registration and Login for authentication and authorization

POST `/user/signup` Register User
POST `/user/login` Login User


# Testing screenshot of POSTMAN

- Signup <br>
<img src='https://i.ibb.co/9y5GwgB/signup.png'>



