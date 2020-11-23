// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music
// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue({
    el: "#root",
    data: {
        dischi: [],
        arraydischi: 10,
        generi: []
    },
    methods:{

    },
    mounted() {

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.dischi = response.data.response;
                console.log(this.dischi);
            })
            .then((response) => {
                this.dischi.forEach((disco) => {
                    if(!this.generi.includes(disco.genre)) {
                        this.generi.push(disco.genre);
                    }
                });
                console.log(this.generi);
            });

    }

});
