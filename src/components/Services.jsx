import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard';

const Services = () => {

    const servicesData = [
        {
            title: 'Atendimento 24/7',
            description: 'Seu negócio nunca mais fecha. Responda dúvidas, agende horários e feche vendas enquanto você dorme.',
            icon: assets.ads_icon
        },
        {
            title: 'Triagem Inteligente',
            description: 'O Chatbot qualifica o lead e direciona para o humano apenas quando necessário. Adeus, curiosos; olá, compradores.',
            icon: assets.marketing_icon
        },
        {
            title: 'Envio em massa seguro',
            description: 'Dispare promoções e novidades para sua base sem risco de bloqueio (via API Oficial).',
            icon: assets.content_icon
        },
        {
            title: 'Integração Total',
            description: 'Conecte seu chatbot com todas as ferramentas do seu negócio. CRM, e-commerce, sistemas de pagamento e mais.',
            icon: assets.social_icon
        },
    ];

    return (
        <section id='services' className='relative py-24 px-6 sm:px-12 lg:px-24 xl:px-40 overflow-hidden bg-white dark:bg-black'>
            
            {/* Decoração de Fundo (Blur suave no canto superior) */}
            <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-50 dark:bg-indigo-900/10 blur-[120px] rounded-full -z-0' />

            <div className='relative z-10 max-w-7xl mx-auto'>
                {/* Título da Seção */}
                <div className="text-left mb-16">
                    <Title 
                        title='Otimize seu tempo, melhore seu atendimento e venda mais' 
                        desc='Soluções completas para automatizar seu atendimento e impulsionar seu negócio.' 
                    />
                </div>

                {/* Grid de Cards - GAP-8 garante o espaçamento */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>

            {/* Imagem de Fundo (opcional, baseada no seu código original) */}
            <img 
                src={assets.bgImage2} 
                alt="" 
                className='absolute -bottom-60 -right-60 -z-0 dark:hidden opacity-20 w-[600px]'
            />
        </section>
    )
}

export default Services