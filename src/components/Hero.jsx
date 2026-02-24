import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div 
      id='hero' 
      className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'
    >
      {/* Efeito de Sombra Azul (Blurry Blob) */}
      <div 
        className='absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] md:blur-[150px] md:w-[600px] md:h-[600px] pointer-events-none -z-10'
      />

      {/* Badge Superior */}
      <div className='z-10 inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full bg-white/10 backdrop-blur-md'>
          <img className='w-22' src={assets.group_profile} alt="Profiles" />
          <p className='text-xs font-medium'>Tecnologia baseada na API Oficial do WhatsApp</p>
      </div>

      {/* Título Principal */}
      <h1 className='z-10 text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl tracking-tight'>
        Pare de perder clientes por <span className='bg-gradient-to-r from-[#3B82F6] to-[#5044E5] bg-clip-text text-transparent font-bold'>demora</span> no WhatsApp.
      </h1>

      {/* Descrição */}
      <p className='z-10 text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
        Automatize seu atendimento, responda instantaneamente e multiplique suas vendas com um Chatbot Inteligente que trabalha 24 horas por dia.
      </p>

      {/* Imagem de Mockup/Hero */}
      <div className='z-10 w-full flex justify-center'>
        <img 
          src={assets.hero_img} 
          alt="Dashboard Preview" 
          className='w-full max-w-6xl drop-shadow-2xl'
        />
      </div>

    </div>
  )
}

export default Hero