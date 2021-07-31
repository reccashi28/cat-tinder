import axios from 'axios'
import { useEffect, useState } from 'react'
import { Categories } from '../types'

function useCategories() {
    const [categories, setCategories] = useState<Categories[]>([])

    useEffect( () => {
        getData()
    }, [])

    function getData() {
        axios.get(`https://api.thecatapi.com/v1/categories`)
        .then( res =>  {
            setCategories(res.data)
        })
        .catch( e => console.log(e))       
    }

    return categories;
}

export default useCategories
