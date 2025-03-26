import java.util.HashSet;

public class HashSetImplementation {

    public static void main(String[] args) {

        HashSet<String> fruits = new HashSet<>();

        fruits.add("apple");
        fruits.add("orange");
        fruits.add("banana");
        fruits.add("apples");
        fruits.add("orange");

        System.out.println("Value for oranges exists: " + fruits.contains("oranges"));

        //fruits.remove("orange");

        System.out.println(fruits);

        for (String a : fruits) {
            System.out.println(a);
        }

    }
}
