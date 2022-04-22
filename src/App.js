import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PostDetails from './pages/PostDetails'
import { useState } from 'react'

const data = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Description'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Description'
    },
    {
        id: 3,
        title: 'Post 3 loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong title',
        content: 'Description'
    },
    {
        id: 4,
        title: 'Post 4',
        content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
    },
]

export default function App() {
    const [posts, setPosts] = useState(data);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Homepage posts={posts} setPosts={setPosts} />} />
                    <Route path='/posts/:id' element={<PostDetails posts={posts} setPosts={setPosts} />} />
                </Routes>
            </div>
        </Router>
    );
}
