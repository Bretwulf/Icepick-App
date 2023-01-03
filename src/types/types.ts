export interface iUser {
    email: string,
    password: string,
    id: number,
    avatar: string,
    username: string,
}

export interface iSentences{
    userId: number,
    type: string,
    text: string,
    like: number,
    id: string
}
