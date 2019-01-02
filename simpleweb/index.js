const express =  require('express'); 

const app = express();

app.get('/', (req, res) => {
    res.send('Hi all there!!!');
});

app.listen(8080, () =>{ 
    console.log('Listenng on port 8080');
});
