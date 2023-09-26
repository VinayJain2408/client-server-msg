let sum = 0;

for (let i = 0; i < process.argv.length; i++) {
  const num = parseInt(process.argv[i]);
  
  if (!isNaN(num)) {
    sum += num;
  }
}

console.log('The sum is: ' + sum);



    

// import fs from "fs"

// fs.readdir("./sample.txt" , {encoding:"utf8"} , (err , files)=>{
//     if(err){
//         console.log("error on this code")
//     }
//     else{
//         console.log(files)
//     }
// })


