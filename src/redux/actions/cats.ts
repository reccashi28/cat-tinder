import axios from "axios"
import { Dispatch } from "redux"
import { CatActions, GET_CATEGORY_SELECTED, GET_SELECTED_CATEGORY_IMAGES, GET_TOTAL_CATSKIPPED } from "../../types"

export const fetchCatsByCategory = (id: number, name: string) => {
    return async( dispatch: Dispatch) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=10`)
            .then(res => {
                const data: any[] = res.data;
                let imageUrl: string[] = []
                data.map( d => imageUrl.push(d.url))
               dispatch(getSelectedCategoryImages(imageUrl))
               dispatch(getCategorySelected(name))
            })
            .catch( e => console.log(e, "error"))
    }
}

export const getSelectedCategoryImages = (data: string[]): CatActions => {
    return {
        type: GET_SELECTED_CATEGORY_IMAGES,
        payload: {
            data
        }
    }
}

export const getCategorySelected = (data: string): CatActions  => {
    return {
        type: GET_CATEGORY_SELECTED,
        payload: {
            data
        }
    }
}

export const getTotalCatSkipped = (data: number): CatActions => {
    return {
        type: GET_TOTAL_CATSKIPPED,
        payload: {
            data
        }
    }
}