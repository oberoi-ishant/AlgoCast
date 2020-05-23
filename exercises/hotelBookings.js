// A hotel manager has to process N advance bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand. Write a program that solves this problem in time O(N log N) .
// Input
// First list for arrival time of booking.
// Second list for departure time of booking.
// Third is K which denotes count of rooms.
// Output
// A boolean which tells whether its possible to make a booking.
// Return 0/1 for C programs.
// O -> No there are not enough rooms for N booking.
// 1 -> Yes there are enough rooms for N booking.

// Sample
// Input :
//         Arrivals :   [1 3 5]
//         Departures : [2 6 8]
//         K : 1

// Return : False / 0

// At day = 5, there are 2 guests in the hotel. But I have only one room.

function hotel (A, B, C) {
  var arrLen = A.length;
  var depLen = B.length;
  var comArr = [];
  var currentCount = 0;
  var arrCounter = 0;
  var depCounter = 0;
  A.sort(function (a, b) {return a-b;}); // Sort the time arrays
  B.sort(function (a, b) {return a-b;}); // Sort the time arrays
  while (arrCounter < arrLen && depCounter < depLen) {
    if (A[arrCounter] < B[depCounter]) {
      arrCounter++;
      currentCount++
      if (currentCount > C) {
        return 0;
      }
    } else {
      currentCount--;
      depCounter++;
    }
  }
  return 1;
}


// Approach:
 // No of room is 1
    // Time in  out
    // 1     1
    // 2         2
    // 3     3
    // 4
    // 5     5
    // 6         6
    // 7
    // 8         8
// At day = 5, there are 2 guests in the hotel. But I have only one room.
