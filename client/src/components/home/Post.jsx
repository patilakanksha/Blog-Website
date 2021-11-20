import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    container:{
        height: 350,
        margin:40,
        borderRadius:10,
        border:'1px solid #d3cede',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        //width:"20%",

        '& > *':{
            padding:'0 5px 5px 5px',
        }
    },
    image:{
        height:200,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0',

    },
    text:{
        color:'#878787',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    detail:{
        fontsize:14,
        wordBreak:'break-word',
    }
    
})


const Post = () =>{

    const classes=useStyles();
    const url =`assets/laptop.jpg`;

    return(
        <Box className={classes.container}>
            <img src={url} alt="laptop" className={classes.image}/>
            <Typography className={classes.text}>Technology</Typography>
            <Typography className={classes.heading}>Technoly is a Future</Typography>
            <Typography className={classes.text}>Author: Akanksha Patil</Typography>
            <Typography className={classes.detail}>It is sample blogiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</Typography>
        </Box>
    )
}

export default Post