class Filter {
    /**
     * 
     * @param {string} title
     * @param {string} date
     * @param {string} likes 
     * @param {array} Medias 
     * @returns 
     */

    static async filterByTitle(title, Medias) {
        var results = Medias

        results.sort(function(a,b){
            if(a.title == b.title)
            return 0;
            if(a.title < b.title)
                return -1;
            if(a.title > b.title)
                return 1;
            });

        if (!title) {
            return Medias
        }

        // return Medias.filter(Media => Media.title === title)
        return results

    }

    static async filterByDate(date, Medias) {
        var results = Medias

        results.sort(function(a,b){
            if(a.date == b.date)
            return 0;
            if(a.date < b.date)
                return -1;
            if(a.date > b.date)
                return 1;
            });

        if (!date) {
            return Medias
        }

        // return Medias.filter(Media => Media.title === title)
        return results

    }


    // Inverser pour que le nombre le plus grand soit en premier
    static async filterByPopularity(likes, Medias) {
        var results = Medias

        results.sort(function(a,b){
            if(a.likes == b.likes)
            return 0;
            if(a.likes > b.likes)
                return -1;
            if(a.likes < b.likes)
                return 1;
            });

        if (!likes) {
            return Medias
        }

        // return Medias.filter(Media => Media.title === title)
        return results

    }
}
