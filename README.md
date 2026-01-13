How to Run the Project

First, clone the project and install the dependencies:

npm install

after npm install use npm run dev to run project

Log in using any of the following credentials:

export const users: User[] = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    password: "Amit@123",
  },
  {
    name: "Priya Verma",
    email: "priya.verma@example.com",
    password: "Priya@123",
  },
  {
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    password: "Rahul@123",
  },
  {
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    password: "Neha@123",
  },
  {
    name: "Ankit Kumar",
    email: "ankit.kumar@example.com",
    password: "Ankit@123",
  },
  {
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    password: "Sneha@123",
  },
  {
    name: "Rohit Mehta",
    email: "rohit.mehta@example.com",
    password: "Rohit@123",
  },
  {
    name: "Kavita Joshi",
    email: "kavita.joshi@example.com",
    password: "Kavita@123",
  },
  {
    name: "Vikas Malhotra",
    email: "vikas.malhotra@example.com",
    password: "Vikas@123",
  },
  {
    name: "Pooja Saxena",
    email: "pooja.saxena@example.com",
    password: "Pooja@123",
  },
];


After logging in, the application fetches the dish data automatically.

Application Features

Vote Tab
Users can vote for dishes by assigning ranks.

Results Tab
Displays the final results based on the total points received by each dish.

Logout
Users can log out using the logout option.

Route Protection
A middleware is implemented to protect authenticated routes.