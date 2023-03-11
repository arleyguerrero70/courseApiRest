const urlImgFavoriteDog = 'https://api.thedogapi.com/v1/favourites?&api_key=live_dOkPfeuV1Wp6pEhFQJkFBtONxjSTzrirCRmPAjdxCBckXybPxzd7yj0pUM9JBL27'
const sectionFavoriteDogs = document.getElementById('favoritesDogs')

async function favoriteDogImg() {
    const getUrlFavoriteDog = await fetch(urlImgFavoriteDog)
    const getInfoFavoriteDog = await getUrlFavoriteDog.json()
    console.log("hola info" + getInfoFavoriteDog[0].image.url)

    if (getUrlFavoriteDog.status !== 200){
        spanError.innerHTML = 'You have a problem in ' + getUrlDog.status + getUrlDog.message
    } else {
        getInfoFavoriteDog.forEach(favoriteDog => {
            favoriteDog.image.url
            console.log(favoriteDog.image.url)


            const articleFavoriteDogs = document.createElement('article')
            const imgFavoriteDogs = document.createElement('img')
            imgFavoriteDogs.setAttribute('src', favoriteDog.image.url)
            imgFavoriteDogs.setAttribute('height', 300)
            imgFavoriteDogs.setAttribute('width', 300)
            const btnFavoriteDogs = document.createElement('button')
            const btnFavoriteDogsCTA = document.createTextNode('Ya no es mi perritu favoritu')



            sectionFavoriteDogs.appendChild(articleFavoriteDogs)
            articleFavoriteDogs.appendChild(imgFavoriteDogs)
            articleFavoriteDogs.appendChild(btnFavoriteDogs)
            btnFavoriteDogs.appendChild(btnFavoriteDogsCTA)


        })

    }
}

async function saveFavoriteDog(id){
    const resFavoriteDog = await fetch(urlImgFavoriteDog, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: id
        })
    })
    const dataFavoriteDog = await resFavoriteDog.json()

    if(dataFavoriteDog.status !==200){
        spanError.innerHTML = 'We have a problem in ' + dataFavoriteDog.status + dataFavoriteDog.message
    } else {
        console.log('Información OK')
    }


}


favoriteDogImg()