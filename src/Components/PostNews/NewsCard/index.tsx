import { INews } from "../../../App"

interface INewsCardProps{
    post: INews;
}

export const NewsCard = ({post}: INewsCardProps) => {

    return(
        <>
            <li>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.author}</span>
            </li>
        </>
    )
}
export default NewsCard