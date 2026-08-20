import bcrypt from "bcrypt";

export const users = [
  {
    _id: "665000000000000000000001",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    password: await bcrypt.hash("12345678", 10),
    role: "user",
  },
  {
    _id: "665000000000000000000002",
    name: "Priya Singh",
    email: "priya.singh@example.com",
    password: await bcrypt.hash("12345678", 10),
    role: "user",
  },
  {
    _id: "665000000000000000000003",
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    password: await bcrypt.hash("12345678", 10),
    role: "user",
  },
  {
    _id: "665000000000000000000004",
    name: "Neha Verma",
    email: "neha.verma@example.com",
    password: await bcrypt.hash("12345678", 10),
    role: "user",
  },
  {
    _id: "665000000000000000000005",
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    password: await bcrypt.hash("12345678", 10),
    role: "admin",
  },
];

export const posts = [
  {
    _id: "666000000000000000000001",
    title: "Getting Started with Node.js",
    content:
      "Node.js allows developers to build scalable backend applications using JavaScript.",
    author: "665000000000000000000001",
    status: "published",
  },
  {
    _id: "666000000000000000000002",
    title: "Understanding Express.js",
    content:
      "Express.js is a lightweight web framework for building APIs and web applications with Node.js.",
    author: "665000000000000000000001",
    status: "published",
  },
  {
    _id: "666000000000000000000003",
    title: "MongoDB for Beginners",
    content:
      "MongoDB is a NoSQL database that stores data in flexible JSON-like documents.",
    author: "665000000000000000000002",
    status: "published",
  },
  {
    _id: "666000000000000000000004",
    title: "REST API Design Best Practices",
    content:
      "A well-designed REST API should have predictable URLs, appropriate HTTP methods, validation, and consistent responses.",
    author: "665000000000000000000002",
    status: "published",
  },
  {
    _id: "666000000000000000000005",
    title: "JWT Authentication in Express",
    content:
      "JWT can be used to authenticate users and protect private API endpoints.",
    author: "665000000000000000000003",
    status: "published",
  },
  {
    _id: "666000000000000000000006",
    title: "Understanding Middleware",
    content:
      "Express middleware functions can execute code, modify requests and responses, and control the request lifecycle.",
    author: "665000000000000000000003",
    status: "published",
  },
  {
    _id: "666000000000000000000007",
    title: "Clean Code Principles",
    content:
      "Writing clean and maintainable code helps teams build software that is easier to understand and extend.",
    author: "665000000000000000000004",
    status: "published",
  },
  {
    _id: "666000000000000000000008",
    title: "Database Indexing Explained",
    content:
      "Database indexes can significantly improve query performance when designed correctly.",
    author: "665000000000000000000004",
    status: "published",
  },
  {
    _id: "666000000000000000000009",
    title: "Scaling Node.js Applications",
    content:
      "Node.js applications can be scaled using load balancers, caching, clustering, queues, and horizontal scaling.",
    author: "665000000000000000000005",
    status: "published",
  },
  {
    _id: "666000000000000000000010",
    title: "System Design for Backend Engineers",
    content:
      "Understanding scalability, reliability, caching, databases, and distributed systems is important for building large-scale backend applications.",
    author: "665000000000000000000005",
    status: "draft",
  },
];
