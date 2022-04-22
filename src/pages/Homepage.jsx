import { useState } from 'react'
import Post from '../components/Post'
import Modal from '../components/Modal'

function Homepage({ posts, setPosts }) {
    const [modalActive, setModalActive] = useState(false)
    const [newPost, setNewPost] = useState({
        id: null,
        title: '',
        content: ''
    })

    const onHandleChange = e => {
        const { name, value } = e.target
        setNewPost((prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }))
    }

    const addPost = (e) => {
        e.preventDefault()
        const maxId = posts.reduce((max, post) => (Number(post.id) > max ? Number(post.id) : max), 0)
        newPost.id = maxId + 1
        setPosts([...posts, newPost])
        setNewPost({
            id: null,
            title: '',
            content: ''
        })
        setModalActive(false)
    }

    const { title, content } = newPost

    return (
        <div className='app__container'>
            <div className="header">
                <h1>Unistory blog</h1>
                <button onClick={() => setModalActive(true)}>Добавить пост</button>
            </div>
            <div className="posts__container">
                {posts.map(post => <Post key={post.id} title={post.title} content={post.content} id={post.id}/>)}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h3>Добавить новый пост</h3>
                <br/>
                <form onSubmit={addPost}>
                    <input type='text' name='title' placeholder='Название' value={title} onChange={onHandleChange} required/>
                    <br/>
                    <textarea name='content' placeholder='Описание' value={content} onChange={onHandleChange} required/>
                    <br/>
                    <div className='modal__btns'>
                        <button type='button' onClick={() => setModalActive(false)}>Отменить</button>
                        <button>Добавить</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Homepage;