import java.util.*;

public class ArrayListImplementation {
    public static void main(String[] args) {

    ArrayList<String> list = new ArrayList<>();

    list.add("BMW");
    list.add("Audi");
    list.add("Tesla");

    System.out.println(list);

    System.out.println(list.get(1));
    list.set(1, "Suzuki");
        System.out.println(list.get(1));


        System.out.println(list);


    }
}
