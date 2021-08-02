import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchRequestError } from '../redux/actions';
import { Categories } from '../types'

function useCategories() {
    const [categories, setCategories] = useState<Categories[]>([]);
    const dispatch = useDispatch();

    useEffect( () => {
        (function getData1() {
            axios.get(`https://api.thecatapi.com/v1/categories`)
            .then( res =>  {
                setCategories(res.data)
            })
            .catch( e => dispatch(fetchRequestError(e.message)))       
        })()

    }, [dispatch])

    return categories;
}

export default useCategories
