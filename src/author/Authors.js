import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  const { authors } = data;
  if (loading) return <h1>Loading</h1>;
  if (errors) return <h2>Errors</h2>;
  console.log(data);
  return (
    <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px", borderRadius: 4 }}>
      {authors?.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a href={`/authors/${authors.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
