import { Form, useActionData, useNavigate } from 'react-router'
import CloseWindow from '@/assets/icons/close-window.svg?react'
import $ from '@/styles/CriarMateria.module.css'

export default function CriarMateria() {
  const actionData = useActionData()
  const navigate = useNavigate()

  return (
    <Form className={$.modal} method="post">
      <header className={$.form_header}>
        <h2>Nova matéria</h2>
        <button
          className={$.btn_exit}
          type="button"
          onClick={() => navigate(-1)}
        >
          <CloseWindow className={$.svg} />
        </button>
      </header>
      <div className={$.form_content}>
        <div className={$.input_wrapper}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" />
        </div>
        {actionData?.erro && <p>{actionData.erro}</p>}
        <button className={$.btn_submit} type="submit">
          Criar matéria
        </button>
      </div>
    </Form>
  )
}
