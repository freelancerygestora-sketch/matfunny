import { createFileRoute } from "@tanstack/react-router";
import maria from "@/assets/t-maria.jpg";
import jorge from "@/assets/t-jorge.jpg";
import carlos from "@/assets/t-carlos.jpg";
import alejandra from "@/assets/t-alejandra.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MatFunny — Sumas y restas convertidas en aventuras" },
      { name: "description", content: "La app que hace que tu hijo disfrute las matemáticas con logros, rachas y puntos. $6,99/mes con garantía de 7 días." },
      { property: "og:title", content: "MatFunny — Sumas y restas convertidas en aventuras" },
      { property: "og:description", content: "Tu hijo domina sumas y restas jugando. Garantía de 7 días." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA = "Sí, quiero que mi hijo disfrute de las matemáticas";

const problems = [
  ["📉", "Brecha creciente", "Mientras otros niños avanzan con confianza, el tuyo se queda atrás, y la brecha crece cada mes."],
  ["😣", "Frustración acumulada", "Cada tarea se convierte en una batalla. Lágrimas, resistencia y tensión en casa."],
  ["💔", "Pérdida de confianza", "\"No se me dan bien las matemáticas\" se vuelve una creencia difícil de cambiar."],
  ["🚪", "Oportunidades perdidas", "Sin bases sólidas se cierran puertas, desde carreras STEM hasta la vida cotidiana."],
];

const mechanism = [
  ["🎮", "Auténtica gamificación", "Cada respuesta correcta suma puntos. Se desbloquean logros y se acumulan rachas."],
  ["🍎", "Contexto visual", "Frutas, animales y objetos que tu hijo entiende. Nada de números abstractos."],
  ["📈", "Dificultad inteligente", "Empieza fácil y sube el desafío a su ritmo. La curva de aprendizaje perfecta."],
  ["🏆", "Motivación que se vuelve propia", "Primero son los puntos. Después, el orgullo de sentirse competente."],
];

const benefits = [
  ["Disfruta aprendiendo", "Sin tener que obligarlo a abrir la aplicación."],
  ["Confianza en 2-3 semanas", "Ve sus propios logros y cambia su narrativa interna."],
  ["Domina rápido", "La repetición gamificada fija los conceptos en la memoria."],
  ["Menos estrés en casa", "Se acabaron las discusiones por las tareas."],
  ["Disciplina y constancia", "Mantener la racha crea el hábito de practicar a diario."],
  ["Funciona en cualquier lugar", "De viaje, en la sala de espera, en cualquier momento libre."],
  ["Base sólida", "Multiplicar y dividir es más fácil cuando sumar y restar es automático."],
];

const testimonials = [
  [maria, "María González", "Madre de Lucas (7) · México", "Mi hijo me pidió que le abriera MatFunny. ¡Que se lo pidiera! En tres semanas ya dominaba las operaciones."],
  [jorge, "Prof. Jorge Martínez", "Escuela Primaria Central · Colombia", "Lo usé en mi clase de segundo grado. Algunos de mis alumnos más lentos finalmente se sintieron ganadores."],
  [carlos, "Carlos Rodríguez", "Padre de Sofía (8) · Argentina", "Gastamos dinero en clases particulares que no funcionaban. MatFunny cuesta mucho menos y funciona mejor."],
  [alejandra, "Alejandra Vargas", "Madre de Mateo (6) · España", "Viajamos mucho. MatFunny es perfecta para seguir aprendiendo sin sentir que hace tareas. Es nuestra app favorita."],
];

const faqs = [
  ["¿No es solo otra pantalla más?", "Está diseñada para la enseñanza activa: tu hijo resuelve, decide y recibe retroalimentación inmediata. 10-15 minutos de aprendizaje concentrado valen más que una hora de tareas frustrantes."],
  ["¿Necesita internet todo el tiempo?", "Funciona principalmente en línea, optimizada para conexiones lentas. Algunos niveles se pueden descargar para jugar sin conexión."],
  ["¿Y si ya sabe lo básico?", "La app ajusta la dificultad automáticamente. Siempre hay un siguiente nivel."],
  ["¿Sirve para todos los niños?", "Sí. Los que van despacio ganan confianza; los que van rápido se ponen a prueba. Se adapta a cada jugador."],
  ["¿Cuándo se ven resultados?", "Motivación y disfrute en 1-2 semanas. Dominio real de los conceptos en 3-4 semanas de uso constante."],
  ["¿Qué la hace diferente?", "El aprendizaje está diseñado EN TORNO al juego, por profesores y psicólogos educativos, no con puntos pegados encima."],
  ["¿Mis datos están seguros?", "Cumple COPPA y RGPD. No vendemos datos ni usamos rastreadores de terceros."],
  ["¿Puedo cancelar cuando quiera?", "Sí. Sin penalizaciones ni llamadas molestas, desde tu panel."],
];

function CtaButton({ variant = "gradient", className = "" }: { variant?: "gradient" | "light"; className?: string }) {
  const base = "inline-block rounded-full font-display font-semibold text-center transition-transform hover:scale-[1.02]";
  const v = variant === "gradient" ? "gradient-brand text-primary-foreground shadow-glow px-7 py-3.5" : "bg-secondary text-secondary-foreground px-8 py-4";
  return <a href="#oferta" className={`${base} ${v} ${className}`}>{CTA}</a>;
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs uppercase tracking-[0.15em] text-accent">{eyebrow}</span>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 size-[520px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-[18%] -right-40 size-[560px] rounded-full bg-accent/25 blur-[130px]" />
        <div className="absolute top-[45%] left-1/3 size-[480px] rounded-full bg-magenta/20 blur-[130px]" />
        <div className="absolute bottom-40 -left-20 size-[480px] rounded-full bg-primary/20 blur-[130px]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1000px] overflow-hidden">
        <div className="animate-drift absolute top-24 left-[8%] h-[220px] w-[420px] rounded-3xl glass" />
        <div className="animate-drift2 absolute top-[40%] right-[6%] h-[260px] w-[380px] rounded-3xl bg-accent/10 border border-accent/20 backdrop-blur-xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl gradient-brand font-display text-lg font-bold">M</span>
            <span className="font-display text-xl font-bold tracking-tight">MatFunny</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#como-funciona">Cómo funciona</a>
            <a className="hover:text-foreground" href="#beneficios">Beneficios</a>
            <a className="hover:text-foreground" href="#opiniones">Opiniones</a>
            <a className="hover:text-foreground" href="#preguntas">Preguntas</a>
          </div>
          <a href="#oferta" className="rounded-full glass px-5 py-2 text-sm font-medium hover:bg-muted">Empezar</a>
        </nav>

        {/* hero */}
        <header className="grid lg:grid-cols-12 gap-10 items-center pt-10 pb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-[0.15em]">
              <span className="size-1.5 rounded-full bg-accent" /> Matemáticas para 6-8 años
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight">
              Crea un futuro brillante en matemáticas: <span className="text-gradient">MatFunny</span> transforma sumas y restas en aventuras.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Despierta la pasión de tu hijo por los números: cada respuesta correcta es una victoria, cada logro una celebración y aprender se siente como un verdadero juego.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton />
              <span className="text-sm text-muted-foreground">7 días de garantía · $6,99/mes</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>50.000+ niños</span><span>8 países</span><span>80% dominio en 4 semanas</span><span>COPPA</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="animate-floaty relative rounded-3xl glass p-5 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Nivel 4 · Frutas 🍌</span>
                <span className="text-accent font-semibold">🔥 10 racha</span>
              </div>
              <div className="mt-4 grid place-items-center rounded-2xl bg-surface/70 py-8 font-display text-4xl font-bold">
                <div className="text-2xl mb-2">🍎🍎🍎🍎🍎🍎🍎 + 🍎🍎🍎🍎🍎</div>
                <div>7 + 5 = <span className="text-accent">?</span></div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl glass py-3 text-center font-display text-xl">10</div>
                <div className="rounded-xl gradient-brand py-3 text-center font-display text-xl font-bold">12</div>
                <div className="rounded-xl glass py-3 text-center font-display text-xl">13</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span>🏆</span> 10 aciertos seguidos = logro desbloqueado
              </div>
            </div>
          </div>
        </header>

        {/* presentation */}
        <section className="py-10">
          <div className="rounded-3xl glass p-8 md:p-12 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">¿Recuerdas aquel momento en que dijiste: "¡Odio las matemáticas!"?</h2>
            <p className="mt-4 text-muted-foreground">Sabes que las matemáticas son importantes y abren puertas en la escuela y en la vida. Pero los cuadernos de ejercicios aburren, los problemas tradicionales frustran y la confianza se pierde.</p>
            <p className="mt-4 text-lg font-medium">La verdad es que a los niños no les disgustan las matemáticas. Les disgusta cómo se las enseñaban.</p>
            <p className="mt-4 text-muted-foreground">Con MatFunny tu hijo no está "haciendo tareas": desbloquea logros, gana puntos, bate récords personales y acumula rachas de victorias. Esto es lo que pasa cuando la psicología del juego se encuentra con la educación real.</p>
          </div>
        </section>

        {/* problem */}
        <section className="py-10">
          <SectionTitle eyebrow="Si no actuamos ahora" title="Esto es lo que podría suceder" sub="Los primeros años de primaria son cruciales. No puedes esperar a que le guste de forma natural." />
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {problems.map(([i, t, d]) => (
              <div key={t} className="rounded-2xl glass p-6">
                <div className="text-3xl">{i}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* mechanism */}
        <section id="como-funciona" className="py-10">
          <SectionTitle eyebrow="Mecanismo único" title="Así es como MatFunny es completamente diferente" sub="Lo que la neurociencia dice que funciona para los niños." />
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {mechanism.map(([i, t, d]) => (
              <div key={t} className="rounded-2xl glass p-6">
                <div className="text-3xl">{i}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* product + offer */}
        <section id="oferta" className="py-10 grid lg:grid-cols-2 gap-6 scroll-mt-6">
          <div className="rounded-3xl glass p-8">
            <h2 className="font-display text-2xl font-bold">Diseñado para el día a día</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sesiones de 5 a 15 minutos en iOS y Android. Elige el nivel y practica con:</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {["🍌 Frutas", "🐢 Animales", "⭐ Figuras geométricas", "🎒 Objetos cotidianos"].map((x) => (
                <div key={x} className="rounded-xl bg-muted px-4 py-3">{x}</div>
              ))}
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-accent">✓</span> Todas las operaciones y niveles (1 a 20, rango hasta 100)</li>
              <li className="flex gap-3"><span className="text-accent">✓</span> Panel para padres y maestros con progreso en tiempo real</li>
              <li className="flex gap-3"><span className="text-accent">✓</span> Sistema de logros y rachas</li>
              <li className="flex gap-3"><span className="text-accent">✓</span> Sincronización automática entre dispositivos</li>
              <li className="flex gap-3"><span className="text-accent">✓</span> Sin publicidad, sin compras internas, sin recopilación de datos</li>
            </ul>
          </div>
          <div className="rounded-3xl gradient-soft border border-accent/25 backdrop-blur-xl p-8 flex flex-col">
            <span className="text-xs uppercase tracking-[0.15em] text-accent">⏰ Precio especial por tiempo limitado</span>
            <div className="mt-4 flex items-end gap-3">
              <span className="font-display text-6xl font-bold">$6,99</span>
              <span className="text-sm text-muted-foreground mb-2">/mes</span>
              <span className="text-muted-foreground line-through mb-2">antes $14,99</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Acceso instantáneo. Empiezas a aprender en menos de 2 minutos. Sin sorpresas ocultas, sin compromisos. Cancela cuando quieras.</p>
            <div className="mt-6 rounded-2xl glass p-5">
              <p className="font-display font-semibold">🛡️ Garantía de 7 días</p>
              <p className="mt-1 text-sm text-muted-foreground">Si en 7 días no ves progreso real, confianza o disfrute, te devolvemos el 100% sin preguntas.</p>
            </div>
            <a href="#" className="mt-auto pt-6"><span className="block w-full rounded-full bg-secondary text-secondary-foreground font-display font-semibold py-4 text-center hover:scale-[1.01] transition-transform">{CTA}</span></a>
          </div>
        </section>

        {/* benefits */}
        <section id="beneficios" className="py-10">
          <SectionTitle eyebrow="Beneficios" title="Lo que tu hijo gana con MatFunny" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(([t, d]) => (
              <div key={t} className="rounded-2xl glass p-6">
                <span className="text-accent text-xl">✓</span>
                <h3 className="mt-3 font-display font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* testimonials */}
        <section id="opiniones" className="py-10">
          <SectionTitle eyebrow="Opiniones" title="Familias y docentes confían" />
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {testimonials.map(([img, n, r, q]) => (
              <figure key={n} className="rounded-2xl glass p-6">
                <blockquote className="text-foreground/85">"{q}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img src={img} alt={n} loading="lazy" width={40} height={40} className="size-10 rounded-full object-cover" />
                  <div><p className="text-sm font-semibold">{n}</p><p className="text-xs text-muted-foreground">{r}</p></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* authority */}
        <section className="py-10">
          <div className="rounded-3xl glass p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle eyebrow="Quién está detrás" title="Creado por expertos en educación infantil" />
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>• Psicólogos educativos especializados en gamificación</li>
                <li>• Maestros de primaria con más de 15 años en el aula</li>
                <li>• Diseñadores de apps educativas galardonadas</li>
                <li>• Desarrolladores que priorizan la privacidad infantil</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["50.000+", "niños probaron MatFunny"], ["8", "países"], ["80%", "dominio en menos de 4 semanas"], ["COPPA", "y RGPD, sin anuncios"]].map(([a, b]) => (
                <div key={a} className="rounded-2xl bg-muted p-5">
                  <p className="font-display text-3xl font-bold text-gradient">{a}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
        <section id="preguntas" className="py-10">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl glass p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display font-semibold">
                  {q}<span className="text-accent text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* final CTA */}
        <section className="py-14">
          <div className="rounded-3xl gradient-soft border border-border backdrop-blur-xl p-10 text-center">
            <p className="text-xs uppercase tracking-[0.15em] text-accent">⭐ Los niños que empiezan temprano tienen 3,5× más probabilidades de sobresalir</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">Tu hijo merece crecer con confianza en las matemáticas.</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Merece experimentar la victoria, desbloquear logros y sentir que es capaz. Dale 7 días a MatFunny: si no ves resultados, te devolvemos tu dinero.</p>
            <CtaButton variant="light" className="mt-6" />
            <p className="mt-3 text-sm text-muted-foreground">$6,99/mes · Garantía de 7 días · Sin compromiso</p>
          </div>
        </section>

        <footer className="py-8 text-center text-xs text-muted-foreground">MatFunny · Matemáticas que divierten · COPPA compliant</footer>
      </div>
    </div>
  );
}
