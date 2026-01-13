export interface User {
    name: string;
    password: string;
    email: string;
}


export interface Dish {
    id: number;
    dishName: string;
    description: string;
    image: string;
}


export type Rank = 1 | 2 | 3;


export type UserVotes = Record<number, Rank>;
export type VotesState = Record<string, UserVotes>;