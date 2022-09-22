const fetchTweets = async () => {
    const res = await fetch(`http://localhost:3000/api/tweets`);
    const data = await res.json();
    //console.log(res)
    return data;
};

export default fetchTweets;
