
import './blogList.css';

const BlogList = ({blogs,title,handleDelete}) => {

    return (
       <div className="blog-list">
            <h2 className="title">{title}</h2>
            {   
                blogs && blogs.map((blog) =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.titile}</h2>
                        <p>By {blog.author}</p>
                        <div className="BtnContent">
                            <button onClick={() => handleDelete(blog.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
            {!blogs && <div className="loading">No data...</div>}
       </div>
    );
}

export default BlogList;