import axios from 'axios'
import { useEffect, useState } from 'react'


function useCategoryImage(id: number): string {
    const [imgUrl, setImgUrl] = useState<string>('')

    useEffect( () => {
        getData()
    }, [])

    function getData() {
        axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}`)
            .then( res => {
                let data: any[] = res.data
            data.map( d => setImgUrl(d.url))
        })
        .catch( e => console.log(e))       
    }
    return imgUrl;
}

export default useCategoryImage;
