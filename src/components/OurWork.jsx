import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: 'Atendimento inativo aos fins de semana e feriados.',
            image: assets.mulher_estressada
        },
        {
            title: 'Clientes esperando mais que deviam por uma resposta.',
            image: assets.homem_estressado
        },
        {
            title: 'Clientes indo para a concorrência.',
            image: assets.mulher_entediada
        },
    ]

    return (
        <div id='work' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white overflow-hidden'>
            
            {/* Imagem de fundo com opacidade reduzida (opacity-30) */}
            <img 
                src={assets.bgImage1} 
                className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] opacity-38 -z-10 pointer-events-none' 
                alt="Background Glow" 
            />

            <Title 
                title='Ninguém gosta de esperar. Muito menos quem quer comprar ou ser atendido.' 
                desc='A demora na resposta é a principal causa de desistência de compra e de contato. Se você demora 10 minutos, o seu cliente já foi para o concorrente. Se ainda depende de atendimento 100% manual, você está deixando dinheiro na mesa.'
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10'>
                {
                    workData.map((work, index)=>(
                        <div key={index} className='flex flex-col items-center text-center hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} className='w-full rounded-xl shadow-md' alt="" />
                            
                            <h3 className='mt-4 mb-2 text-lg font-semibold leading-snug'>
                                {work.title}
                            </h3>
                            
                            {work.description && <p className='text-sm opacity-60 w-5/6'>{work.description}</p>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurWork