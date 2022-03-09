package algorithmJava.db.ifif;

import java.util.Scanner;

public class IF_9498 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int score = sc.nextInt();
		
		String result;
		
		if(score < 0 || score > 100) {
			result = "잘못 입력하셨습니다.";
			
		} else if( score >= 90) { 
			result = "A";
			
		} else if( score >= 80 ) { 
			result = "B";
			
		} else if( score >= 70 ) { 
			result = "C";
			
		} else if( score >= 60 ) { 
			result = "D";
			
		} else {
			result = "F";
		} 
		
		System.out.println(result);
		
	}
}
