import React, { useState } from 'react' 
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4 
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='Logo'
      />

      {/* Menu de Navegação */}
      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 
        'max-sm:w-0 overflow-hidden' : 'max-sm:w-64 max-sm:pl-10'} max-sm:fixed 
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col 
        max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 
        transition-all duration-300 shadow-xl sm:shadow-none`}>

        {/* Ícone de Fechar */}
        <img 
          src={assets.close_icon} 
          alt="Fechar" 
          className='w-6 absolute right-6 top-6 sm:hidden cursor-pointer' 
          onClick={() => setSidebarOpen(false)}
        />

        {/* Links - Adicionado onClick para fechar o menu ao clicar em um link */}
        <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Serviços</a>
        <a onClick={() => setSidebarOpen(false)} href="#work" className='sm:hover:border-b'>Nossos Trabalhos</a>
        <a onClick={() => setSidebarOpen(false)} href="#contato" className='sm:hover:border-b'>Nos Contate</a>
      </div>

      <div className='flex items-center gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Ícone do Menu Hamburguer (Mobile) */}
        <img 
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
          alt="Menu" 
          onClick={() => setSidebarOpen(true)} 
          className='w-7 sm:hidden cursor-pointer' 
        />

        {/* Botão Conecte-se (Desktop) */}
        <a href="#contact-us" className='text-sm max-sm:hidden flex
        items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
        cursor-pointer hover:scale-105 transition-all'>
            Conecte-se <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>

    </div>
  )
}

export default Navbar