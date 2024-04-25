export default function MemeForms() {
    return (
        <form id="getMeme" name="getMeme" method='GET' >
            <div id='inputs'>
            <input type='text' placeholder='Top text'></input>
            <input type='text' placeholder='Bottom text'></input>
            </div>
            <button id="memeButton">Get a new meme image 🌠</button>
        </form>        
    )
}