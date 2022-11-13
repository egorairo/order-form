import React from 'react'
import ReactDOM from 'react-dom/client'
import OrderForm from './components/OrderForm'
import style from './styles/styles.scss'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<OrderForm />)
