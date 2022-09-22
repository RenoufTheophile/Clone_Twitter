const fetchUser = async (userId: string) => {
    const res = await fetch(
        `https://theophile-renouf-blogr-clone-twitter.vercel.app/api/users/${userId}`
    );
    const data = await res.json();

    return data;
};

export default fetchUser;

