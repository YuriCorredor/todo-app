const url = 'https://randomuser.me/api/'

export const getImage = async () => {
    let imageUrl
    try {
        const response = await fetch(url)
        const json = await response.json()
        imageUrl = json.results[0].picture.medium
    } catch (error) {
        console.log(error)
    }

    return imageUrl
}