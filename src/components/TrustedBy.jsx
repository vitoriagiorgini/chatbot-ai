import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-8 text-gray-700 dark:text-white/80'>
      <h3 className='font-semibold'>Conheça alguns dos Nossos Clientes</h3>

      {/* Alterado para Grid: 2 colunas no mobile e flexbox no desktop */}
      <div className='grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-10 m-4'>
        {company_logos.map((logo, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img 
              src={logo} 
              alt="Logo Cliente" 
              className='max-h-6 sm:max-h-7 w-auto object-contain dark:drop-shadow-xl' 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy