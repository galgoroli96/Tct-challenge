export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type AuthorType = {
    id: number;
    name: string;
}

export type CommentsType = {
    id: number;
    name: string;
    email: string;
    body: string;
}

export type FilterContextType = {
    filter: string;
    updateFilter: (value: string) => void;
};