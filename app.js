const EXPRESS = require ('express') 
const PATH = require ('path') 

const PORT = process.env.PORT || 3001;


const PUBLIC_PATH = PATH.resolve(__dirname,'./public');
const APP = EXPRESS();

APP.use(EXPRESS.static(PUBLIC_PATH));

APP.get('/', (req, res) => {
    res.sendFile(PATH.resolve(__dirname, './views/home.html'))
});

APP.get("/register", (req, res) => {
    res.sendFile(PATH.resolve(__dirname, "./views/register.html"))
});

APP.get("/login", (req, res) => {
    res.sendFile(PATH.resolve(__dirname, "./views/login.html"))
});


APP.listen (PORT, () => console.log (`Server started: port ${PORT} `) ); 
