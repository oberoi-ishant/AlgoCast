// Given a string, a partitioning of the string is a palindrome partitioning
// if every substring of the partition is a palindrome.
// For example, “aba|b|bbabb|a|b|aba” is a palindrome partitioning of “ababbbabbababa”.
// Determine the fewest cuts needed for a palindrome partitioning of a given string.
// For example, minimum of 3 cuts are needed for “ababbbabbababa”.
// The three cuts are “a|babbbab|b|ababa”.
// If a string is a palindrome, then minimum 0 cuts are needed.
// If a string of length n containing all different characters,
// then minimum n-1 cuts are needed.

// Example: abcde ... a|b|c|d|e ie (length - 1) 4 cuts required.
// Example: 'madam' = 0 cuts. Already a palendrome.

// Steps from MCM Matrix Chain Multiplication.
// Choose correct values of i,j
// Get the correct base condition.
// Compute the k scheme.
// find the answer from temporary answers.
// return answer.

function main(str) {
  const n = str.length;
  // Here we have a string
  // 'NITIN'
  // We can start i = 0; this gives us one char N. Correct.
  // We can take j = length - 1; gives us last char N. Correct.
  // So i can start from 0 and j can be length - 1;
  return palendromePartition(str, 0, n-1);
}


function palendromePartition(str, i, j) {
  // Here we have a string
  // 'NITIN'
  // Now, Base condition.
  // If we are left with one char, it is palendrome. Correct.
  // Also as per question if the passed string is palendrome, we do not partition.
  // No further cuts required.
  if (isPalendrome(str, i, j)) {
    return 0; // no further cuts required. no more partioning.
  }

  // K scheme. We want to partition this string.
  // let us start k from i. k = i; and i = 0;
  // We have one option func(str, i, k) ... func(str, 0, 0) one partition with one char N.
  // func(str, k+1, j) ... 'ITIN'
  // now When k = j (after some k++), we have two options
  // func(str, i, k) ... 'NITIN'
  // func(str, k+1, j) ... '' empty. Therefore, will take k to maximum j - 1;
  let min = Number.POSITIVE_INFINITY;
  for(let k=i; k < j; k++) {
    let partOne = palendromePartition(str, i, k);
    let partTwo = palendromePartition(str, k+1, j);
    let tempCount = partOne + partTwo + 1; // (plus 1, as this is one partition done)
    min = Math.min(min, tempCount);
  }
  return min;
}

function isPalendrome(str, i, j) {
  // i and j are start and end index
  if (i >=0 && j >=0) {
    while(i<=j) {
      if(str[i] == str[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}