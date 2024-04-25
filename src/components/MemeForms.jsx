import data from "../memesData"

export default function MemeForms() {
    function handleSubmit (event) {
        event.preventDefault();
    }
    
    function handleClick () {
        const randoNum = Math.floor(Math.random() * data.data.memes.length);
        const url = data.data.memes[randoNum].url;
        console.log(url);
        return url;
    }

    return (
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
    )
}