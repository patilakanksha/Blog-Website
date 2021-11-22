import axios from 'axios';

const URL='http://localhost:8000'

export const createPost = async (post)=>{
    
    try
    {
      return await axios.post(`${URL}/create`,post);
    }
    catch(error)
    {
        console.log('error while calling createPost API ',error);
    }
    
}

export const getAllPosts = async() =>{
  try{
    //return "testing";
       let response = await axios.get(`${URL}/posts`)                //posts api calling from route
       return response.data;

  }
  catch(error)
  {
    console.log('error while calling getAllPost API ',error);
  }

}


export const getPost = async(id) => {
  try
  {
      let response = await axios.get(`${URL}/post/${id}`);
      return response.data;
  }
  catch(error)
  {
    console.log('error while calling getPost API ',error);
  }
}

// export const getPost = async(id) => {
//   try
//   {
//       let response = await axios.get(`${URL}/post/${id}`);
//       return response.data;
//   }
//   catch(error)
//   {
//     console.log('error while calling getPost API ',error);
//   }
// }
