import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Album() {
    const [album, setAlbum] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/" + id)
            .then((response) => response.json())
            .then((json) => setAlbum(json));
    }, [id]);
    return (
        <div>
            {album.id} {album.title}
        </div>
    );
}

export default Album;
