export default function MemeForms() {
    return (
        <form id="getMeme" name="getMeme" method='GET' >
            <div id='inputs'>
                <label>Top Text
                <input type='text' placeholder='Top text' />
                </label>
                <label>Bottom Text
                <input id="bottom-text" type='text' placeholder='Bottom text' />
                </label>
            </div>
            <button id="memeButton">Get a new meme image 🌠</button>
        </form>        
    )
}