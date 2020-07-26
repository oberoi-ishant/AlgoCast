// https://www.geeksforgeeks.org/longest-repeated-subsequence/
// Given a string, print the longest repeating subsequence such that the two
// subsequence don’t have same string character at same position, i.e.,
// any i’th character in the two subsequences shouldn’t have the same index in the
// original string.
// Given a string find the longest repeating subsequence.
// s1='AABABCD'
// Now here we see, a subsequence like abeb, but this is not repeating in the string.
// There are many subsequences in this string.
// Here if we take subsequence AAB.
// We can first create it using A(0)A(1)B(2) ... from indexes 0,1,2
// We can again create it using A(1)A(3)B(4) ... from indexes 1,3,4
// So ith char in both substring is not haveing same index in origin string.
// Example 2 Input 'AAB'
// We can create subsequence with A(0) and A(1) from index 0 and 1.
// We cannot include B in subsequence as B would be in same index in origin string.

// We know two find LCS we need two strings.
// If we have one string, we sometimes get second string from first by applying
// a function to it like reverse. (check  Longest Palendromic Subseq).
// Here we need to check different occurances of chars in same string in same
// sequence. So let us take s2 also equal to s1.
// We find LCS, but with one more condition.
// Lets us see how.


function findLCS(s1) {
  const n = s1.length;
  const s2 = s1;
  const m = s2.length;
  return LCS(s1, s2, n, m);
}

function LCS(s1, s2, n, m) {
  // Base condition
  if (n==0 || m==0) {
    return 0;
  }

  // Here we also check that n!==m, meaning we are checking
  // that the char is present in different index.
  // We are not considering the same index.
  // If we do not check this n!==m, we are basically comparing same index
  // and our answer for LCS will be length of the complete string s1 itself.
  // As s2 = s1.
  // So idea is to check if we can get chars at different indexes
  // and create the same longest subsequence.
  if(s1[n-1] == s2[m-1] && n !== m) {
    return 1+LCS(s1, s2, n-1 ,m-1);
  } else {
    return Math.max(LCS(s1,s2, n, m-1), LCS(s1,s2, n-1, m));
  }
}


// Whoever has confusion in the following inputs :


// AABABCD
// AXXXY.  etc.
// Here is the explanation:
// Read this: Given a string, print the longest repeating subsequence such that the two subsequences
// don’t have same string character at same position




// The same Position is the twist here: A X X X Y ==> You can take X X [index0 and index1]
// and XX [index 1 and index2]




// X of index1 is used in both but its position in both substrings is different.
// In the first subsequence, it comes at 1st index whereas in
// the second subsequence comes at the 0th index.