import axios from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com', config).then(res => {
        console.log(res);
        document.getElementById('joke').innerHTML = res.data.joke
    })
    return "I don't trust stairs. They're always up into something"
}
export default generateJoke