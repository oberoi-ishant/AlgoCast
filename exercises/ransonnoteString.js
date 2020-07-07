
// question:Image ransomeArray

// ransom string: ransom
// magazine: magazine
// example: ransomnote('a', 'b') => false
// example:ransomnote('aa', 'ab') => false
// example:ransomnote('aa', 'aab') => false
// Each string from magzine can be used only once
function ransomeNote(ransom, magazine) {
  let ransonArr = ransom.split('');
  let magazineArr = magazine.split('');
  while(ransonArr.length && magazineArr.length) {
    let rCh = ransonArr.pop();
    let indexInMag = magazineArr.indexOf(rCh);
    if (indexInMag !== -1) {
      magazineArr.splice(indexInMag, 1);
    } else {
      return false;
    }
  }
  return true;
}