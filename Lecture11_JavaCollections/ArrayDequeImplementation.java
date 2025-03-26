import java.util.ArrayDeque;
import java.util.Deque;

public class ArrayDequeImplementation {

    public static void main(String[] args) {

        Deque<String> deque = new ArrayDeque<>();

        deque.addFirst("First");
        deque.addLast("Second");

        System.out.println(deque);

        deque.addFirst("Before First");

        System.out.println(deque);

        System.out.println(deque.getFirst());
        System.out.println(deque.getLast());

        deque.removeFirst();
        deque.removeLast();

        System.out.println(deque);

    }

}
