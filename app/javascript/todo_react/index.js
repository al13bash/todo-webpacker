import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container />,
    document.body.appendChild(document.createElement('div')),
  )
})
