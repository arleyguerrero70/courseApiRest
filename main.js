const urlImgDog = 'https://api.thedogapi.com/v1/images/search'

async function assignImgDog() {
    const getUrlDog = await fetch(urlImgDog)
    const getResponse = await getUrlDog.json()
    const imgUrlDog = document.querySelector('.imgDogApi')
    imgUrlDog.setAttribute('src', getResponse[0].url)
    imgUrlDog.setAttribute('height', '300')
    imgUrlDog.setAttribute('width', '300')
    imgUrlDog.setAttribute('width', '300')
}

assignImgDog()

const changeImgDog = document.querySelector('.changeImgDog')
changeImgDog.onclick = assignImgDog