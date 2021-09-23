import React from "react";
import {Route, Switch} from 'react-router';
import { Blogs } from "../components/Blogs/Blogs";
import { BlogPage } from "../pages/BlogPage/BlogPage";

export const AppRouter: React.FC = () => {
    return(
        <Switch>
            <Route path='/:blogId' component={BlogPage}/>
            <Route exact path='/' component={Blogs}/>
        </Switch>
    )
}