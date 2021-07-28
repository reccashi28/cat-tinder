import { CatActions, CatState, GET_CATEGORIES } from "../../types";

const catsInitState: CatState = {
    catsCategories: []
}

export default function cats ( state = catsInitState, action: CatActions): CatState {
    switch(action.type) {
        case GET_CATEGORIES: {
            return { ...state, catsCategories: action.payload.data}
        }

        default: {
            return state
        }
    }
}
