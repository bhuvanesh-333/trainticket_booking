🚆 Railway Ticket Booking System

A simple Java console-based project that allows users to view trains, book tickets, cancel tickets, and view all bookings.
This project is suitable for beginners, Java learners, and mini-project submissions.

📌 Project Overview

The Railway Ticket Booking System is a menu-driven Java application that simulates a basic ticket reservation system.
Users can:

✔ View all available trains
✔ Book a ticket
✔ Cancel a ticket
✔ View all booked tickets
✔ Exit the system

The program uses ArrayList, classes, and object-oriented concepts to manage trains and bookings.

🛠️ Features
✅ 1. View Trains

Displays all available trains with:

Train Number

Train Name

Source & Destination

Available Seats

✅ 2. Book Ticket

User enters:

Train Number

Passenger Name

The program checks:
✔ If train exists
✔ If seats are available
✔ If so, books the ticket

Then:

Ticket ID is auto-generated

Seat count reduces by 1

✅ 3. Cancel Ticket

User enters ticket ID.
System checks:
✔ If ticket exists
✔ If valid → booking removed
✔ Seats are incremented back

✅ 4. View All Bookings

Shows a list of all booked tickets with:

Ticket ID

Passenger Name

Train Number

✅ 5. Exit

Ends the application gracefully.

📂 Project Structure
src/
└── trainticket_booking.java


Classes Included:

1️⃣ Train
Stores train details like number, name, route, and seats.

2️⃣ Ticket
Stores booking details like ticket ID, passenger name, train number.

3️⃣ trainticket_booking (Main Class)
Contains:

Menu system

Booking logic

Cancel logic

Display options

🧠 Concepts Used

This project uses core Java concepts:

Concept	Usage
Classes & Objects	Train and Ticket classes
ArrayList	Stores trains and bookings
Constructor	Initializes train and ticket objects
Methods	viewTrains(), bookTicket(), etc.
Loops & Switch Case	Menu-driven operations
Scanner Class	Takes user input
OOP Principles	Encapsulation and object handling
📌 Code Flow (How It Works)

Program starts

Predefined trains are added

User sees a menu

Based on input (1–5), program performs actions

Continues until user selects Exit

▶️ How to Run the Project
Method 1: Using Command Line
javac trainticket_booking.java
java trainticket_booking

Method 2: Using an IDE (Eclipse / IntelliJ / VS Code)

✔ Create a new Java project
✔ Copy the code into the main file
✔ Run the program

📸 Sample Output
==== RAILWAY TICKET BOOKING SYSTEM ====
1. View Trains
2. Book Ticket
3. Cancel Ticket
4. View All Bookings
5. Exit
Enter choice: 1

--- Available Trains ---
Train No: 101 | Name: Chennai Express | From: Chennai | To: Bangalore | Seats Left: 5
Train No: 202 | Name: Mumbai Express  | From: Mumbai  | To: Pune      | Seats Left: 3

🚀 Future Enhancements

You can extend this project by adding:

🔹 File handling (saving bookings to a file)
🔹 Database connection using MySQL
🔹 Login system (Admin/User)
🔹 GUI using JavaFX or Swing
🔹 Train search using source & destination

🏁 Conclusion

This Java project is an excellent starting point for understanding:

✔ Java collections
✔ OOP programming
✔ Menu-driven applications
✔ Real-world logic implementation

It is simple, clean, and easy to modify for learning or academic submission.
