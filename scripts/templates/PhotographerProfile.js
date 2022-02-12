class PhotographerProfile {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerProfile() {
        const $wrapper = document.querySelector('.photograph-header')
        // $wrapper.classList.add('photographer_card')

        const photographerHeader = `
        <div class="photograph-profile">
          <h1 class="name-user">${this._photographer.name}</h1>
          <p class="city-user">${this._photographer.city}, ${this._photographer.country}</p>
          <p class="verbatim-user">${this._photographer.tagline}</p>
        </div>

        <button id="contact_button" class="contact-button">Contactez-moi</button>

        <div class="user-pic">
          <img class="user-pic-element" src="assets/photographers/${this._photographer.portrait}" alt="Photo de profil du photographe ${this._photographer.name}"/>
        </div>
        <div class="tab-bottom">
        <div class="compteur-like"><p class="total-likes">297 081</p> <span class="fas fa-heart heart-bottom" aria-hidden="true"></span></div>
        <div class="tjm-photographer">${this._photographer.price}€/jour</div>
        </div>
        `
        
        $wrapper.innerHTML = photographerHeader
        return $wrapper
    }
}