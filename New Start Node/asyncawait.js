import fs from "fs/promises"

async function promise(file){
    let data = await fs.readFile(file)
    return data.toString()
}

let call = await promise("sample.txt")

console.log(call)