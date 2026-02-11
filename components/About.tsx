import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="block text-vtx-accent font-bold uppercase tracking-widest text-sm mb-4">Haqqımızda</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-900 leading-tight">
                Təhsil yolunda etibarlı tərəfdaşınız.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-2xl md:text-4xl font-light text-neutral-800 leading-normal mb-12">
              "Vertex Foundation olaraq illərdir tələbələrin xaricdə təhsil arzularını reallaşdırırıq. Bizimlə dünyanın ən yaxşı universitetlərinə qəbul olmaq daha asandır."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-200 pt-12">
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">Peşəkar Komanda</h4>
                <p className="text-neutral-500 font-light">
                  Sənədləşmədən qəbula qədər hər addımda yanınızdayıq. Təcrübəli mütəxəssislərimiz sizə ən doğru yolu göstərəcək.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">Qlobal Şəbəkə</h4>
                <p className="text-neutral-500 font-light">
                  Avropa və Asiyanın aparıcı təhsil ocaqları ilə birbaşa əməkdaşlıq edirik.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};