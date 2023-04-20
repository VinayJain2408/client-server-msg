import net from "net"
import readline from "readline"

const r1 = readline.createInterface(process.stdin , process.stdout)

const getname = new Promise((resolve , rejects)=>{
    r1.question('Enter your name \n' ,(name)=>{
        resolve(name)
    })
})

getname.then((name)=>{
    const client = net.createConnection({port:3000} , ()=>{
        console.log(name + 'connection')
    })

    r1.on('line' , (data)=>{
        client.write(name + ':' + data)
    })

    client.on('data' , (data)=>{
        console.log(data.toString())
    })


})
