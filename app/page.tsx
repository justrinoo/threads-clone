import Image from 'next/image';
import Comment from './_components/Comment/Comment';
import Post from './_components/Post/Post';

export default function Home() {
    return (
        <div>
            <Comment />
            <Post />
        </div>
    );
}
