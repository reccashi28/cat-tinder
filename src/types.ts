export const GET_CATEGORIES = 'GET_CATEGORIES'


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
    category: string
}
export type CatState = {
    catsCategories: Categories[]
}

export type getCatCategories = {
    type: typeof GET_CATEGORIES,
    payload: {
        data: Categories[]
    }
}

export type CatActions = getCatCategories

export type AppState = {
    cats: CatState
}