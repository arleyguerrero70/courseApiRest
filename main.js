const urlImgDog = 'https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_dOkPfeuV1Wp6pEhFQJkFBtONxjSTzrirCRmPAjdxCBckXybPxzd7yj0pUM9JBL27'

async function assignImgDog() {
    const getUrlDog = await fetch(urlImgDog)
    const getResponse = await getUrlDog.json()

    console.log(getResponse)

    if (getUrlDog.status !== 200){
        spanError.innerHTML = 'You have a problem in ' + getUrlDog.status
    }else{
        const imgUrlDog1 = document.getElementById('imgDog1')
        const imgUrlDog2 = document.getElementById('imgDog2')
        const imgUrlDog3 = document.getElementById('imgDog3')

        imgUrlDog1.setAttribute('src', getResponse[0].url)
        imgUrlDog2.setAttribute('src', getResponse[1].url)
        imgUrlDog3.setAttribute('src', getResponse[2].url)
    }
}

assignImgDog()

const spanError = document.getElementById('errorAPI')