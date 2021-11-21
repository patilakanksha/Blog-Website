
import { response } from 'express';
import Post from '../schema/post-schema.js';


export const createPost= async (request,response)=>{
    console.log(request.body);
    try{
     const post=   await new Post(request.body)
     post.save();
    

     response.status(200).json("blog saved successfully")
    }
    catch(error)
    {
        response.status(500).json(error,"blog saving error")
    }
}

export const getAllPosts = async (request,response) =>{

    try{
            let posts =await Post.find({});
            response.status(200).json(posts);
    }
    catch(error){
        response.status(500).json("error in postcontroller ",error);
    }
}