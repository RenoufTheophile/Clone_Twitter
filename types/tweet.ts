import IUser from "types/user"

export default interface ITweet {
    id: string;
    create_at: string;
    body: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    author: IUser;
}
