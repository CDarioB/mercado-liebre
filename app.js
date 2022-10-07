const express = require ('express') 
const path = require ('path') 

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});


app.listen (3030, () => console.log ("Server started: http://localhost:3030/") ); 

// app.listen (PORT, () => console.log (`Server started: port ${PORT}`) ); 

// html tag wrapper