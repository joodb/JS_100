package algorithmJava.db.ifif;

import java.util.Scanner;

public class If_1330 {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
			
			int A = sc.nextInt();
			int B = sc.nextInt();
			
			String str = (A > B) ? ">" : ((A < B) ? "<" : "==" );
			
			System.out.println(str);
    }
}
