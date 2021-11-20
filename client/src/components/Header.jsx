import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    component: {
        background:'#FFFFFF',
        color: "black"
    },
    link:{
        textDecoration:"none" , 
        color:"inherit",
    },
    container: {
        justifyContent:'center',
       '& > *':{
          // display : 'inline-block',
           padding:20
       }
    }
   
})


const Header = () => {
    const classes = useStyles();
    return(
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
            <Link className={classes.link} to={"/"}>
                <Typography >Home</Typography>
            </Link>
                <Typography >Contact</Typography>
                <Typography >About</Typography>
                <Typography >Login</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header