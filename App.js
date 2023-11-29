const express = require('express')
//On construit une instance d'express 
const app = express()
const port = 3000

const mockCoworkings = require('./mock-coworking')

const arrUsers = [
    {
        id: 12,
        name: "Paul",
        age: 35
    },
    {
        id: 15,
        name: "Pierre",
        age: 28
    }, {
        id: 6,
        name: "Mathilde",
        age: 19
    }
]

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/api/coworkings', (req, res) => {
    // Afficher la phrase : Il y a ... coworkings dans la liste. 
    res.send(`Il y a ${mockCoworkings.length} coworkings dans la liste.`)
})

app.get('/api/coworkings/:id', (req, res) => {
    let result = mockCoworkings.find(el => el.id === parseInt(req.params.id))

    if (!result) {
        result = `Aucun élément ne correspond à l'id n°${req.params.id}`
    }
    res.send(result)
})

app.checkout('/api/coworkings', (req, res) => {
  // Afficher une phrase : il y a .... coworkings dans la liste.
  res.send(`Il y a ${mockCoworkings.length} coworkings dans la liste.`)
})

app.checkout('/api/coworkings/:id', (req, res) => {
  let result = mockCoworkings.find(el => el.id === parseInt(req.params.id))

 if(!result){
 result = `Aucun élément ne correspond à l'id ${req.params.id}`
}
  res.send(result)
})


app.get('/names', (req, res) => {
    // Une requête ne peut renvoyer qu'une seule et unique réponse
    // D'abord, on créé une chaîne de caractères à partir des éléments du tableau, puis on la renvoie dans une réponse
    // => Paul et Pierre et Mathilde !
    let sentence = ""

    arrUsers.forEach(obj => {
        sentence += obj.name + " "
    })

    sentence += "!"
    res.send(sentence)
})

app.get('/names/:id', (req, res) => {
   // console.log(parseInt(req.params.id))
    // Implémenter le test pour sélectionner dans le tableau l'objet dont l'id correspond à l'id passé en paramètre d'url
    const urlId = parseInt(req.params.id)

   // for (let i = 0; i < arrUsers.length; i++) { //j'ouvre une boucle for qui me permet de parcourir mon tableau 
  // const element = arrUsers[i]                   // je déclare ma constante qui contient mon tableau ainsi que l'id
 // if(element.id === parseInt(req.params.id)) { // mon if : le parseint est une fonction qui sert a analyser des strings donc a le mettre en nombre entier ici, donc entre autre je vérifie que l'element est le même que l'ID dans le tableau 
   // result = arrUsers[i].name // je déclare mon résultat
   // break;
  //}
   // }
  let result = arrUsers.find(el => el.id === urlId)
   if (!result) {
    result = "not found"
   } else {
    result = result.name
   }
    res.send(result) // j'envoie la réponse 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})