
// shortestCommonSupersequence.js
// Given two strings, s1: 'acbef' s2: 'axbegf'
// Supersequence is a string, that can form s1 and s2 from its
// characters.
// Here find the shortest possible supersequence.
// Ex: 'acbefaxbegf' is a supersequence
// 'axcbegf' is the shortest supersequence.
// Using the chars from this, we can make s1 and s2.
// Remember the order of the chars in both the strings should be maintained.

// Steps:
// So we need to  have first the common chars in the two strings
// that too in sequence. They can be discontinuos. So clearly
// we need to take out LongestCommmonSubsequence(LCS) first.
// Now, LCS will have the common chars in it.
// If we not just join the two string together and have length
// s1+s2. Here we have LCS chars twice. So will subtract length
// of LCS from s1+s2.
// length(ShortCommonSupersequence) = length(s1+s2) - length(LCS)
// Alternatively, it can be
// length(ShortCommonSupersequence) = length(LCS)+length(s2-LCS)+length(s2-LCS).

function shortestCommonSupersequence(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const totalLength = n+m;
  const lengthSCS = SCS(s1,s2, n, m);
  return totalLength - lengthSCS;
}

function SCS(s1, s2, n, m) {
  if (n==0||m==0) {
    return 0;
  }

  if(s1[n-1] == s2[m-1]) {
    return 1+SCS(s1, s2, n-1, m-1);
  }

  if (s1[n-1] !== s2[m-1]) {
    const ch1 = SCS(s1, s2, n, m-1);
    const ch2 = SCS(s1, s2, n-1, m-1);
    return Math.max(ch1, ch2);
  }
}