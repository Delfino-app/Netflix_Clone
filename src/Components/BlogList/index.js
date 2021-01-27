
import './blogList.css';

const BlogList = ({blogs,title}) => {

    return (
       <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titile}</h2>
                    <p>By {blog.author}</p>
                    <div className="BtnContent">
                        <button>Delete</button>
                    </div>
                </div>
            ))}
       </div>
    );
}

export default BlogList;