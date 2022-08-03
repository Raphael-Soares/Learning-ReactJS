import {Routes, Route, Link} from "react-router-dom";
import {useState, useEffect} from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Album from "./pages/Album";
import NewAlbum from "./pages/NewAlbum";

function App() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((json) => setAlbums(json));
    }, []);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/album">
                    <Route path=":id" element={<Album />} />
                    <Route path="new_album" element={<NewAlbum />} />
                </Route>
            </Routes>
            <ul>
                <li>
                    <Link to="/album/new_album">Novo Album</Link>
                </li>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`album/${album.id}`}>Ler mais</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
