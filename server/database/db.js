import mongoose from 'mongoose'



const Connection = async () =>{

   try
   {
        const URL='mongodb://akanksha:akanksha!1@blogweb-shard-00-00.m4qyr.mongodb.net:27017,blogweb-shard-00-01.m4qyr.mongodb.net:27017,blogweb-shard-00-02.m4qyr.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-gx20ux-shard-0&authSource=admin&retryWrites=true&w=majority'
    
         mongoose.connect(URL,{ useNewUrlParser : true, useUnifiedTopology: true});
         console.log("connection created with database");
   }
   catch(error)
   {
       console.log("Error while connecting ",error);
   }
       
}
   


export default Connection;