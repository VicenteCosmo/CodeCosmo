const express = require('express')
const router = express.Router()
const DB=require('./database/connection.cjs')
const Prevention=require('sqlstring')
const bodyParser=require('body-parser')
const encoder=bodyParser.urlencoded()

router.get('/', (res, req)=>{
    DB.query('SELECT * FROM bwd9njjtfcuriew5oprj.bog_info', (e, blogPost)=>{
        if(e){
            console.log('ocorreu um erro')
        }
        else{
          req.render('home', {blogPost})
        }
    })
})

router.get('/createCornelio_cosmos_auth', (req, res)=>{
  res.render('create')
})

router.post('/createCornelio_cosmos_auth', encoder,  (req, res)=>{
  const post=req.body
  DB.query(`INSERT INTO bwd9njjtfcuriew5oprj.bog_info (title, img_url, subtitle , description) 
    VALUES(
    ${Prevention.escape(post.title)},
     ${Prevention.escape(post.img_url)},
     ${Prevention.escape(post.subtitle)},
      ${Prevention.escape(post.description)}
    )  `, (e)=>{
      if(e){
        console.log(e)

      }
      else{
        res.redirect('/')
      }
    })
})

router.get('/show/:id',(req, res)=>{
   
        const id=req.params.id

        DB.query( `SELECT * FROM bwd9njjtfcuriew5oprj.bog_info WHERE id="${id}" LIMIT 1`, (e, blog)=>{
            if(e){
              console.log('houve um erro')
            }
            else{
              res.render('show', {blog})
            }
          })
} )

router.get('/editCornelio_cosmos_auth/:id', (req, res)=>{
  const id=req.params.id
  const post=req.body
  DB.query( `SELECT * FROM bwd9njjtfcuriew5oprj.bog_info WHERE id="${id}" LIMIT 1`, (e, blog)=>{
    if(e){
        console.log(e)
    }
    else{
      res.render('edit', {blog})
    }
  })
})

router.put('/editCornelio_cosmos_auth/:id', encoder,  (req, res)=>{
  const post=req.body
  const id=req.params.id
  DB.query(`UPDATE bwd9njjtfcuriew5oprj.bog_info
    SET title=${Prevention.escape(post.title)},
    img_url=${Prevention.escape(post.img_url)},
    description=${Prevention.escape(post.description)},
    subtitle=${Prevention.escape(post.subtitle)} 
    WHERE id="${id}" `, (e, result)=>{
      if(e){
        console.log(e)
      }
      else{
        console.log('updated')
        res.redirect('/')
      }
    })                                
})

router.get('/deleteCornelio_cosmos_auth/:id', (req, res)=>{
  const id=req.params.id
  DB.query(`DELETE FROM bwd9njjtfcuriew5oprj.bog_info WHERE id="${id}" `, (e, result)=>{
    if(e){
      console.log(e)
    }
    else{
      res.redirect('/')
    }
  })
})

//admin authentification

router.get('/admin_auth', (req, res)=>{
  res.render('admin_auth')
})

router.post('/admin_auth',  encoder, (req, res)=>{
  const email=req.body.email
  const password=req.body.password

 // if(email && password){
      DB.query(`SELECT * FROM bwd9njjtfcuriew5oprj.sircosmokk WHERE email_auth="${email}" AND pass_auth="${password}" `,(e, data)=>{
        if(data.length>0){
          res.redirect('/admin_corneliocosmos')
  
        }
        else{
          res.status(400).send('incorrect datas')
          console.log(e)

        }
      })

  //}
 /* else{
    res.send('Enter email address and password, please!')
    res.end()
  }*/

})

//Admin router

router.get('/admin_corneliocosmos', (req, res)=>{
 res.render('admin')
 
})


router

module.exports=router