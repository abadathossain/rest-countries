const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

function sum(p, q) {
   return p + q;
   }
   const result = sum(2, 3);
   console.log(result);
   

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));