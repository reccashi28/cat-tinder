import { CatActions, CatState, GET_CATEGORIES, GET_CATEGORIES_IMAGES, GET_CATEGORY_SELECTED, GET_SELECTED_CATEGORY_IMAGES } from "../../types";

const catsInitState: CatState = {
    catsCategories: [],
    selectedCategoryImages: [],
    categorySelected: "",
    catsSeen: 0,
    catSkipped: 0,
    catDidNotPet: 0,
    catPetted: 0
}

export default function cats ( state = catsInitState, action: CatActions): CatState {
    switch(action.type) {
        case GET_CATEGORIES: {
            return { ...state, catsCategories: action.payload.data}
        }

        case GET_SELECTED_CATEGORY_IMAGES: {
            return { ...state, selectedCategoryImages: action.payload.data}
        }

        case GET_CATEGORY_SELECTED: {
            return { ...state, categorySelected: action.payload.data}
        }

        // case GET_CATEGORIES_IMAGES: {
        //     return { ...state, image: action.payload.data}
        // }

        default: {
            return state
        }
    }
}
