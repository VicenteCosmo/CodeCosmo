const mysql = require('mysql')


const DB = mysql.createConnection({
    host: 'bwd9njjtfcuriew5oprj-mysql.services.clever-cloud.com',
    user: 'uledvnij62nsqm7h',
    port:'3306',
    password: 'cZWJ2tz5zQVQpDFz2pre',
    database: 'bwd9njjtfcuriew5oprj'
})

DB.connect((e)=>{
  
    if(e){
      console.log('failed to connect')
    }
    else{
      console.log('database connected')
    }
})

/*const DB=mysql.createConnection({
  host:'localhost',
  user:'root',
  port: '3306',
  password:'cosmo',
  database:'bwd9njjtfcuriew5oprj'
})*/

DB.connect((e)=>{
  if(e){
    console.log('failed to connect')
  }
  else{
    console.log('database connected')
  }
})

module.exports=DB