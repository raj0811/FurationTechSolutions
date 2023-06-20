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

## Registration and Login
- Signup <br>
![Alt text](https://i.ibb.co/9y5GwgB/signup.png "Optional title")

- Signup result
![Alt text](https://i.ibb.co/PmxRQ5n/signup-result.png "Optional title")

- If signup with already Taken email

![Alt text](https://i.ibb.co/mTX446y/ss1.png "Optional title")

- Login
![Alt text](https://i.ibb.co/sHmk996/login.png "Optional title")

- Login Result
![Alt text](https://i.ibb.co/bFF2Nkw/login-result.png "Optional title")

- If try to Login with invalid credenials
![Alt text](https://i.ibb.co/JRLywP0/login-failed.png "Optional title")


## API Calls

- Add items POST `/api/items`

![Alt text](https://i.ibb.co/hstfv92/add-item.png "Optional title")

- Show All items GET `/api/items`
![Alt text](https://i.ibb.co/0jMPGKR/showallitems.png "Optional title")

![Alt text](https://i.ibb.co/9NXrRw9/showallitems-result.png "Optional title")


- Show all item with pagination GET `/api/items/?page=1&limit=2`
![Alt text](https://i.ibb.co/cXF4B4j/showallitem-with-limit.png "Optional title")

- Update item PUT `/api/items/:id`
![Alt text](https://i.ibb.co/WPRYCXz/update.png "Optional title")

- Delete item DELETE `/api/items/:id`
![Alt text](https://i.ibb.co/WPRYCXz/update.png "Optional title")


# Thank You
