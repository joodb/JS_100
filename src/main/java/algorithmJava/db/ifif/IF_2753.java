package algorithmJava.db.ifif;

import java.util.Scanner;

public class IF_2753 {
	
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
       
        int year = sc.nextInt();
			
		 switch(year % 4) {
		 case 0 : 
			 if(year % 400 == 0 || year % 100 != 0) {
				 System.out.println("1");
				 
			 } else {
				 System.out.println("0");
				 
			 } break;
			 
		 default : 
			 System.out.println("0");
		 }
    }
}