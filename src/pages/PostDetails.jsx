import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function PostDetails({ posts, setPosts }) {
    const { id } = useParams()
    const post = posts.filter(post => post.id === Number(id))[0]
    const postIdx = posts.findIndex(obj => obj.id === post.id)
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [staticTitle, setStaticTitle] = useState(post.title);

    const navigate = useNavigate()

    const updatePost = (e) => {
        e.preventDefault()
        posts[postIdx].title = title
        posts[postIdx].content = content
        setStaticTitle(title)
    }

    const deletePost = (e) => {
        e.preventDefault()
        setPosts(posts.filter(obj => obj.id !== post.id))
        navigate('/')
    }

    return (
        <div className='app__container'>
                <div className='header'>
                    <h1>Пост '{staticTitle}'</h1>
                    <button type='button' onClick={() => navigate(-1)}>Назад</button>
                </div>
                <form onSubmit={updatePost} className='details__form'>
                    <input type='text' placeholder='Название' value={title} onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <textarea placeholder='Описание' value={content} onChange={e => setContent(e.target.value)}/>
                    <br/>
                    <div className='details__btns'>
                        <button>Сохранить</button>
                        <button
                            type='button'
                            style={{background: 'red'}}
                            onClick={(e) => {
                                if (window.confirm('Вы действительно хотите удалить этот пост ?')) deletePost(e)
                            }}>
                            Удалить
                        </button>
                    </div>
                </form>
        </div>
    );
}

export default PostDetails;