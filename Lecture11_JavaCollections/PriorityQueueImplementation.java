import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class PriorityQueueImplementation {
    public static void main(String[] args) {

        Queue<Integer> priorityQueue = new PriorityQueue<>();

        priorityQueue.add(1);
        priorityQueue.add(7);
        priorityQueue.add(3);
        priorityQueue.add(5);
        priorityQueue.add(2);

        System.out.println(priorityQueue);

        while (!priorityQueue.isEmpty()) {
            System.out.println(priorityQueue.poll());
        }

    }
}
