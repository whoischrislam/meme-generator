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
    }

    function handleInputs (event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="getMeme" name="getMeme" method='GET' >
                <div id='inputs'>
                    <label>Top Text
                    <input onChange={handleInputs} type='text' placeholder='Top text' value={meme.topText} name="topText" />
                    </label>
                    <label>Bottom Text
                    <input onChange={handleInputs} id="bottom-text" type='text' placeholder='Bottom text' value={meme.bottomText} name="bottomText" />
                    </label>
                </div>
                <button onClick={handleClick} id="memeButton">Get a new meme image 🌠</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} id="image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </>
    )
}