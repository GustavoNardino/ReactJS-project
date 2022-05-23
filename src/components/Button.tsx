import React from 'react'

type ButtonProps = {
  text: string;
}

function Button(props: ButtonProps) {
  //STATE PARA FUNÇÃO DO BOTAO
  return (
    <form>
      <button className='btn' type='button'>{props.text}</button>
    </form>
  )
}

export default Button