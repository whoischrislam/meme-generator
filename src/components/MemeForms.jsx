import { useState } from "react";
import data from "../memesData"

export default function MemeForms() {
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(data);
    
    function handleSubmit (event) {
        event.preventDefault();
    }
    
    function handleClick () {
        const randoNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const url = allMemeImages.data.memes[randoNum].url;
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }));
        console.log(meme.randomImage);
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="getMeme" name="getMeme" method='GET' >
                <div id='inputs'>
                    <label>Top Text
                    <input type='text' placeholder='Top text' />
                    </label>
                    <label>Bottom Text
                    <input id="bottom-text" type='text' placeholder='Bottom text' />
                    </label>
                </div>
                <button onClick={handleClick} id="memeButton">Get a new meme image 🌠</button>
            </form>
            <img src={meme.randomImage} id="image" />
        </>
    )
}