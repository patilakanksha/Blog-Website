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


const Post = ({post}) =>{

    const classes=useStyles();
    const url =post.picture || `assets/laptop.jpg`;
    // debugger;
// console.log(post);
    return(
        <Box className={classes.container} key={post._id}>
            <img src={url} alt="laptop" className={classes.image}/>
            <Typography className={classes.text}>{post.categories} </Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>{post.username}</Typography>
            <Typography className={classes.detail}>{post.description}</Typography>
        </Box>
    )
}

export default Post