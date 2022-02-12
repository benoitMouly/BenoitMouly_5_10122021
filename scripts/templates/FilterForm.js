class FilterForm {

    constructor(Medias) {
        this.Medias = Medias
        this.$wrapper = document.createElement('div')
        this.$mediasHeader = document.querySelector('.gallery')
        this.$modalWrapper = document.querySelector('.modal')
        this.idPage = window.location.search.substring(1);
    }

    async filterTitle(selectedTitre) {

        this.clearMediasWrapper()
        const AdaptedFilterLib = new FilterMediasAdapter(this.Medias, selectedTitre) // nouvel Adaptater
        const FilteredMediasTitle = await AdaptedFilterLib.filterByTitle() // filterByTitle est la fonction qui filtre les medias

        FilteredMediasTitle.forEach(media => {

            const template = new MediaCard(media)
            
            if(media.photographerId == this.idPage && media.image && !media.video){
                this.$mediasHeader.appendChild(template.createMediaCardImage())

            }
            else if(media.photographerId == this.idPage && !media.image && media.video){
                this.$mediasHeader.appendChild(template.createMediaCardVideo())

            }
        })
        Lightbox.init();
        Calculette.init();
    }

    async filterDate(selectedDate) {

        this.clearMediasWrapper()
        const AdaptedFilterLib = new FilterMediasAdapter(this.Medias, selectedDate) // nouvel Adaptater
        const FilteredMediasDate = await AdaptedFilterLib.filterByDate() // filterByTitle est la fonction qui filtre les medias

        FilteredMediasDate.forEach(media => {

            const template = new MediaCard(media)

            if(media.photographerId == this.idPage && media.image && !media.video){
                this.$mediasHeader.appendChild(template.createMediaCardImage())

            }
            else if(media.photographerId == this.idPage && !media.image && media.video){
                this.$mediasHeader.appendChild(template.createMediaCardVideo())

            }
        })
        Lightbox.init();
        Calculette.init();
    }

    async filterPopularity(selectedPopularity) {

        this.clearMediasWrapper()
        const AdaptedFilterLib = new FilterMediasAdapter(this.Medias, selectedPopularity) // nouvel Adaptater
        const FilteredMediasPopularity = await AdaptedFilterLib.filterByPopularity() // filterByTitle est la fonction qui filtre les medias

        FilteredMediasPopularity.forEach(media => {

            const template = new MediaCard(media)

            if(media.photographerId == this.idPage && media.image && !media.video){
                this.$mediasHeader.appendChild(template.createMediaCardImage())

            }
            else if(media.photographerId == this.idPage && !media.image && media.video){
                this.$mediasHeader.appendChild(template.createMediaCardVideo())

            }
        })
        Lightbox.init();
        Calculette.init();
    }

    onChangeFilter() {
        let tric = document.querySelector('#selectContainer')

        let observer = new MutationObserver(mutationRecords => {
            // console.log(mutationRecords); // console.log(les changements)
                if(mutationRecords[0].target.innerText === 'Popularité'){
                    let selectedPopularity = mutationRecords[0].target.innerText
                    this.filterPopularity(selectedPopularity)
                    // console.log('popularité')
                }
                else if(mutationRecords[0].target.innerText === 'Date'){
                    let selectedDate = mutationRecords[0].target.innerText
                    this.filterDate(selectedDate)
                    // console.log('date')

                }
                else if(mutationRecords[0].target.innerText === 'Titre'){
                    let selectedTitre = mutationRecords[0].target.innerText
                    this.filterTitle(selectedTitre)
                    // console.log('titre')

                }
        });
        
          // observer tout sauf les attributs
        observer.observe(tric, {
        characterData: true,
        childList: true, // observer les enfants directs
        subtree: true, // et les descendants aussi
        characterDataOldValue: true, // transmettre les anciennes données au callback
        });


    }

    

    clearMediasWrapper() {
        this.$mediasHeader.innerHTML = ""
    }

    render() {
        this.onChangeFilter()
    }
}