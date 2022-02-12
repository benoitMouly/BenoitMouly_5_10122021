
class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.$photographerHeader = document.querySelector('#main_photograph-header')
        this.$mediasHeader = document.querySelector('.gallery')

        this.photographersApi = new PhotographerApi // requête API
        this.idPage = window.location.search.substring(1);
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()
        const mediasData = await this.photographersApi.getMedias()
        
        // console.log(this.idPage)
        // console.log(mediasData);

        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {

            /**
             *  Si on est à la page d'accueil
             *  On crée pour chaque photographe sa carte
             */

            if(!this.idPage){
                const TemplatePhotographerCard = new PhotographerCard(photographer)
                this.$photographerWrapper.appendChild(
                    TemplatePhotographerCard.createPhotographerCard()
                )
            }
            else{
                this.$photographerWrapper = null;
            }
            })


        /**
         *  Si on est sur la page d'un id de photographe
         *  On créé son profile
         */

        photographersData
        .map(photographer => new Photographer(photographer))
        for(var i = 0; i < photographersData.length; i += 1){
            var photographer = photographersData[i];
            if(photographer.id == this.idPage){
                const TemplatePhotographerProfile = new PhotographerProfile(photographer)
                this.$photographerHeader.appendChild(
                    TemplatePhotographerProfile.createPhotographerProfile()
                )
                
                PhotographerContact.init(photographer);
            }
        }


        /**
         * Si la page contient un ID
         *  On y fait passer les medias correspondant (si l'id de photographe est le même que l'id du media)
         */

        if(this.idPage){

            mediasData
            .map(media => new Media(media))
            for(var i = 0; i < mediasData.length; i ++){
                var media = mediasData[i];
                const template = new MediaCard(media) // on créé un nouveau modele

                if(media.photographerId == this.idPage && media.image && !media.video){
                    this.$mediasHeader.appendChild(template.createMediaCardImage())

                }
                else if(media.photographerId == this.idPage && !media.image && media.video){
                    this.$mediasHeader.appendChild(template.createMediaCardVideo())
                }
            }
            const Filter = new FilterForm(mediasData)
            Filter.render()
            Lightbox.init();
            Calculette.init();
            
        }
    }
}
const app = new App()
app.main()