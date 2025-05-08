import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class VerifyIdController {

    // Map of valid IDs and their associated data
    private static final Map<Integer, Map<String, Object>> validUsers = new HashMap<>();

    static {
        // Only one user shown; others can be added similarly
        Map<String, Object> person = new HashMap<>();
        person.put("ID", 1670);
        person.put("Name", "Akif Quddus Khan");
        person.put("barcodeID", 123456);
        person.put("City", "Ski");
        person.put("Branch", "Nordre Follo");

        validUsers.put(1670, person);
        validUsers.put(1843, new HashMap<>());
        validUsers.put(2052, new HashMap<>());
        validUsers.put(2082, new HashMap<>());
        validUsers.put(2598, new HashMap<>());
    }

    @PostMapping("/verifyid")
    public ResponseEntity<Map<String, Object>> verifyId(@RequestParam("user_id") int userId) {
        Map<String, Object> response = new HashMap<>();

        if (validUsers.containsKey(userId) && !validUsers.get(userId).isEmpty()) {
            response.put("status", true);
            response.put("data", validUsers.get(userId));
        } else if (validUsers.containsKey(userId)) {
            response.put("status", true);
            response.put("message", "Valid ID but no user data available.");
        } else {
            response.put("status", false);
            response.put("message", "Invalid ID. Please try again.");
        }

        return ResponseEntity.ok(response);
    }
}
