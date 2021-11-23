import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core';

import AddIcon from '@material-ui/icons/AddCircle';
import { getPost } from '../../service/api';

const useStyles = makeStyles((theme) =>({
    conatainer:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding: 5,
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover',
    },
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:10,
    },
    textfield:{
        flex:1,
        margin:"0 30px",
        fontSize:25
    },
    textarea:{
       width:"100%",
       marginTop:50,
       border:"none",
       fontSize:18,

       '&:focus-visible':{
           outline:'none',
       }
   }
 
}))

const UpdateView = () => {
    const classes =useStyles();
    const url="/assets/writeblog.jpg";
    
    const {id} =useParams();
    const [post, setPost]=useState({});
    
    
    useEffect(()=>{

        const fetchData = async () => {
            console.log(id);
           // console.log("id is",id)
            let data = await getPost(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])



    
    return(
        <Box className={classes.conatainer}>
            <img src={post.picture || url} alt="banner" className={classes.image}/>
            <FormControl className={classes.form}>
                    <AddIcon fontSize="large" color="action"/>

                    <InputBase placeholder="title" value={post.title} className={classes.textfield}/>

                    <Button variant="contained" color="primary">Update</Button>

                    
            </FormControl>

            <TextareaAutosize
                    rowsMin={3}
                    placeholder="write Blog here"
                    value={post.description}
                    className={classes.textarea}
                    
                    
                    />
        
        </Box>

    )
}

export default UpdateView;