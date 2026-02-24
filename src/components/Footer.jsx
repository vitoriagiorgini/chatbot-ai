import React from 'react';

// Mock de ativos
const assetsMock = {
  facebook_icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  twitter_icon: "https://cdn-icons-png.flaticon.com/512/3256/3256609.png",
  instagram_icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  linkedin_icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
};

const Footer = ({ theme }) => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#services' },
    { name: 'Nossos Trabalhos', href: '#work' },
    { name: 'Nos Contate', href: '#contato' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: assetsMock.facebook_icon, href: '#' },
    { name: 'X (Twitter)', icon: assetsMock.twitter_icon, href: '#' },
    { name: 'Instagram', icon: assetsMock.instagram_icon, href: '#' },
    { name: 'LinkedIn', icon: assetsMock.linkedin_icon, href: '#' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-black py-16 px-6 sm:px-12 lg:px-24 xl:px-40 transition-colors duration-300 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid de layout principal - Aumentado o mb-4 para mb-16 para dar "ar" ao layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Coluna Esquerda: Marca e Navegação */}
          <div className="flex flex-col gap-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="10" width="20" height="12" rx="2" transform="skewX(-15)" className="fill-blue-500" />
                  <rect x="15" y="18" width="20" height="12" rx="2" transform="skewX(-15)" className="fill-indigo-600 opacity-80" />
                </svg>
                <span className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  agency<span className="text-indigo-600">.ai</span>
                </span>
              </div>

              <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed text-lg">
                Da estratégia à execução, criamos soluções digitais que movem o seu negócio para a frente com inteligência e inovação técnica.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna Direita: Newsletter */}
          <div className="flex flex-col gap-6 bg-gray-50/50 dark:bg-gray-900/30 p-8 lg:p-10 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Inscreva-se na nossa newsletter
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                As últimas notícias, artigos e recursos, enviados para a sua caixa de entrada semanalmente.
              </p>
            </div>

            <form 
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Digite o seu e-mail"
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 whitespace-nowrap"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Divisor Visual - Aumentado my-6 para my-12 */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-12" />

        {/* Rodapé Inferior: Copyright e Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
            <p>Copyright 2026 © <span className="font-semibold text-gray-600 dark:text-gray-300">Dev Vitória Giorgini</span></p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-200 transition-all duration-300 group"
                title={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity dark:invert" 
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;