const fetchUser = async (userId: string) => {
    const res = await fetch(
        `http://www.pesty.net:3000/api/users/${userId}`
    );
    const data = await res.json();

    return data;
};

export default fetchUser;

