import { useState,useEffect} from "react";
import Blog_list from "./blog_list";

const Home = () => {
    const [blogs,setBlogs] = useState(null);
    const [name,setName]=useState("Ali");

    const handleDelete = (id)=>{
        const newBlogs= blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(res=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setBlogs(data);
        })
    },[]);
    return ( 
        <div className="home">
            {blogs && <Blog_list blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} 
            <button onClick={()=>setName('alexander')}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;