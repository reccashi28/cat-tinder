export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIES_IMAGES = 'GET_CATEGORIES_IMAGES'
export const GET_SELECTED_CATEGORY_IMAGES = 'GET_SELECTED_CATEGORY_IMAGES'
export const GET_CATEGORY_SELECTED = 'GET_CATEGORY_SELECTED'
export const GET_TOTAL_CATSEEN= 'GET_TOTAL_CATSEEN'
export const GET_TOTAL_CATDIDNOTPET= 'GET_TOTAL_CATDIDNOTPET'
export const GET_TOTAL_CATSKIPPED= 'GET_TOTAL_CATSKIPPED'
export const GET_TOTAL_CATPET= 'GET_TOTAL_CATPET'





export type User = {
    userName: string
    catsSeen: number
    catsLiked: number
    catsDisliked: number
    catsSkipped: number
}
export type UserState = {
    userData: User[]
}

export type Categories = {
    name: string
    id: number
}

export type getCatCategories = {
    type: typeof GET_CATEGORIES,
    payload: {
        data: Categories[]
    }
}

export type getCatCategoryImages = {
    type: typeof GET_CATEGORIES_IMAGES,
    payload: {
        data: string
    }
}

export type getSelectedCategoryImages = {
    type: typeof GET_SELECTED_CATEGORY_IMAGES,
    payload: {
        data: string[]
    }
}

export type getCategorySelected = {
    type: typeof GET_CATEGORY_SELECTED,
    payload: {
        data: string
    }
}

export type getTotalCatSeen = {
    type: typeof GET_TOTAL_CATSEEN,
    payload: {
        data: number
    }
}
export type getTotalCatDidNotPet = {
    type: typeof GET_TOTAL_CATDIDNOTPET,
    payload: {
        data: number
    }
}

export type getTotalCatSkipped = {
    type: typeof GET_TOTAL_CATSKIPPED,
    payload: {
        data: number
    }
}

export type getTotalCatPet = {
    type: typeof GET_TOTAL_CATPET,
    payload: {
        data: number
    }
}

export type CatActions = getCatCategories | getCatCategoryImages | getSelectedCategoryImages | getCategorySelected | getTotalCatSeen | getTotalCatDidNotPet | getTotalCatSkipped | getTotalCatPet

export type CatState = {
    catsCategories: Categories[]
    selectedCategoryImages: string[]
    categorySelected: string
    catsSeen: number
    catSkipped: number
    catDidNotPet: number
    catPetted: number
}

export type AppState = {
    cats: CatState
}