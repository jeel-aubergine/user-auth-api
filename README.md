# User Authentication API with Node.js

This is a User authentication API built using Node.js and Express with database connectivity using `pg` and essential middleware like `body-parser`. It also includes `nodemon` for easier development.

---

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js
- npm
- PostgreSQL

---

## Setup Instructions

Follow these steps to set up the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jeel-aubergine/user-auth-api.git
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   Run this command to install all required packages:
   ```bash
   npm install
   ```

3. **Set Up Database Credentials**:
   Go to the `src/constants/constants.js` and find the following code snippet.
   ```js
   const constants = {
      DB_USERNAME: <your-postgres-username>,
      DB_PASSWORD: <your-postgres-password>,
      DB_NAME: <your-postgres-database-name>,
      DB_HOST: 'localhost',
      DB_PORT: 5432,
   };
   ```
   Replace `<your-postgres-username>`, `<your-postgres-password>` and `<your-postgres-database-name>` with your PostgreSQL connection details.

---

## Running the Application

To run the server:

1. **Start the Server**:
   ```bash
   npm start
   ```
   or with `nodemon` (for development):
   ```bash
   npm run dev
   ```

2. The server will start on the specified `PORT`. Open your browser and navigate to:
   ```
   http://localhost:3000/
   ```

---

## API Endpoints

Here are the available API endpoints:

- **POST** `/auth/register`:
  Register a new user.
  ```json
  {
    "username": "user",
    "password": "password"
  }
  ```

- **POST** `/auth/login`:
   Login an existing user.
   ```json
   {
      "username": "user",
      "password": "password"
   }
   ```

- **GET** `/auth/profile`:
   Protected route to get user profile.
   Requires a valid `Authorization` header with the token received during login.

- **GET** `/auth/logout`:
   Logout the user.
   Requires a valid `Authorization` header with the token received during login.

---

### Project Structure

Here is the project structure:

- `src/`: Contains the source code.
  - `constants/`: Contains the constants used in the project.
  - `controllers/`: Contains the route controllers.
  - `middleware/`: Contains the middleware functions.
  - `models/`: Contains the database models.
  - `services/`: Contains the service functions.
  - `database/`: Contains the database connection setup.
  - `routes/`: Contains the route definitions.
  - `utils/`: Contains utility functions.

---

## Dependencies

Here are the key dependencies of the project:

- express: Web framework for Node.js.
- pg: PostgreSQL client for Node.js.
- body-parser: Middleware for parsing incoming request bodies.
- nodemon: Automatically restarts the server during development.

Install any missing dependencies using:
```bash
npm install <package-name>
```
