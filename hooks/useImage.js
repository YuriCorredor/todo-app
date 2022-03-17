import { useState, useEffect } from "react"
import { getImage } from "../services/image"

export default function useImage() {

    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (!imageUrl) {
            (async () => {
                const url = await getImage()
                setImageUrl(url);
             })()
        }
    }, [imageUrl])

    return imageUrl ? imageUrl : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'
}
