public class LeetCodeRecursionPractice {
   
   public static void main(String [] args) {
      System.out.println(printReverse("abcdefghijklmnopqrstuvwxyz"));
      String str = "1234";
      if (str.charAt(0) >= 48 && str.charAt(0) <= 58) {
         System.out.println(str.charAt(0));
      }
   }
   
   public static String printReverse(String str) {
      if (str.length() > 1) return str.substring(str.length() - 1) + printReverse(str.substring(0,str.length()-1));
      return str;
   }
}
