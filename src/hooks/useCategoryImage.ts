import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchRequestError } from '../redux/actions';


function useCategoryImage(id: number): string {
    const [imgUrl, setImgUrl] = useState<string>('');
    const dispatch = useDispatch();


    useEffect( () => {
        getData()
    }, [])

    function getData() {
        axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}`)
            .then( res => {
                let data: any[] = res.data
                data.map( d => setImgUrl(d.url))
        })
        .catch( e => dispatch(fetchRequestError(e.message)))       
    }
    return imgUrl;
}

export default useCategoryImage;
