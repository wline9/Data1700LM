// (a) We use a Queue (LinkedList implementation) since it follows FIFO order, ensuring that the first ticket added is processed first.

import java.util.LinkedList;
import java.util.Queue;

class TicketSystem {
    private Queue<String> ticketQueue = new LinkedList<>();

    // Add a new ticket
    public void addTicket(String ticket) {
        ticketQueue.offer(ticket);
        System.out.println("Ticket added: " + ticket);
    }

    // Process (remove) the next ticket
    public void processTicket() {
        if (!ticketQueue.isEmpty()) {
            System.out.println("Processing ticket: " + ticketQueue.poll());
        } else {
            System.out.println("No tickets to process.");
        }
    }

    // Display all pending tickets
    public void displayTickets() {
        if (ticketQueue.isEmpty()) {
            System.out.println("No pending tickets.");
        } else {
            System.out.println("Pending tickets: " + ticketQueue);
        }
    }

    public static void main(String[] args) {
        TicketSystem support = new TicketSystem();

        support.addTicket("Issue with login");
        support.addTicket("Payment not processed");
        support.addTicket("Bug in mobile app");

        support.displayTickets();

        support.processTicket();
        support.displayTickets();
    }
}
