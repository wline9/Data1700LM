import java.util.*;
import java.util.concurrent.ArrayBlockingQueue;

public class RecursionExample {

    public static int factorial(int n) {
        int fact = 1;
        int fac2 = 1;
        for (int i = 1; i <= n; i++) {
            fact = fact * i;
            fac2 = fact * i;

        }
        return fact;
    }

    public static int factorial2(int n) {
        if (n == 0) return 1;
        return n * factorial2(n-1);
    }

    public static void main(String[] args) {

        Queue<Integer> queue = new LinkedList<>();

        // Enqueues 20
        queue.add(20);

        // Dequeues the front element (20)
        int front = queue.poll();

        System.out.println(front);

        queue.offer(10);
        queue.offer(20);

        System.out.println(queue.poll()); // Outputs: 10 (FIFO behavior)


        Queue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.add(1);
        priorityQueue.add(4);
        priorityQueue.add(2);
        priorityQueue.add(3);
        priorityQueue.add(5);

        // Retrieves and removes the least element
        //int least = priorityQueue.poll();

        while (!priorityQueue.isEmpty()) {
            System.out.println(priorityQueue.poll());
        }

        Queue<Integer> queues = new ArrayBlockingQueue<>(2);
        queues.offer(1);
        queues.offer(2);
        boolean added = queue.offer(3); // Returns false, no exception
        System.out.println("Was the third element added? " + added); // false

        Deque<String> deque = new ArrayDeque<>();

        // Adding elements at both ends
        deque.addFirst("First");
        deque.addLast("Last");

        // Retrieving elements
        System.out.println(deque.getFirst()); // Outputs: First
        System.out.println(deque.getLast());  // Outputs: Last

        System.out.println(deque.peekFirst());
        // Removing elements
        deque.removeFirst();
        deque.removeLast();


        HashSet<String> set = new HashSet<>();
        set.add("First");
        set.add("Last");

        for (String fruit : set) {
            System.out.println(fruit);
        }

        System.out.println("Set contains 'Banana': " + set.contains("First"));

        HashSet<LinkedList> set2 = new HashSet<>();
        set2.add(new LinkedList());


    }
}
