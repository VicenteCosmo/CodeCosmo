const express = require('express')
const app = express()
const router = require('./routes.js')
const bodyParser=require('body-parser')
const methodOverride=require('method-override')

//importing router and others
const Router=require('./routes.js')



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use('/', Router)

app.use(bodyParser.urlencoded({extended: true}))
app.listen(4000, (e) => {
  if(e){
        console.log('ocorreu um erro!')
  }
  else{
    console.log('rodando...')
  }
    
  })
  
  
 