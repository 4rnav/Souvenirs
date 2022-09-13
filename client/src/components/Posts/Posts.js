import React from "react";
import Post from "./Post/Post";
import useStyle from './styles'
const Posts = () => {
    const classes = useStyle();
    return(
        <h1 className={classes.mainContainer}>
            Posts
        </h1>
    )
}

export default Posts;