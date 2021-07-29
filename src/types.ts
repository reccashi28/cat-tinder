export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIES_IMAGES = 'GET_CATEGORIES_IMAGES'


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
export type CatState = {
    catsCategories: Categories[]
    image: string
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
export type CatActions = getCatCategories | getCatCategoryImages

export type AppState = {
    cats: CatState
}