
import { useState, useEffect } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';

import { Edit, Delete } from '@material-ui/icons';

import { Link , useParams} from 'react-router-dom'
import { getPost , deletePost} from '../../service/api.js';
import { useNavigate } from 'react-router';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down("md")]: {
            padding: 5
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
        fontSize: 38,
        fontWeight: 600,
        margin: "50px 0  10px 0",
        textAlign: "center",
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: "20px 0 ",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))

const DetailView = () => {                     //match is default prop for checking url
    console.log("testing");

    const classes = useStyles();
    const url = '/assets/futureTech.jpg';

    const {id} = useParams();
    const [post, setPost] = useState({});
    
 const navigate =useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            console.log(id);
           // console.log("id is",id)
            let data = await getPost(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[])

    const deleteBlog = async() => {
       
        await deletePost(post._id);
        
        navigate('/');
    }


    return (

        <Box className={classes.container}>
        
            <img src={ post.picture ||url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary" /></Link>
                <Delete onClick ={()=>deleteBlog()} className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
            <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Auther: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
             </Link> 
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
        </Box>
    )

}

export default DetailView