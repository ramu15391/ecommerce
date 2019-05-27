
import React from 'react'
//const renderToString = require('react-dom/server')
import { renderToString } from 'react-dom/server'
import { APP } from './app'
const express = require('express')
const app = express()
app.listen(4000)

app.get('/ssr', function(req,res){
const content = renderToString(<APP/>)
const data = template("ssr",content)
    res.send(data)
})

function template(title,content){
    const page= 
    `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title> ${title} </title>
          <link href="assets/style.css" rel="stylesheet">
        </head>
        <body>
          <div class="content">
             <div id="app" class="wrap-inner">
                <!--- magic happens here -->  ${content}
             </div>
          </div>
        </body>
        `
    return page

}
