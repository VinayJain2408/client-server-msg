import net from 'net'

const msgs = []

function publish(data){
    msgs.forEach(msg =>msg.write(data))
}


const server = net.createServer((socker)=>{
    // console.log("connestion Established")
        msgs.push(socker)
    socker.on('data' , (data)=>{
        // console.log('Data recieved , client')
        // socket.write('Message Recieved , client')
        publish(data)

    })

  
})
server.listen(3000 , ()=>{
    console.log('server ban gya')
})