const saveTweet = async (body: any) => {
    const res = await fetch(`https://theophile-renouf-blogr-clone-twitter.vercel.app/api/tweets`, {
        method: "POST",
        body: JSON.stringify(body),
    });

    const data = await res.json();
   // console.log(data)

    return data;
};

export default saveTweet;
