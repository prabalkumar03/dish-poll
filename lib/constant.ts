import { User } from "./types";

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


export const RANK_POINTS: Record<number, number> = {
    1: 30,
    2: 20,
    3: 10
};

export const truncateString = (text: string): string =>
    text.length > 50 ? text.slice(0, 50) + "..." : text;
