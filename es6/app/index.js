console.log("welcome to webpack autoupdate !");

let p = new Promise((resolve,reject) => {
  setTimeout(() => resolve('Resolved promise data'),3000);
})

p.then(response => console.log(response))
 .catch(error => console.log(error));

 console.log('after promise consumption');

 const root = 'http://jsonplaceholder.typicode.com/posts/1';
 const roots = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
 fetch(roots,{ method:"GET" })
 .then(response => response.json())
 .then(json => console.log(json));


 let obj = { a:'one',b:'two',c:'three'};
 let keys = Object.keys(obj);
 let values = Object.values(obj);
 let entries = Object.entries(obj);
 console.log(keys);
 console.log(values);
 console.log(entries);

 for(let entry of entries){
   console.log(`key: ${entry[0]},value:${entry[1]}`);
 }

 async function async_one(){
   return "one";
 }

 async function async_two() {
   throw new Error("Issue with async!");
 }

 async function async_three(){
   return `three`;
 }

 async function async_four(){
   const one = await async_one();
   console.log(one);
   const three = await async_three();
   console.log(three);
 }

 //concurrently

 async function async_five() {
   const [res_one,res_two] = await Promise.all(
     [async_one(),async_three()]
   )
   console.log(res_one,res_two);
 }

 async_one().then(response => console.log(response));
 async_two().catch(error => console.log(error));
 async_four();
 async_five();
