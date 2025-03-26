import java.util.LinkedList;

public class LinkedListImplementation {
    public static void main(String[] args) {

        LinkedList<String> list = new LinkedList<String>();

//        list.add("A");
//        list.add("B");
//        list.add("C");
//        list.add("D");
//
//        System.out.println(list);
//        System.out.println(list.poll());

        list.push("A");
        list.push("B");
        list.push("C");
        list.push("D");

        System.out.println(list);
        System.out.println(list.poll());


    }
}
