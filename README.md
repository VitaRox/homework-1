# homework-1
homework from tutoring with Michael Tong

# Re: first problem
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

Stack:
* if (c): 'c' is defined, so it evaluates to 'truthy', which in turn works like "true", so we enter
       the body of the first 'if' statement, console.log("c works!)
* if (d > 10 ...): this will immediately short-circuit evaluate to false, since d = 6 and both statements must be true or truthy for the statement to eval to 'true'
* else if(!d && !a): likewise for this one, d has a value and thus is not falsy (!d), so it cuts out before it even evaluates !a (which would evaluate to truthy, since a = null, a falsy value; !falsy = truthy)
* else  if(!a && !b): !a (!null, thus: !falsy) evals to 'truthy', and !b (!undefined, thus: !falsy) evals to 'truthy' also, making !a && !b eval to 'truthy', so this executes: console.log("a and d here!");
* finally, we must evaluate if(a === null && !b): a does, in fact, have exact equivalency with null and !b (!falsy) evals to 'truthy' so (true && truthy) should evaluate to 'true', printing "final result"
* since the first if-statement, if(c), were truthy, the final else-statement doesn't execute and we don't need to check it.
* Hence, the following output:

c works!
a and d here!
final result


# Re: second problem
I solved this by easily using Javascript's built-in "typeof" operator to return the type of any value passed
as an arg to our function, typeArg. The array returns "object" rather than array, but I actually think this is
a suitable result, as arrays are simply a specialized form of object in which each entry uses it's index as a
key value.
