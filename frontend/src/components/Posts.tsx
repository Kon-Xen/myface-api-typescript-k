import React from "react";
import { useEffect, useState } from "react";

 function Posts() {

    const [data, setData] = useState<any>();

    useEffect(
        () => {            
            fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setData(data));
        }, []
     );
     
     if (!data) {
         
         return (
             <div>
                 <h1>awaiting data </h1>
             </div>
         );

     } 
         
         return (
             <div>
                 damap
                 {data.results[0].id}
                 {data.results[0].message}
                 {data.results[0].imageUrl}
             </div>

         );  

    
}

export default Posts;
