import { CatActions, CatState, GET_CATEGORIES, GET_CATEGORIES_IMAGES } from "../../types";

const catsInitState: CatState = {
    catsCategories: [],
    image: ''
}

export default function cats ( state = catsInitState, action: CatActions): CatState {
    switch(action.type) {
        case GET_CATEGORIES: {
            return { ...state, catsCategories: action.payload.data}
        }

        case GET_CATEGORIES_IMAGES: {
            return { ...state, image: action.payload.data}
        }

        default: {
            return state
        }
    }
}
