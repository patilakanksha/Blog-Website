import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image :{
            background: `url(/assets/Banner.jpg)`,
            width:"100%",
            height:"55vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            color:"white",

            '& :first-child':{
                fontSize:50,
                lineHeight:3,
            },
            '& :last-child':{
                fontSize:20,
               
            }

    }
});


const Banner = () => {
    const classes=useStyles();
    
    return(
        <Box className={classes.image}>
            <Typography>Blog Application</Typography>
            <Typography>Explore!!</Typography>
       </Box>
    )
}

export default Banner