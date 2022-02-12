// Mettre le code JavaScript lié à la page photographer.html

// import {enableBodyScroll, disableBodyScroll} from '../utils/body-scroll-lock.js'



/**
 * @property {HTMLElement} element URL de l'media
 * @property {string[]} medias Chemmins des medias de la lightbox 
 * @property {string} url media actuellement affichée
 * @property {string[]} title
 * 
 * 
 */


class Lightbox{

    constructor(url, title, medias, titles) {
        this.medias = medias
        this.titles = titles
        this.element = this.buildDOM(url, title)
        this.loadMedias(url, title, medias)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        // disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp )
    }

    static init(){
        const links = Array.from(document.querySelectorAll('.link-box'))
        const links_To_Come = links.map(link => link.getAttribute('href'))
        const alt = links.map(link => link.getAttribute('alt'))

        // console.log(links)
        links.forEach(link => link.addEventListener('click', e =>{
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('href'), e.currentTarget.getAttribute('alt'), links_To_Come, alt) // Gallery récupère l'href des éléments, le currentTarget est l'href cliqué
                // stocké dans medias // IL FAUT RESPECTER L'ORDER DANS LES PARENTHESE DE FONCTION
                // console.log(alt)
            }))
        }

    /**
     * 
     * @param {string} url Url de l'media 
     * @param {string[]} medias Chemins des medias de la Lightbox
     * @param {string[]} title Chemins des medias de la Lightbox
     */

    
    async loadMedias(url, title){
        this.url = null
        this.title = null
        if(url){
        const image = document.createElement('img')
        image.classList.add('element-stream')
        image.setAttribute('alt', title)
        const text = document.createElement('h3')
        text.classList.add('element-title')
        // console.log(this.medias)
        // console.log(title)
        const container = this.element.querySelector('.lightbox__container')
        container.innerHTML = ''
        text.innerHTML = title
        container.appendChild(image)
        container.appendChild(text)

        
        this.url = url
        this.title = title
        // console.log(url)
        // console.log(title)
        image.src = url
        }
        if(url && url.includes('.mp4')){
            this.url = null
            this.title = null
            const video = document.createElement('video');
            video.classList.add('element-stream')
            video.setAttribute('alt', title)
            const text = document.createElement('h3')
            text.classList.add('element-title')
            video.setAttribute("controls", "controls")
            const container = this.element.querySelector('.lightbox__container')
            container.innerHTML = ''
            text.innerHTML = title
            container.appendChild(video)
            container.appendChild(text)
            this.url = url
            video.src = url
            this.title = title
        }
    }



    /**
     * 
     * @param {KeyboardEvent} e 
     */

    onKeyUp(e){
        if(e.key === 'Escape'){
            this.close(e)
        } else if(e.key === 'ArrowLeft'){
            this.prev(e)
        } else if(e.key === 'ArrowRight'){
            this.next(e)
        }
    }

    /**
     * Ferme la lightbox / Next / Suivant
     * @param {MouseEvent|KeyBoardEvent} e
     */

    close (e){
        e.preventDefault() // annule le comportement par défaut de notre élément
        const mainWrapper = document.getElementById('main')
        mainWrapper.setAttribute('aria-hidden', 'false')
        mainWrapper.style.display='block'
        this.element.classList.add('fadeOut')
        // enableBodyScroll(this.element)
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    next(e){
        e.preventDefault();
        let i = this.medias.findIndex(media => media === this.url)
        let z = this.titles.findIndex(media => media === this.title)

        if(i === this.medias.length -1 && z === this.titles.length -1){
            i = -1
            z = -1

        }
        this.loadMedias(this.medias[i + 1], this.titles[z + 1])
    }

    prev(e){
        e.preventDefault();
        let i = this.medias.findIndex(media => media === this.url)
        let z = this.titles.findIndex(media => media === this.title)

        if(i === 0){
            i = this.medias.length
            z = this.titles.length


        }
        this.loadMedias(this.medias[i - 1], this.titles[z - 1])

    }
    

    /**
     * 
     * @param {string} url URL de l'media
     * @return {HTMLElement}
     */

    buildDOM (url, medias, title){
        const dom = document.createElement('div')
        const mainWrapper = document.getElementById('main')
        mainWrapper.setAttribute('aria-hidden', 'true')
        mainWrapper.style.display='none'
        dom.classList.add('lightbox');
        dom.setAttribute('role', 'dialog')
        dom.setAttribute('aria-label', 'image closeup view')
        dom.setAttribute('aria-hidden', 'false');
        dom.setAttribute('id', 'bg');

        dom.innerHTML = `
                <div class="player">
                    <div class="cols">
                        <div class="col1">
                            <button class="slide-left slider lightbox__prev" name="Previous image" role="Link"><span class="fas fa-chevron-left" alt="prev"></span></button>
                        </div>
                        <div class="col2 mySlides lightbox__container">

                        </div>
                        <div class="col3">
                            <button class="close-btn lightbox__close" name="Close dialog"> <span class="fas fa-times" alt="close"></span> </button>
                            <button class="slide-right slider lightbox__next" name="Next image" role="Link"><span class="fas fa-chevron-right" alt="next"></span></button>
                        </div>
                    </div>
                </div>                
        `
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))

        return dom
    }
}

/**
 * 
 * 
 *      <div class="lightbox">
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précedent</button>
            <div class="lightbox__container">
                <img src="https://picsum.photos/id/237/300/300" alt="">
            </div>
        </div>

        <div id="bg" class="lightbox">
          <div class="modal-player">
            <div class="bg-player">
              <div class="player">
                  <div class="col1">
                      <button class="slide-left slider lightbox__prev"><i class="fas fa-chevron-left"></i></button>
                  </div>
                  <div class="col2 mySlides lightbox__container">
                      <!-- <img 
                          src="/assets/gallery/${this._media.image}"/
                      class="modal-preview">
                      <p class="media-title caption">${this._media.title}</p> -->
                  </div>
                  <div class="col3">
                      <button class="close-btn lightbox__close"> <i class="fas fa-times"></i> </button>
                      <button class="slide-right slider lightbox__next"><i class="fas fa-chevron-right"></i></button>
                  </div>
              </div>
          </div>
          </div>
      </div>

 * 
 */

// Lightbox.init();