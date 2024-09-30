import "./Blogs.css"
import BlogThumbnail from "../components/BlogThumbnail"
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    const navigate = useNavigate();

  return (
    <div className="blogs">
        <BlogThumbnail title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" onClick={() => {
            navigate("/blog1")
        }} />
    </div>
  )
}