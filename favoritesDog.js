const urlImgFavoriteDog = 'https://api.thedogapi.com/v1/favourites?limit=1&api_key=live_dOkPfeuV1Wp6pEhFQJkFBtONxjSTzrirCRmPAjdxCBckXybPxzd7yj0pUM9JBL27'

async function favoriteDogImg() {
    const getUrlFavoriteDog = await fetch(urlImgFavoriteDog)
    const getInfoFavoriteDog = await getUrlFavoriteDog.json()
    console.log(getInfoFavoriteDog)

    if (getUrlFavoriteDog.status !== 200){
        spanError.innerHTML = 'You have a problem in ' + getUrlDog.status
    }else{
    }
}

favoriteDogImg()