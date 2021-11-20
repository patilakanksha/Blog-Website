
import { Box, makeStyles, Typography } from '@material-ui/core';

import { Edit, Delete } from '@material-ui/icons';

import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) =>({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down("md")]:{
            padding:5
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        // objectFit:'cover',
    },
    icons: {
        float: "right"
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,

    },
    heading: {
        fontSize:38,
        fontWeight:600,
        margin:"50px 0  10px 0",
        textAlign:"center",
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin:"20px 0 ",
        [theme.breakpoints.down("sm")]:{
            display:"block",
        }
    }
}))

const DetailView = () => {
    const classes = useStyles();
    const url = 'assets/futureTech.jpg';

    return (

        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to="/update"><Edit className={classes.icon} color="primary" /></Link>
                <Delete className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
            <Box className={classes.subheading}>
                <Typography>Auther: <span style={{fontWeight:600}}>Ak Patil</span></Typography>
                <Typography style={{marginLeft:'auto'}}>15 Nov 2021</Typography>
            </Box>
            <Typography>This is sample blog.This is sample blog.This is sample blog.This is sample blog.This is sample blog.</Typography>
        </Box>
    )

}

export default DetailView