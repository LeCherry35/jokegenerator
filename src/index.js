import generateJoke from './generateJoke'
import './styles/main.scss'
import laughin from '../assets/laughin.svg'
generateJoke()
const laughinImg = document.getElementById('laughinImg')
laughinImg.src = laughin
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)