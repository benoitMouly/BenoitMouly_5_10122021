class MediaCard{
  constructor(media) {
      this._media = media
      this.$wrapper = document.createElement('div')
      this.$wrapper.classList.add('element-box-self')
  }

  createMediaCardImage() {

      const mediaCardImage = `
      <div class="gallery-image">
      <div class="image-container">
        <a href="/assets/gallery/${this._media.image}" class="image-unique link-box" alt="${this._media.title}">
          <img src="/assets/gallery/${this._media.image}" class="pic-photographer" alt="${this._media.title}" role="img">
        </a>
        <div class="image-infos">
          <h2 class="image-titre">${this._media.title}</h2>
          <div class="image-likes"><span class="number-like"> ${this._media.likes} </span><i class="far fa-heart heart-iterate" aria-label="likes" role="button" tabindex="0"></i></div>
        </div>
      </div>
      </div>
      `
      
      this.$wrapper.innerHTML = mediaCardImage
      return this.$wrapper
  }

  createMediaCardVideo() {

    const mediaCardVideo = `
    <div class="gallery-image">
    <div class="image-container">
      <a href="/assets/gallery/${this._media.video}" class="video-unique link-box" alt="${this._media.title}">
        <video controls width="250" class="pic-photographer">
        <source src="/assets/gallery/${this._media.video}"
                type="video/mp4" alt="${this._media.title}">
        Sorry, your browser doesn't support embedded videos.
      </video>
      </a>
      <div class="image-infos">
        <h2 class="image-titre">${this._media.title}</h2>
        <div class="image-likes"> <span class="number-like">${this._media.likes}</span> <i class="far fa-heart heart-iterate" role="button" aria-label="likes"></i></div>
      </div>
    </div>
    </div>
    `
    
    this.$wrapper.innerHTML = mediaCardVideo
    return this.$wrapper
  }
}



