import { INews } from "../../App";
import NewsCard from "./NewsCard";

interface INewsProps{
    postList: INews[];
}

export const PostNews = ({postList}: INewsProps) => {

    return(
        <>
            <ul>
                {postList.map((post) => (
                    <NewsCard key={post.id} post={post}/>
            ))}
            </ul>
        </>
    )
}
export default PostNews