import http from 'http'

let users = [
    {id:1 , name:'Dev Anand'},
    {id:2 , name:'Raj Kapoor'},
    {id:3 , name:'Rajesh Khanna'}
    
]

const server = http.createServer((req,res)=>{
 if( req.method === 'GET'){
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
 }

 else if(req.url === '/users' && req.method === 'POST'){
    
 }
})