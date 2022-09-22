const saveTweet = async (body: any) => {
    const res = await fetch(`http://www.pesty.net:3000/api/tweets`, {
        method: "POST",
        body: JSON.stringify(body),
    });

    const data = await res.json();
   // console.log(data)

    return data;
};

export default saveTweet;
