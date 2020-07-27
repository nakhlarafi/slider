import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/slider'
//import images from './images'

const images = [
  './src/img/1.jpg',
  './src/img/2.jpg',
  './src/img/3.jpg',
  './src/img/4.jpg'
]

ReactDOM.render(
  <Slider slides={images} autoPlay={3} />,
  document.querySelector('.main')
)
