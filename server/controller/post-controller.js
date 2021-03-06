
import { request, response } from 'express';
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

    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try{
        if(username)
            posts = await Post.find({username:username});
        else if(category)
            posts = await Post.find({categories : category});
        else
            posts =await Post.find({});

        response.status(200).json(posts);
    }
    catch(error){
        response.status(500).json("error in postcontroller ",error);
    }
}


export const getPost = async(request, response) => {
    try
    {
       
        let post = await Post.findById(request.params.id);
     // console.log(post);
       response.status(200).json(post);
    }
    catch(error)
    {
        response.status(500).json("error while opening post : ",error);
      
    }
}

export const updatePost =async (request,response) => {
    
    try{
        
        //console.log("testing update post controller");
        await Post.findByIdAndUpdate(request.params.id , { $set: request.body});         //$set $push $addToSet
        response.status(200).response("Blog updated Successfully");
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}

export const deletePost =async (request,response) => {
    
    try{
        
        let post = await Post.findById(request.params.id);   
        await post.delete();   
        response.status(200).response("Blog deleted Successfully");  
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}