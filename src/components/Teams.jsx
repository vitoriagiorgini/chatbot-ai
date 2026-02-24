import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

function Teams() {
  return (
    <div className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title 
        title='Quem automatizou, cresceu' 
        desc='Junte-se ao time de empresas que deixaram o trabalho manual para trás e hoje colhem os frutos de uma escala inteligente e eficiente.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl'>
        {teamData.map((team, index) => (
          /* Card Container com overflow-hidden para cortar a animação fora do raio */
          <div 
            key={index} 
            className='relative p-[1px] rounded-2xl overflow-hidden flex items-center justify-center group'
          >
            {/* A LINHA QUE SE MEXE: Gradiente rotativo */}
            <div className='absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_20%,#6366f1_50%,transparent_80%,transparent_100%)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]'></div>

            {/* O CARD REAL: Fica por cima da animação, deixando apenas 1px de borda aparente */}
            <div className='relative flex items-start gap-6 p-8 rounded-2xl bg-white dark:bg-gray-900 w-full h-full z-10'>
              <img src={team.image} className='w-20 h-20 rounded-full object-cover border-2 border-indigo-500/10' alt={team.name} />
              
              <div className='flex-1'>
                <h3 className='font-bold text-lg'>{team.name}</h3>
                
                {/* Linha sutil abaixo do nome para combinar com o estilo anterior */}
                <div className='h-[1px] w-1/4 bg-indigo-500/30 mt-1 mb-3'></div>
                
                <p className='text-sm md:text-base opacity-80 leading-relaxed italic'>
                  {team.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estilo Global temporário caso não tenha a animação 'spin' no tailwind.config */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  )
}

export default Teams