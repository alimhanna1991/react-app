import { useState } from "react";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"My New Website",body:"lorem ipsum",author:"Alexander", id:1},
        {title:"Welcome party",body:"lorem ipsum",author:"Alexander2", id:2},
        {title:"Web Dev top tips",body:"lorem ipsum",author:"Alexander3", id:3}
    ]);
   
    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;