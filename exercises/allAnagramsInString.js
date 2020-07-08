
// Image: allAnagramsInString.js
// Input S: 'cbaebabacd'
// Input P: 'abc
// find starting indexes of Ps anagrams in S.
// Output: 0, 6 for cba and abc

// Concept: Sliding Window.
// Image: allAnangramsSlidingWindow.png

// Steps:
// 1. Create an array with abc...z (26)
// 2. create pArray with count of all chars in P(26)
// 3. create a temp sliding window of size p string
// 4. iterate over S and create array for all chars in S(size sliding window)
// at each step move the sliding window
// and check if the sliding window = pArray
// note the index and all it to result.

// The benefit for this array approach is you dont worry about
// string permutations like bac, cba, abc...all these
// will give same result [1110000....0] in the pArray/temparray array.
// will create for comparison, coz will add their count based on the
// actual index they occur in alphabets.
const aToZArray = Array.from('abcdefghijklmnopqrstuvwxyz');
// this will become
// [a,b,c,d,.....z]
function allAnagramsInString(s, p) {
  let result = [];
  // create P array for count of every p char
  let pArray = new Array(26);
  pArray.fill(0);
  for(let i=0; i<p.length; i++) {
    let indexInAphablets = aToZArray.indexOf(p[i]);
    pArray[indexInAphablets]++;
  }
  // Now this is the reference pArray
  // for abc it should be [1,1,1,0,0,0,0,....0]
  // Meaning a,b,c occur once in p string.
  // We will compare this ref pArray to every array we create from
  // sliding window.

  // Calculating for the first time a window
  // size 3(p length) for the String S starting at 0.
  let tempArr = new Array(26);
  tempArr.fill(0);
  for(let i=0; i<p.length; i++) {
    let indexInAphablets = getIndexInAphablets(s[i]);
    tempArr[indexInAphablets]++;
  }
  if(isAnagram(tempArr, pArray)) {
    result.push(0);
  }
  // Now once window is ready will keep droping its starting element
  // add a new element at the last to make it slide...sliding window
  // and check for anagram at every step.
  for(let i=0; i<s.length; i++) {
    let indexInAphablets = getIndexInAphablets(s[i]);
    tempArr[indexInAphablets]--;
    // since 1, 2 are already in window we add the 4th(length of p+i)
    // element to the window
    // In this example since window size is 3
    // every time loop iterates, you drop the
    // count for the start elem(0 for first loop) and add the count for the
    // next elem which is the 4th elem(i+3)
    // the two elem in between are already in window hence
    // resuse them.
    // in first pass window is 0,1,2
    // since we already calculated for window starting at 0
    // will decrement its count first.
    // now since 1,2 are already in window add 3rd element to
    // complete window size [3+0].
    // now again check Anagram.

    // Alternatively every time create a new window with all
    // 3 elems and compare.
    let newElementtoWindow = s[p.length + i];
    indexInAphablets = getIndexInAphablets(newElementtoWindow);
    tempArr[indexInAphablets]++;
    if (isAnagram(pArray, tempArr)) {
      result.push(i+1);
    }
  }
  return result;
}

function getIndexInAphablets(elem) {
  return aToZArray.indexOf(elem);
}

function isAnagram(ar1, ar2) {
  return ar1.join('') == ar2.join('') ? true : false;
}