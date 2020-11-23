// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music
// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue({
    el: "#root",
    data: {
        // Array completo
        dischi: [],
        // Array di generi nusicali
        generi: [],
        // Valore dell'elemento selezionato ocn la tendina 
        selezionato: ""
    },
    mounted() {

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                // Funzione che mi permette di calcolare l'ordine
                function maggiore(a,b) {
                    if (a.year < b.year){
                        return -1;
                    }
                    else if (a.year > b.year){
                        return 1;
                    }
                    return 0;
                }
                // Metto in ordine di anno prima di assegnare
                response.data.response.sort(maggiore);
                // Assegno direttamente il risultato dell'api all'array dischi
                this.dischi = response.data.response;
            })
            .then((response) => {
                // Faccio un ciclo per ricavare i tipi di generi presenti nell'array dischi
                this.dischi.forEach((disco) => {
                    // Faccio push dei generi solo se non sono già inclusi nel nuovo array generi
                    if(!this.generi.includes(disco.genre)) {
                        this.generi.push(disco.genre);
                    }
                });
            });

    }

});
