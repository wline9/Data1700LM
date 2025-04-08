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

        


    }
}
