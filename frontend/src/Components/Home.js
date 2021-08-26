import logo from '../logo.svg';
import BookList from './BookList';
import App from '../App';
import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography } from '@material-ui/core'

function Home (props) {

    return  (
        <Paper>
            <Grid container>
                <Grid s={12}>
                    <Typography>
                        SDI Library
                    </Typography>
                </Grid>
            </Grid>
        <header>
            <div>
                <h1> SDI Library </h1>
                <h3>
                    <BookList bookListData={props.bookListData} handleClick={props.handleClick}/>
                </h3>
            </div>
        </header>
        </Paper>
    )
}

export default Home
