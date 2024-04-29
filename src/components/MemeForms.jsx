import { useState, useEffect } from "react";

export default function MemeForms() {
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(response => response.json())
        .then(data => {
            setAllMemeImages(data.data.memes);
            console.log(data.data.memes);
        })
    },[])

    function handleSubmit (event) {
        event.preventDefault();
    }
    
    function handleClick () {
        const randoNum = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randoNum].url;
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