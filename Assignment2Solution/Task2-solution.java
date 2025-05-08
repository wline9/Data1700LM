@Controller OR @RestController
@RequestMapping("/users") // Base path for all user-related requests
public class UserController {

    @PostMapping("/signup") // Handles user signup
    public String signup() {
        return "User signed up successfully!";
    }

    @PostMapping("/login") // Handles user login
    public String login() {
        return "User logged in successfully!";
    }

    @PostMapping("/logout") // Handles user logout
    public String logout() {
        return "User logged out successfully!";
    }
}
