//Homework 1: write out exactly what will be printed out from the following function:

// function func(){
//   const a = null;
//   const b = undefined;
//   const c = 5;
//   const d = 6;

//   if(c){
//     console.log("c works!");
//     if(d > 10 && a){
//         console.log("d is something!");
//     } else if(!d && !a){
//        console.log("d and a doesn't have a value");
//     } else  if(!a && !b){
//         console.log("a and d here!");
//         if(a === null && !b){
//           console.log("final result");
//         }
//     }
//   }else {
//      console.log("not c here!");
//   }
// }

// func();// write out the output. Try not to run the code and write out the output.

// Output:

// c works!
// a and d here!
// final result




//Bonus question: create a function that can tell me the type of value my argument is.
//For example, I have function typeArg and I call:
// - typeArg(3); /* number*/
// - typeArg(undefined) /* undefined */
// - typeArg("Hello world") /*string */
// - typeArg({}) /* object */
// - typeArg([]) /* array */

function typeArg(whatIsThis) {
  return typeof whatIsThis;
}

console.log(`3 is a ${typeArg(3)}`);
console.log(`undefined is ${typeArg(undefined)}`);
console.log(`Hello world is a ${typeArg("Hello world")}`);
console.log(`null is a(n) ${typeArg(null)}`);
// I noticed that the following returns "[] is an object"
// rather than "[] is an array", but this is technically true,
// so I think it an acceptable result.
console.log(`[] is an ${typeArg([])}`);


// Once you complete this, create your own github repo, solve these questions and explain it in a READme.md.
