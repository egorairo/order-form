import * as React from 'react'
import {useCallback, useState} from 'react'

const OrderForm = () => {
  const [tel, setTel] = useState('')

  const handleOrderFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (tel) {
        try {
          const response = await fetch(
            'https://reqbin.com/echo/post/json',
            {
              method: 'POST',
              body: tel,
            }
          )

          if (response) {
            alert('Ваш заказ успешно оформлен')
          }
        } catch (error) {
          alert(error)
        } finally {
          setTel('')
        }
      } else {
        alert('Вам нужно ввести свой номер телефона')
      }
    },
    [tel]
  )

  const handleTelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTel(e.target.value.trim())
    },
    [tel]
  )

  return (
    <div className="container">
      <form className="order_form" onSubmit={handleOrderFormSubmit}>
        <div className="order_form__container">
          <div className="order_form__input_block">
            <input
              type="tel"
              required
              minLength={1}
              placeholder="Ваш номер..."
              className="order_form__input"
              value={tel}
              onChange={handleTelChange}
            />
          </div>
          <button type="submit" className="order_form__button">
            <span>Заказать</span>
            <span className="fab fa-github-alt order_form__button_icon" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm
