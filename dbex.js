// load library and create app object
const express = require('express')
const app = express()
const path = require('path')

// "database"
let users = []
let score = 0;
 

// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());

// Serve static files
app.use(express.static(__dirname + '/public'))

// creating database entries route
app.get('/create', function (req, res) {  
    res.sendFile(__dirname + '/create.html')
    
    if(req.query.username !== undefined){
    users.push(req.query)    
    let user_name = req.query.username
    let book = req.query.favbook    
    console.log(users)
}

})



// querying database entries for most fav book route
app.get('/fav', function (req, res) {  
    res.sendFile(__dirname + '/fav.html')
    let store = []
    let storemark = []
    //debugger;
    for (let obj of users){
           console.log(obj.favbook)
          // console.log('acc ' + obj.favbook);
          // console.log('curr ' + obj.favbook);
           let storei = store.find(element =>  element === obj.favbook)
             console.log(storei)
              if(storei === undefined){
                 store.push(obj.favbook)
                 
                  }
    
                }
    
                
               // debugger;
    
    
                for (let stored of store){
                    console.log(stored)
                    let i = 0
                    for (let uitem of users){
                        let storej = storemark.indexOf(uitem.favbook)
                        console.log(uitem.favbook)
                      //  alert(storej)
                        if((stored === uitem.favbook) ){
                             i++
                            storemark.push({stored , i});
                        } else if(storej === undefined ){
                            i++
                            //alert(storemark.indexOf(uitem.favbook)) 
                        }
                    }
                }
    
                for (let stored of storemark){console.log(stored)}
                for (let uitem of users){console.log(uitem)}
                  reducers2 = (acc2 , curr2) =>{ 
                    console.log('acc ' + acc2.i);
                    console.log('curr ' + curr2.i);
                    if(curr2.i > acc2.i){
                        return acc2 = curr2;
                    } else {
                        return acc2;
                    }
                    
                }
                let favorite = storemark.reduce(reducers2)
                if(favorite.i > 1){
                    let resultss = 'favorite book:' + favorite.stored + ' hits:' + favorite.i;
                    res.send(resultss)
                } else{
                    let results = 'favorite book:' + favorite.stored + ' hits:' + favorite.i;
                    res.send(resultss)
                }

    
})


// app listen on a PORT
app.listen(8080)
console.log('running')