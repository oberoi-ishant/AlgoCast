
// Image: findTownJudge
// check image for question.

// Let us assume N = 3
// three people 1,2,3
// trusts array A = [[1,3], [1,2], [2,3], [2,1]]

// So that means C is the Judge as it trusts no one
// and it is trusted by all others (N-1) = 2
// Will create two maps,
// One that holds count of how many this person trusts(trust)
// Other count of how many people trust this person(trustedBy)

// Input [[1,3], [1,2], [2,3], [2,1]], 3
function townJudge(A, N) {
  let trustMap = new Map();
  let trustedByMap = new Map();
  for(let i = 0; i < A.length; i++) {
    let elem = A[i];
    trustMap.set(elem[0],
      trustMap.get(elem[0]) !== undefined ? trustMap.get(elem[0])+1 : 1);

    trustedByMap.set(elem[1],
      trustedByMap.get(elem[1]) !== undefined ? trustedByMap.get(elem[1])+1 : 1);
  }
  // If a person does not trust anyone
  // then his key should not be present in trustMap.
  // Will now check if there is a value with N-2
  // in trustedByMap as judge is trusted by all
  // except himself(N-1)
  let keyOfSuspectedJudge = -1;
  for(let [key, value] of trustedByMap) {
    if (value == (N-1)) {
      keyOfSuspectedJudge = key;
    }
  }

  // if this key does not exist in trust map
  // then this is the TownJudge
  if (!trustMap.has(keyOfSuspectedJudge)) {
    return keyOfSuspectedJudge;
  }

  return -1;
}