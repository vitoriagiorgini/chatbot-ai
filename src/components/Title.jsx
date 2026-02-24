import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div className='flex flex-col items-center text-center w-full px-4'>
      {/* ADICIONADO: text-gray-900 (para modo claro) e dark:text-white (para modo escuro) */}
      <h2 className='text-4xl sm:text-5xl font-medium max-w-2xl mb-4 leading-tight text-gray-900 dark:text-white'>
        {title}
      </h2>
      
      <p className='max-w-xs sm:max-w-lg text-base sm:text-lg text-gray-500 dark:text-white/75 mb-6'>
        {desc}
      </p>
    </div>
  )
}

export default Title