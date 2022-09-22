const fetchTweets = async () => {
    const res = await fetch(`https://theophile-renouf-blogr-clone-twitter.vercel.app/api/tweets`);
    const data = await res.json();
    //console.log(res)
    return data;
};

export default fetchTweets;
