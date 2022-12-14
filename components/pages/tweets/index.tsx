import { Box, Grid, Stack } from "@chakra-ui/react";
import AddNewTweetForm from "components/pages/tweets/add-new-tweets-forms";
import Tweet from "components/pages/tweets/tweet";
import React from "react";
import ITweet from "types/tweet";
import {array} from "prop-types";

const TweetsPageComponent = ({ tweets }) => {

    return (

        <Stack spacing={8}>
            <Box>
                <AddNewTweetForm />
            </Box>
            <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>

                {Array.isArray(tweets)
                    ? tweets.map((tweet: ITweet) => {
                    return (
                        <Box key={tweet.id}>
                            <Tweet tweet={tweet} />
                        </Box>
                    );
                })
                :null}
            </Grid>
        </Stack>
    );
};

export default TweetsPageComponent;
