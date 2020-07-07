
// question:Image jewelsnstones

// jewels: aA
// stones: aAAbbbb
function jewelsStones(jewels, stones) {
  let count = 0;
  let noOfStonesWhicAreJewels = 0;
  while(count < stones.length) {
    let ch = stones[count];
    if (jewels.indexOf(ch) !== -1) {
      noOfStonesWhicAreJewels++;
    }
    count++;
  }
  return noOfStonesWhicAreJewels;
}