import { CatActions, CatState, FETCH_REQUEST_ERROR, GET_CATEGORY_SELECTED, GET_SELECTED_CATEGORY_IMAGES, GET_TOTAL_CATDIDNOTPET, GET_TOTAL_CATPET, GET_TOTAL_CATSEEN, GET_TOTAL_CATSKIPPED } from "../../types";

const catsInitState: CatState = {
    selectedCategoryImages: [],
    categorySelected: {
        id: null,
        name: ""
    },
    catsSeen: 0,
    catSkipped: 0,
    catDidNotPet: 0,
    catPetted: 0,
    errorMessage: ""
}

export default function cats ( state = catsInitState, action: CatActions): CatState {
    switch(action.type) {
        case GET_SELECTED_CATEGORY_IMAGES: {
            return { ...state, selectedCategoryImages: action.payload.data}
        }

        case GET_CATEGORY_SELECTED: {
            return { ...state, categorySelected: action.payload.data}
        }

        case GET_TOTAL_CATSKIPPED: {
            return { ...state, catSkipped: state.catSkipped + action.payload.data}
        }

        case GET_TOTAL_CATDIDNOTPET: {
            return { ...state, catDidNotPet: state.catDidNotPet + action.payload.data}
        }

        case GET_TOTAL_CATPET: {
            return { ...state, catPetted: state.catPetted + action.payload.data}
        }

        case GET_TOTAL_CATSEEN: {
            return { ...state, catsSeen: state.catsSeen + action.payload.data}
        }
        case FETCH_REQUEST_ERROR: {
            return { ...state, errorMessage: action.payload.data}
        }
        default: {
            return state
        }
    }
}
