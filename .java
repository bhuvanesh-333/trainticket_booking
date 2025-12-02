package trainticket;
import java.util.ArrayList;
import java.util.Scanner;

class Train {
    int trainNo;
    String trainName;
    String source;
    String destination;
    int seats;

    public Train(int trainNo, String trainName, String source, String destination, int seats) {
        this.trainNo = trainNo;
        this.trainName = trainName;
        this.source = source;
        this.destination = destination;
        this.seats = seats;
    }
}

class Ticket {
    int ticketId;
    String passengerName;
    int trainNo;

    public Ticket(int ticketId, String passengerName, int trainNo) {
        this.ticketId = ticketId;
        this.passengerName = passengerName;
        this.trainNo = trainNo;
    }
}

public class trainticket_booking {

    static ArrayList<Train> trains = new ArrayList<>();
    static ArrayList<Ticket> bookings = new ArrayList<>();
    static int ticketCounter = 1;

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        trains.add(new Train(101, "Chennai Express", "Chennai", "Bangalore", 5));
        trains.add(new Train(202, "Mumbai Express", "Mumbai", "Pune", 3));
        trains.add(new Train(303, "Delhi Express", "Delhi", "Agra", 4));

        while (true) {
            System.out.println("\n==== RAILWAY TICKET BOOKING SYSTEM ====");
            System.out.println("1. View Trains");
            System.out.println("2. Book Ticket");
            System.out.println("3. Cancel Ticket");
            System.out.println("4. View All Bookings");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1: viewTrains(); break;
                case 2: bookTicket(sc); break;
                case 3: cancelTicket(sc); break;
                case 4: viewBookings(); break;
                case 5:
                    System.out.println("Thank you for using Railway Booking System!");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }

    public static void viewTrains() {
        System.out.println("\n--- Available Trains ---");
        for (Train t : trains) {
            System.out.println("Train No: " + t.trainNo + " | Name: " + t.trainName +
                    " | From: " + t.source + " | To: " + t.destination +
                    " | Seats Left: " + t.seats);
        }
    }

    public static void bookTicket(Scanner sc) {
        System.out.print("\nEnter Train Number: ");
        int tNo = sc.nextInt();
        sc.nextLine();

        Train selectedTrain = null;

        for (Train t : trains) {
            if (t.trainNo == tNo) {
                selectedTrain = t;
                break;
            }
        }

        if (selectedTrain == null) {
            System.out.println("Train not found!");
            return;
        }

        if (selectedTrain.seats <= 0) {
            System.out.println("No seats available!");
            return;
        }

        System.out.print("Enter Passenger Name: ");
        String name = sc.nextLine();

        Ticket ticket = new Ticket(ticketCounter++, name, tNo);
        bookings.add(ticket);
        selectedTrain.seats--;

        System.out.println("Ticket Booked Successfully!");
        System.out.println("Ticket ID: " + ticket.ticketId);
    }

    public static void cancelTicket(Scanner sc) {
        System.out.print("\nEnter Ticket ID to Cancel: ");
        int id = sc.nextInt();

        Ticket found = null;

        for (Ticket t : bookings) {
            if (t.ticketId == id) {
                found = t;
                break;
            }
        }

        if (found == null) {
            System.out.println("Ticket not found!");
            return;
        }

        for (Train tr : trains) {
            if (tr.trainNo == found.trainNo) {
                tr.seats++;
                break;
            }
        }

        bookings.remove(found);
        System.out.println("Ticket Cancelled Successfully!");
    }

    public static void viewBookings() {
        System.out.println("\n--- All Bookings ---");
        if (bookings.isEmpty()) {
            System.out.println("No bookings yet!");
            return;
        }

        for (Ticket t : bookings) {
            System.out.println("Ticket ID: " + t.ticketId +
                    " | Passenger: " + t.passengerName +
                    " | Train No: " + t.trainNo);
        }
    }
}


