class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
}


class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return fetch("../data/photographers.json")
        .then(res => res.json())
        .then(res => res.photographers)
        .catch(err => console.log('an error occurs', err))
        // return await this.get()
    }

    async getMedias() {
        return fetch("../data/photographers.json")
        .then(res => res.json())
        .then(res => res.medias)
        .catch(err => console.log('an error occurs', err))
        // return await this.get()
    }
}

// class MediaApi extends Api {
//     /**
//      * 
//      * @param {string} url 
//      */
//     constructor(url) {
//         super(url)
//     }
//     async getMedias() {
//         return fetch("../data/photographers.json")
//         .then(res => res.json())
//         .then(res => res.medias)
//         .catch(err => console.log('an error occurs', err))
//         // return await this.get()
//     }
// }