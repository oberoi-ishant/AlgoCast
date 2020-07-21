
// https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/
// There are 100 different types of caps each having a
// unique id from 1 to 100. Also, there are ‘n’ persons
// each having a collection of a variable number of caps.
// One day all of these persons decide to go in a party
// wearing a cap but to look unique they decided that none
// of them will wear the same type of cap.
// So, count the total number of arrangements or ways such
// that none of them is wearing the same type of cap.
// Constraints: 1 <= n <= 10

// The first line contains the value of n, next n lines contain collections
// of all the n persons.
// Input:
// 3
// 5 100 1     // Collection of the first person.
// 2           // Collection of the second person.
// 5 100       // Collection of the third person.

// Output:
// 4
// Explanation: All valid possible ways are (5, 2, 100),  (100, 2, 5),
//             (1, 2, 5) and  (1, 2, 100)

// So here we see the question is similar to knapsack with
// some variation.
// Every Cap can be either worn or not worn. CHOICE
// Normally in knapsack type questions we had a fixed Weight W to be filled.
// Here we have another variable instead PERSONS n.
// Constraints: 1 <= n <= 10
// In such a problem we will use bitmasking with DP.
// bitmask [1,0,0,0,0,1,0,1] denotes 1st, 3rd and 8th person has cap.
// So our aim it to give a unique cap to every person.
// Therefor aim is [1,1,1,1,1,1,1,1].

// Recursive Solution.
// We know we have 100 caps. (1 to 100)
// We are given n 3 in example
// 1st person has 5, 100,1 id of caps
// 2nd has only one cap id 2
// 3rd has two caps id 5, 100

// We will attempt to give a cap ith to a person who does not
// have a cap and who has the ith cap in his collection.
// Therefore we need to know the maping for caps to person.
// i.e. ith cap can be worn by who all people.
// So will create this map of cap[i] = [people who have this cap].
// Then we will use some bitwise operations here.
// First our aim is all 1's in bitmask.
// So to get this let us do 1<<n. this give 1000...nzeros.
// now substract 1 from it, to get 011111...n1s.

// Steps:
// 1. Create a bitmask for all 1s
// 2. Create a map of caps vs persons.
// 3. recursive function to assign ith Tshirt and calculate count
// of possible ways the distribution can be done.

// Here will take this sample only with n = 3.
function capsToPerson(n, arrPersonOne, arrPersonTwo, arrPersonThree) {
  // total persons n
  // let us create bitmask for n 1's
  const allMaskTemp = 1<<n;
  const allMaskToCompare = (allMaskTemp - 1).toString(2);

  // Now let us create map for caps vs person.
  const capsPersonMap = new Map();
  for(let i=0; i<arrPersonOne.length; i++) {
    if(capsPersonMap.get(arrPersonOne[i]) == undefined) {
      capsPersonMap.set(arrPersonOne[i], [1]);
    } else {
      capsPersonMap.get(arrPersonOne[i]).push(1);
    }
  }
  for(let i=0; i<arrPersonTwo.length; i++) {
    if(capsPersonMap.get(arrPersonTwo[i]) == undefined) {
      capsPersonMap.set(arrPersonTwo[i], [2]);
    } else {
      capsPersonMap.get(arrPersonTwo[i]).push(2);
    }
  }
  for(let i=0; i<arrPersonThree.length; i++) {
    if(capsPersonMap.get(arrPersonThree[i]) == undefined) {
      capsPersonMap.set(arrPersonThree[i], [3]);
    } else {
      capsPersonMap.get(arrPersonThree[i]).push(3);
    }
  }


  // array for caps [1...100]
  const totalNumberOfCaps = 100; // this is our 'n'
  const capsArray = [...(new Array(totalNumberOfCaps+1).keys())];
  capsArray.splice(0,1);
  const startingMask = (1<<n).toString(2).slice(1);
  return countCapsToPerson(startingMask, totalNumberOfCaps, allMaskToCompare, capsPersonMap);
}

function countCapsToPerson(startingMask, totalNumberOfCaps, allMaskToCompare, capsPersonMap) {
  // Base condition
  if (startingMask == allMaskToCompare) {
    return 1;
  }

  // if no caps left and mask is not 1111's return 0. As not possible further.
  if(totalNumberOfCaps == 0) {
    return 0;
  }

  // Now for every ith cap we have two options.
  // Either take a cap or don't take.
  // if we take give it to a person who does not have a cap yet and who has this cap in collection.

  // First don't take this cap.
  let count = countCapsToPerson(startingMask, totalNumberOfCaps-1, allMaskToCompare, capsPersonMap);

  // Now we consider a cap.
  // check who all can wear this cap ie have with them in collection
  const whoCanWearCap = capsPersonMap.get(totalNumberOfCaps-1);
  // this is array of person ids who can wear this cap
    if (whoCanWearCap !== undefined) {
      for(let i = 0; i<whoCanWearCap.length; i++) {
      // check if the person i has a cap already of not
      const pId = whoCanWearCap[i];
      // since our person ids are 1,2,3
      // to check the 3rd bit in mask will first get 1<<2 (3-1) = 100
      if (1 << (pId-1) & startingMask) {
        // If already the pid bit is 1 in the mask, means person has a cap
        continue;
      } else {
        // else assign him a cap. Set the pid bit in mask as 1
        startingMask = startingMask | ((1<<pId-1).toString(2));
        count += countCapsToPerson(startingMask, totalNumberOfCaps-1, allMaskToCompare, capsPersonMap);
      }
    }
  }
  return count;
}


