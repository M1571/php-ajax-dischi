// --------------------------------
// FILTRO ALBUM

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        url: 'api/server.php',
        discs: [],
        genres: [],
        selectedGenre: '',
        filteredList: [],
    },

    // --------------------------------
    // AXIOS

    created() {
        axios
            .get(this.url)
            .then((res) => {
                this.discs = res.data;
                for(let i = 0; i < this.discs.length; i++) {
                    if(!this.genres.includes(this.discs[i].genre)) {
                        this.genres.push(this.discs[i].genre)
                    }
                }
            this.getFilterdList();
            })
    },

    // --------------------------------
    // METHOD
    
    methods: {
        getFilterdList() {
            if(this.selectedGenre == '') {
                this.filteredList = this.discs;
            } 
            else 
            {
                this.filteredList = this.discs.filter(disc => {
                    if(disc.genre == this.selectedGenre) {
                        return disc;
                    }
                })
            }
        }
    }
})