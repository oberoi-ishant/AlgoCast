// Given a string find the longest repeating subsequence.
// s1='aabebcdd'
// Now here we see, a subsequence like abeb, but this is not repeating in the string.
// There are many subsequences in this string.
// if we consider, abd as susequence and remove it from string.
// The remaing string is aebcdd. Now we can again get subsequence abd.
// Now remaining string id ecd. So we see abd is a subsequence we can get 2 time.
// We can also consider just a or b as subsequence and they repeat. But we
// need to longest repeating subsequence.
// Remember every char in the string can be used only once.


// So what we did was after we got abd as substring we checked the remaing
// string for another subseq of abd. Meaning we checked a b d are present
// at some other index also in the string or not.

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
  // So idea is to check if we can get chars at different indexes and if they are equal
  // are we able to get a longest subsequence.
  if(s1[n-1] == s2[m-1] && n !== m) {
    return 1+LCS(s1, s2, n-1 ,m-1);
  } else {
    return Math.max(LCS(s1,s2, n, m-1), LCS(s1,s2, n-1, m));
  }
}
