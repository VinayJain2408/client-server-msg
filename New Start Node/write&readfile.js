import fs from "fs"

fs.writeFile("write.txt" , "vinay" , (error)=>{
   if(error) console.log(error)
})
fs.readFile("write.txt" ,(error , data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data.toString())
    }
})