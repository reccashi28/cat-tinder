import axios from "axios"
import { Dispatch } from "redux"
import { CatActions, Categories, GET_CATEGORIES, GET_CATEGORIES_IMAGES, GET_CATEGORY_SELECTED, GET_SELECTED_CATEGORY_IMAGES } from "../../types"

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

export const getSelectedCategoryImages = (data: string[]) => {
    return {
        type: GET_SELECTED_CATEGORY_IMAGES,
        payload: {
            data
        }
    }
}

export const getCategorySelected = (data: string) => {
    console.log(data, "the selected category")
    return {
        type: GET_CATEGORY_SELECTED,
        payload: {
            data
        }
    }
}


// export const fetchCategories = () => {
//     return async( dispatch: Dispatch) => {
//         axios.get('https://api.thecatapi.com/v1/categories')
//             .then(res => {
//                 dispatch(getCategories(res.data))
//             })
//             .catch( e => console.log(e, "error"))
//     }
// } 

// export const fetchCategoryImages = ( id: number) => {
//     console.log(id, "id")
//     return async( dispatch: Dispatch) => {
//         axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}`)
//             .then( res => {
//                 let data: any[] = res.data
//                 data.map( d => dispatch(getCategoryImages(d.url)))
//             })
//             .catch ( e => console.log(e))
//     }
// }

// export const getCategories = (data: Categories[]): CatActions => {
//     return {
//         type: GET_CATEGORIES,
//         payload: {
//             data
//         }
//     }
// }

// export const getCategoryImages = (data: string): CatActions => {
//     return {
//         type: GET_CATEGORIES_IMAGES,
//         payload: {
//             data
//         }
//     }
// }