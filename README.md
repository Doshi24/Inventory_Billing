# Inventory & Billing System

A full-stack inventory management and billing application designed to streamline product and invoicing processes.

## Tech Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** Lucide React
- **Notifications:** React Toastify

### Backend
- **Runtime:** Node.js (ESM)
- **Framework:** Express.js
- **Database:** MySQL
- **Database Driver:** mysql2
- **Dev Tools:** Nodemon for automatic server restarts
- **Logging:** Winston

## Features
- Product Management (Create, View, Update)
- Purchase & Sales Invoice Management
- Search and Filtering capabilities

## Project Structure
The project is organized into two main directories:
- `client/`: Contains the Vite-based React frontend application.
- `server/`: Contains the Express.js backend API, database models, and business logic.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MySQL Server

### Backend Setup
1. Navigate to the server directory:
   ```sh
   cd server
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your database connection details:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```
4. Start the backend development server:
   ```sh
   npm start
   ```
The server will be running on `http://localhost:3000` (or the port specified in your configuration).

### Frontend Setup
1. Navigate to the client directory:
   ```sh
   cd client/vite-project
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
The application will be accessible at `http://localhost:5173`.