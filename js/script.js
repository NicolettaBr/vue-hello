//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue (
    { 
        el: '#root',
        data: {
            titleMessage: "Clicca sull' immagine",
            titleColor: 'red'
            
        },
    }
);