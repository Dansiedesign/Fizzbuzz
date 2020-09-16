/* 
*while/ do while/ for loops
! For numbers 1 thru 100 print out the following given the condition
!If the number is divisible by 3, print 'Fizz'
!If the number is divisible by 5, print 'Buzz'
!If the number is divisible by both 3 and 5, print 'FizzBuzz'
*/


 let i =1;

 while (i<100) {
   i++

   if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
   }
  else if (i % 3 === 0){
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
 }

// let i = 1;
//   do {
//     i++
//     console.log(i);

//   while (i<= 100, i % 5 === 0 && i%3 === 0) {
//     i++      
//     console.log('Fizzbuzz');
//   }
//   while ( i<= 100, i % 3 === 0) {
//     i++
//     console.log('fizz');
//   }
//   while (i<= 100, i % 5 === 0) {
//     i++
//     console.log('buzz');
//   }
// }
//   while (i<= 100);
//   console.log(i);


  // for(let i = 1; i <= 100; i++){

  //   if(i % 3 === 0 && i % 5 === 0){
  //     console.log("FizzBuzz");
  //    }
  //   else if (i % 3 === 0){
  //     console.log("Fizz");
  //   }
  //   else if (i % 5 === 0){
  //     console.log("Buzz");
  //   }
  //   else{
  //     console.log(i);
  //   }
  //  }
  