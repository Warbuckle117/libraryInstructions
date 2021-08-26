import { Button, Grid, Paper, Typography } from '@material-ui/core'
import App from '../App'
import { Link } from 'react-dom'

function Books (props) {
    return (
        <Grid container>
            <Grid s='12' align='center'>
                <Typography>Book Details</Typography>
                <Button href='/' variant='contained' color='primary'>Home</Button>
            </Grid>
            <Grid s={6}>
                <Paper className='bookStyle'>
                    
                </Paper>
            </Grid>
        </Grid>
    )
}


export default Books