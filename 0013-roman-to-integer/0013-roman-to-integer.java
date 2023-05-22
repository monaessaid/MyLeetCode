class Solution {
    public int romanToInt(String s) {
        
        		char[] chars = s.toCharArray();

		int n = chars.length;

		int sum = 0;


		for (int i = 0; i < n; i++) {
			if (i < n - 1) {
				int j = i + 1;
				if (chars[i] == 'I' && chars[j] == 'V') {
					sum = sum + 4;
					i++;
					continue;
				} else if (chars[i] == 'I' && chars[j] == 'X') {
					sum = sum + 9;
					i++;
					continue;
				} else if (chars[i] == 'X' && chars[j] == 'L') {
					sum = sum + 40;
					i++;
					continue;
				} else if (chars[i] == 'X' && chars[j] == 'C') {
					sum = sum + 90;
					i++;
					continue;
				} else if (chars[i] == 'C' && chars[j] == 'D') {
					sum = sum + 400;
					i++;
					continue;
				} else if (chars[i] == 'C' && chars[j] == 'M') {
					sum = sum + 900;
					i++;
					continue;
				}
			}
			if (chars[i] == 'I') {
				sum = sum + 1;
				continue;
			} else if (chars[i] == 'V') {
				sum = sum + 5;
				continue;
			} else if (chars[i] == 'X') {
				sum = sum + 10;
				continue;
			} else if (chars[i] == 'L') {
				sum = sum + 50;
				continue;
			} else if (chars[i] == 'C') {
				sum = sum + 100;
				continue;
			} else if (chars[i] == 'D') {
				sum = sum + 500;
				continue;
			} else if (chars[i] == 'M') {
				sum = sum + 1000;
				continue;
			}
		}
		return sum;
	}

    }