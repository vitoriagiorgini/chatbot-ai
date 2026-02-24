import React, { useState, useRef } from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative group overflow-hidden rounded-[24px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Efeito de Borda que segue o mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Borda Gradiente "Iluminada" */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: opacity,
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.8), rgba(59, 130, 246, 0.8), transparent 100%)`,
          padding: "1px", // Define a espessura da borda
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      />

      {/* Conteúdo Principal */}
      <div className="relative z-20 flex items-center gap-6 p-8 h-full">
        {/* Container do Ícone (Estilo igual à imagem) */}
        <div className="flex-shrink-0 relative w-24 h-24 flex items-center justify-center">
          {/* Círculo de fundo sutil */}
          <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 rounded-full scale-110" />
          {/* Círculo central com borda */}
          <div className="relative w-16 h-16 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center shadow-sm">
            <img
              src={service.icon}
              alt=""
              className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Textos */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
            {service.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;