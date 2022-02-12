class FilterMediasAdapter {
    constructor(Medias, title, date, likes) {
        this.Medias = Medias
        this.title = title
        this.date = date
        this.likes = likes
    }

    async filterByTitle() {
        return await Filter.filterByTitle(this.title, this.Medias)
    }

    async filterByDate() {
        return await Filter.filterByDate(this.date, this.Medias)
    }

    async filterByPopularity() {
        return await Filter.filterByPopularity(this.likes, this.Medias)
    }
}