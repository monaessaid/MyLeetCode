class Solution {
    public boolean isPalindrome(int x) {

		String b = Integer.toString(x);
		char[] chars = b.toCharArray();
		System.out.println(chars);

		int n = chars.length;
		// Assigning j to the number of elements in the original array
		char[] backwards = new char[n];
		int j = n;

		for (int i = 0; i < n; i++) {
			backwards[j - 1] = chars[i];
			j = j - 1;
		}

		for (int i = 0; i < n; i++) {
			System.out.print(backwards[i]);
		}

		System.out.println();

		String z = String.valueOf(x);
		String y = String.valueOf(backwards);
		
		boolean p = z.equals(y);
		return p;
    }
}