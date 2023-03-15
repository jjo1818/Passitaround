const express = require('express')
// setup express app
const app = express()
// load express
const PORT = 8080


// middleware 
let starterNum = 99

app.get('/', (req, res) => {
    res.send(`<h1> ${starterNum} Bottles of Beer in the fridge<h1>
    <a href = "${starterNum} "> take one down, pass it around</a>`)
})

app.get('/:bottles',(req, res) => {
    let currentNum = req.params.bottles
    if (currentNum>1 ){
        res.send (`<h1> ${currentNum} Bottles of Beer in the fridge</h1>
        <a href="${currentNum - 1} ">take one down, pass it around</a>`)
    
    }else if(currentNum ==1) {
        res.send(`<h1> ${currentNum} Bottles of Beer in the fridge</h1>
        <a href="${currentNum - 1} ">take the last one down, pass it around</a>`)
    
    }else{
        res.send(`<h1> Wanna play again?</h1>
        <a href= "/">Restart</a>`)
    
    }
    })
    


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})


