import java.util.Scanner;

public class WindChill {

public static void main(String [] args){
        Scanner sc = new Scanner (System.in);
        double windSpeed, temperature,windChill;

        //collect user input
        System.out.print("Enter temperature (Farenheit): ");
        temperature = sc.nextDouble();
        System.out.print("Enter wind Speed: ");
        windSpeed = sc.nextDouble();

        //calculate wind chill
        windChill = 35.74 + 0.615 * temperature + (0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16);
        System.out.printIn("wind chill is" + Math.floor(windChill));
    }
}