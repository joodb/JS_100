package algorithmJava.db.ifif;

import java.util.Scanner;

public class IF_14681 {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int x = sc.nextInt();
		int y = sc.nextInt();

		String result;

		// 입력받자 마자 검사
		if (x > 0 && y > 0) { // x 양수 y 양수
			result = "1";

		} else if (x > 0 && y < 0) { // x 양수 y 음수
			result = "4";

		} else if (x < 0 && y > 0) { // x 음수 y 양수
			result = "2";

		} else {
			result = "3";
		}

		System.out.println(result);
	}
}
