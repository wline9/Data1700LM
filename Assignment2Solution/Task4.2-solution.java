import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestParam String username,
            @RequestParam String password) {

        Map<String, String> response = new HashMap<>();

        if ("admin".equals(username) && "12345".equals(password)) {
            response.put("status", "success");
            response.put("message", "Login successful");
            response.put("redirect", "/verification");
        } else {
            response.put("status", "error");
            response.put("message", "Username or password is incorrect.");
        }

        return response;
    }
}
