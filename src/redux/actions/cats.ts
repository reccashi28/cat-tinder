import axios from "axios"
import { Dispatch } from "redux"

export const fetchCategories = () => {
    return async( dispatch: Dispatch) => {
        axios.get('https://api.thecatapi.com/v1/categories')
            .then(res => {
                console.log(res.data)
            })
            .catch( e => console.log(e, "error"))
    }
} 