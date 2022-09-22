const fetchUsers = async () => {
    const res = await fetch(`https://theophile-renouf-blogr-clone-twitter.vercel.app/api/users`);
    const data = await res.json();
    //console.log(res)
    return data;
};

export default fetchUsers;
