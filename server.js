const express = require("express");
const app = express();


app.get("/shortcut/:id", (req, res) => {
  const fetch = require('node-fetch');
  const id = req.params.id

fetch(`https://routinehub.co/shortcut/${id}`)
  .then(res => res.text())
  .then(function(body){
  console.log(body)
  const cheerio = require('cheerio');
  const $ = cheerio.load(body);
  const title = $('.is-3')[0].children[0].data
  console.log(title)
  const subtitle = $('.is-4')[0].children[0].data
  console.log(subtitle)
  const description = $('.is-4')[1].next.next.children[0].next.children[0].data
  console.log(description)
  const icon = $('meta[property="og:image"]')[0].attribs.content
  console.log(icon)
  const author = $('.information')[0].children[0].next.children[0].next.attribs.href.substr('/users'.length)
  console.log(author)
  const version = $('.information')[0].children[2].children[0].data.substr('Version: '.length)
  console.log(version)
  const iOS = $('.information')[0].children[2].next.next.children[0].data.substr('iOS: '.length)
  console.log(iOS)
  const updated = $('.information')[0].children[2].next.next.next.next.children[0].data.substr('Updated: '.length)
  console.log(updated)
  const downloads = $('.information')[0].children[2].next.next.next.next.next.next.children[0].data.substr('Downloads: '.length)
  console.log(downloads)
  
  res.json({
    'title' : title,
    'subtitle' : subtitle,
    'description' : description,
    'downloads' : downloads,
    'icon' : icon,
    'author': author,
    'version' : version,
    'updated' : updated,
  })
});
  
});


app.get("/user/:id", (req, res) => {
  

});
  



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
