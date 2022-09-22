export default interface ISession {
    user: {
        name: string;
        email: string;
        image: string;
        userId: string;
    };
    id: string;
    expires: string;
    token: string;
}
