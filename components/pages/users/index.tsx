import { Box, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import IUser from "types/user";
import User from "components/pages/users/user";
import fetchUser from "lib/queries/fetch-user";

const UsersPageComponent = ({ users }) => {
    console.log(users)
    console.log(fetchUser(users))
    return (
        <Stack spacing={8}>
            <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
                {Array.isArray(users)
                    ? users.map((user: IUser) => {
                    return (
                        <Box key={user.id}>
                            <User user={user} />
                        </Box>
                    );
                }):null}
            </Grid>
        </Stack>
    );
};

export default UsersPageComponent;

