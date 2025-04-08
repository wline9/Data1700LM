import java.util.HashMap;

public class HashMapImplementation {

    public static void main(String[] args) {

//        ID: 1670,
//        Name: "Akif Quddus Khan"
//        barcodeID: 123456,
//        City: "Ski",
//        Branch: "Nordre Follo"

        HashMap<String, Object> person = new HashMap<>();
        person.put("ID", 1670);
        person.put("Name", "Akif Quddus Khan");
        person.put("barcodeID", 12345);
        person.put("City", "Ski");
        person.put("Brance", "Nordre Follo");

        System.out.println("The data for the given person is as follows:");

        for (String key : person.keySet()) {
            System.out.println(key + ": " + person.get(key));
        }

        HashMap<Integer, String> hashmap = new HashMap<>();
        hashmap.put(1, "A");
        hashmap.put(2, "B");
        hashmap.put(3, "C");

        for (Integer key : hashmap.keySet()) {
            System.out.println(key + ": " + hashmap.get(key));
        }

//        HashMap<String, Integer> ageMap = new HashMap<>();
//
//        ageMap.put("John", 25);
//        ageMap.put("Jane", 30);
//        ageMap.put("Jim", 35);
//
//        System.out.println("John's age: " + ageMap.get("John"));
//
//        ageMap.remove("Jim");
//
//        System.out.println(ageMap);
//
//
//        if (ageMap.containsKey("Jane")) {
//            System.out.println("Jane is in the map.");
//        }
//        for (String name : ageMap.keySet()) {
//            System.out.println(name + ": " + ageMap.get(name));
//        }


    }
}
