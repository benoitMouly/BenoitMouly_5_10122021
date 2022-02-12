class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('photographer_card')

        const photographerCard = `
        <a href="photographer.html?${this._photographer.id}">
                    <div class="photographer-link">
                        <img
                            alt="${this._photographer.name}"
                            src="${this._photographer.portrait}"
                            class="img-photographer"
                        />
                        <h2 class="photographer-name">${this._photographer.name}</h2>
                    </div>
                </a>
            <p class="photographer-city-country">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="photographer-tagline">${this._photographer.tagline}</p>
            <p class="photographer-price">${this._photographer.price}€/jour</p>
        `
        
        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}
