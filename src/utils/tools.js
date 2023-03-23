export const capitalize = (str) => {
    if (str.length > 0)
        return str.charAt(0).toUpperCase() + str.slice(1);
}

// https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=ho
export const buildApiUrl = (count=0, character=null, url='') => {
    let newUrl = url.slice(0, url.indexOf("?") + 1);
    newUrl = `${newUrl}count=${count}`;
    if (character) {
        newUrl += `&character=${character}`
    }
    return newUrl;
}
