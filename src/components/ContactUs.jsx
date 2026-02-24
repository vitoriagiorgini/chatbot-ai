import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ContactUs = () => {
  return (
    <div id='contato' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    <Title title='Pronto para escalar seu atendimento?' desc='Não deixe seu cliente esperando mais nenhum minuto.'/>

  <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

    <div>
        <p className='mb-2 text-sm font-medium'>Seu nome</p>
        <div className='flex pl-3 rounded-lg border border-gray-300
        dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input type="text" placeholder='Digite seu nome' className='w-full
            p-3 text-sm outline-none' required/>
        </div>
    </div>

    <div>
        <p className='mb-2 text-sm font-medium'>Seu e-mail</p>
        <div className='flex pl-3 rounded-lg border border-gray-300
        dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input type="text" placeholder='Digite seu e-mail' className='w-full
            p-3 text-sm outline-none' required/>
        </div>
    </div>

    <div className='sm:col-span-2'>
        <p className='mb-2 text-sm font-medium'>Mensagem</p>
        <textarea rows={8} placeholder='Digite sua mensagem' className='w-full p-3 text-sm
        outline-none rounded-lg border border-gray-300
         dark:border-gray-600' />        
       
    </div>

    <button type='submit' className='w-max flex gap-2 bg-primary text-white
    text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103
    transition-all'>
        Enviar <img src={assets.arrow_icon} alt="" />
    </button>




</form>
</div>
  )
}

export default ContactUs
