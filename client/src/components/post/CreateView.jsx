
import { useState } from 'react';
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';
import {useNavigate} from 'react-router-dom'

import {createPost} from '../../service/api';

const useStyles = makeStyles((theme) => ({
    conatainer: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 5,
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
    },
    form: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    textfield: {
        flex: 1,
        margin: "0 30px",
        fontSize: 25,
    },
    textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,

        '&:focus-visible': {
            outline: 'none',
        }
    }

}))

const initialValues = {
    title: ``,
    description: ``,
    picture: ``,
    username: 'akpatil',
    categories: 'All',
    createDate: new Date(),
}



const CreateView = () => {
    const classes = useStyles();
    const url = "/assets/writeblog.jpg";
    const navigate = useNavigate();

    const [post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

const savePost = async () => {
 
    await createPost(post);
    navigate('/');
}



    return (
        <Box className={classes.conatainer}>
            <img src={url} alt="banner" className={classes.image} />
            <FormControl className={classes.form}>
                <AddIcon fontSize="large" color="action" />

                <InputBase
                    onChange={(e) => handleChange(e)}
                    placeholder="title"
                    className={classes.textfield}
                    name='title'
                />

                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>


            </FormControl>

            {
                <TextareaAutosize
                    minRows={3}
                    placeholder="Write Blog Here"
                    className={classes.textarea}
                    onChange={(e) => handleChange(e)}
                    name='description'
                />
            }
            

        </Box>

    )
}

export default CreateView;