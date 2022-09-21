import IUser from "./user"

export default interface ITweet {
    id: string;
    body: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    author: IUser;
}
