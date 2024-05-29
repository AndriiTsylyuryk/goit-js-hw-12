


 export function getImages (img) {
    const BASE_URL = 'https://pixabay.com/api/'
    
    const params = new URLSearchParams({
        key: '44051747-21f0728748ba5e469c568f2fa',
        q: img,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })


    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => res.json());
}