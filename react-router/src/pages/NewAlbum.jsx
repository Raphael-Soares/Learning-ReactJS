import {useEffect} from "react";

function NewAlbum() {
    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: "React Hooks POST Request Example"}),
        };
        fetch("https://jsonplaceholder.typicode.com/albums/", requestOptions);
    }, []);
    return <div>NewAlbum</div>;
}

export default NewAlbum;
