class Media {
    constructor(medias) {
        this._imgMedia = medias.image
        this._mediaId = medias.id
        this._mediaPhotographer = medias.photographerId
        this._mediaTitle = medias.title
        this._mediaLikes = medias.likes
        this._mediaDate = medias.date
        this._mediaPrice = medias.price
        this._mediaVideo = medias.video
    }


    get imgMedia() {
        return this._image
    }

    get mediaVideo(){
        return this._video
    }

    get mediaId() {
        return this._id
    }

    get mediaPhotographer() {
        return this._photographerId
    }

    get mediaTitle() {
        return this._title
    }

    get mediaLikes() {
        return this._likes
    }

    get mediaDate() {
        return this._date
    }

    get mediaPrice() {
        return this._price
    }

}