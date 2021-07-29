import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Categories } from '../types'


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
