import fs from "fs"

fs.readFile("sample.txt" ,(error , data)=>{
    
        if(data){
            console.log(data.toString())
        }
        else{
            console.log(error)
        }
})
