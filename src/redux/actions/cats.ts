import axios from "axios"
import { Dispatch } from "redux"
import { CatActions, Categories, GET_CATEGORY_SELECTED, GET_SELECTED_CATEGORY_IMAGES, GET_TOTAL_CATDIDNOTPET, GET_TOTAL_CATPET, GET_TOTAL_CATSEEN, GET_TOTAL_CATSKIPPED } from "../../types"

export const fetchCatsByCategory = (id: number, name: string) => {
    return async( dispatch: Dispatch) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=10`)
            .then(res => {
                const data: any[] = res.data;
                let imageUrl: string[] = [];
                let selectedCategoryData = {
                    name: name,
                    id: id
                }
                data.map( d => imageUrl.push(d.url))
               dispatch(getSelectedCategoryImages(imageUrl))
               dispatch(getCategorySelected(selectedCategoryData))
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

export const getCategorySelected = (data: Categories): CatActions  => {
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

export const getTotalCatDidNotPet = (data: number): CatActions => {
    return {
        type: GET_TOTAL_CATDIDNOTPET,
        payload: {
            data
        }
    }
}

export const getTotalCatPet = (data: number): CatActions => {
    return {
        type: GET_TOTAL_CATPET,
        payload: {
            data
        }
    }
}

export const getTotalCatSeen = (data: number): CatActions => {
    return {
        type: GET_TOTAL_CATSEEN,
        payload: {
            data
        }
    }
}