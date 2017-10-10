// main.controller.js
angular.module('demoApp')
.controller('MainController',function(MessageService,UserService){
		// console.log(MessageService);

		var self = this;

		self.sendRecherche(){
			ZoneTelechargement.search(self.recherche)
    		.then(results => {
    		    console.log(results);
    		});
    	}

    	
	}