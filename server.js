// mon serveur
var express = require('express');
// pour pouvoir faire des routes
var bodyParser = require('body-parser');
// utilisation 
const ZoneTelechargement = require('zone-telechargement');

// prends en charge les requetes du type ("Content-type", "application/json")
app.use(bodyParser.json());

var app = express();

app.listen(3000, function() {
    console.log('listening on 3000');
});

// express configs
// j'utilise bodyparser dans toutes mes routes pour parser les res.body en json

// prends en charge les requetes du type ("Content-type", "application/x-www-form-urlencoded")
app.use(bodyParser.urlencoded({
    extended: true
}));

// je déclare mon dossier qui contient mes vues
app.set('views', './views');

// je déclare mes fichiers statiques
app.use('/static', express.static('./app'));

// je renvoie l'index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

// une route pour la recherche
app.post('/search', function(req, res) {
    var recherche = req.body.recherche;
    ZoneTelechargement.serch(recherche)
    .then(results=>{
    	console.log(results);    	
    	res.send(results);
    });    
});


// une route pour le détail
app.post('/detail/', function(req, res) {
    var detail = req.body.detail;
    ZoneTelechargement.getDetails(detail)
    .then(results=>{
    	console.log(results);
		res.send(results);
    });
});

