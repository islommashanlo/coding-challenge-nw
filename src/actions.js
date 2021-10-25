export function getInitialData(movies) {
    return {
        type: "movies/initial",
        payload: movies
    };
}

export function getInitialGenres(genres) {
    return {
        type: "genres/initial",
        payload: genres
    };
}

export function search(contents) {
    return {
        type: "search",
        payload: contents
    };
}

export function searchApiHandler(contents) {

    return {
        type: "search/api",
        payload: contents
    }
}

export function modifyState(data) {
    return {
        type: "movies/change",
        payload: data
    }
}

export function filterByGenre(genre) {
    return {
        type: "genres/change",
        payload: genre
    }
}

export function reverse(sorted) {
    return {
        type: "sort",
        payload: sorted
    }
}