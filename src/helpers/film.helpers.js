

export function filterFilmsByDirector(list, director){
    return list.filter(film => film.director === director);
}

export function getListOf(list, prop){
    return list.reduce((acc, film) => {
        const propV = film[prop];
        if (!acc.includes(propV)) {
            acc.push(propV);
        }
        return acc;
    }, []);
}