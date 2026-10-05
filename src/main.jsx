import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight,
  ArrowUpRight,
  BedDouble,
  Camera,
  Menu,
  MoveUpRight,
  Sparkles,
  Sun,
  Trees,
  Utensils,
  X,
} from 'lucide-react'
import './styles.css'

const photos = {
  main: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/0ff887d7-2fef-44d3-b701-00f728e24799.jpeg?im_w=1200',
  pool: 'https://a0.muscache.com/im/pictures/8cd66eda-b925-4b44-85d8-ea6d6ada1ed7.jpg?im_w=1200',
  bedroom: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/42c5ec20-baaf-4a36-aa4e-b82002661272.jpeg?im_w=1200',
  detail: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/388fbb17-915b-413e-a195-3e244fb0bc19.jpeg?im_w=1200',
  garden: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/5efbd52d-1bf0-4517-8b80-3f88ded3ec43.jpeg?im_w=1200',
}

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="Villa das Flores - início">
      <span className="brand-mark"><span>V</span><i>✳</i></span>
      <span className="brand-copy"><strong>villa das</strong><em>flores</em></span>
    </a>
  )
}

function IconButton({ children, label, className = '', onClick }) {
  return <button className={`icon-button ${className}`} aria-label={label} onClick={onClick}>{children}</button>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="top">
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <div className="nav-shell">
          <Mark />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#casa">A casa</a>
            <a href="#experiencia">Experiência</a>
            <a href="#localizacao">Trancoso</a>
          </nav>
          <div className="header-actions">
            <a className="instagram-link" href="https://www.instagram.com/villadasflores/" target="_blank" rel="noreferrer">
              <Camera size={16} strokeWidth={1.7} />
              <span>Instagram</span>
            </a>
            <a className="nav-cta" href="#reserva">Consultar datas <ArrowUpRight size={15} /></a>
            <IconButton label="Abrir menu" className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </IconButton>
          </div>
        </div>
        <nav className="mobile-nav" aria-label="Navegação mobile">
          <a href="#casa" onClick={closeMenu}>A casa <ArrowDownRight size={15} /></a>
          <a href="#experiencia" onClick={closeMenu}>Experiência <ArrowDownRight size={15} /></a>
          <a href="#localizacao" onClick={closeMenu}>Trancoso <ArrowDownRight size={15} /></a>
          <a href="#reserva" onClick={closeMenu}>Consultar datas <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content page-shell">
            <p className="eyebrow light-eyebrow"><span /> Hospedagem autoral em Trancoso</p>
            <h1>Onde o tempo<br /><i>floresce.</i></h1>
            <p className="hero-description">Uma casa tropical entre o verde e o azul de Trancoso. Feita para desacelerar, respirar e estar.</p>
            <a className="round-link light-link" href="#casa" aria-label="Conheça a Villa das Flores"><span>Conheça<br />a villa</span><ArrowDownRight size={23} strokeWidth={1.3} /></a>
          </div>
          <div className="hero-image-credit">Villa das Flores <span /> Trancoso, Bahia</div>
          <div className="hero-scroll"><span>Scroll para descobrir</span><div /></div>
          <div className="hero-index"><span>01</span><i /> <span>04</span></div>
          <div className="hero-booking-card">
            <div className="booking-card-head"><span>Uma pausa com endereço</span><span className="pulse-dot" /></div>
            <strong>Trancoso, <i>BA</i></strong>
            <div className="booking-card-foot"><span>Casa inteira · Bahia</span><a href="#reserva" aria-label="Consultar disponibilidade"><ArrowUpRight size={19} /></a></div>
          </div>
        </section>

        <div className="marquee-strip" aria-label="Villa das Flores em Trancoso">
          <div className="marquee-track"><span>slow living</span><i>✳</i><span>jardim tropical</span><i>✳</i><span>céu aberto</span><i>✳</i><span>trancoso, bahia</span><i>✳</i><span>slow living</span><i>✳</i><span>jardim tropical</span><i>✳</i></div>
        </div>

        <section className="intro-section page-shell" id="casa">
          <div className="intro-heading">
            <p className="eyebrow"><span /> A casa</p>
            <p className="section-number">01 <i>/</i> 03</p>
          </div>
          <div className="intro-grid">
            <div className="intro-copy">
              <h2>Um pedaço de<br /><i>Trancoso</i> só seu.</h2>
              <p>Na Villa das Flores, a arquitetura encontra a natureza de um jeito simples e cheio de alma. Uma casa para dividir bons dias, longas conversas e o silêncio gostoso de não ter hora.</p>
              <a className="text-link" href="#experiencia">Descubra a casa <ArrowUpRight size={16} /></a>
              <div className="intro-facts"><div><strong>01</strong><span>casa<br />inteira</span></div><div><strong>∞</strong><span>tempo<br />para você</span></div></div>
            </div>
            <div className="intro-photo-wrap">
              <img src={photos.pool} alt="Área externa da Villa das Flores com piscina" />
              <div className="photo-stamp"><span>TRANCOSO</span><strong>BA</strong><small>16°35' S<br />39°06' W</small></div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="experiencia">
          <div className="page-shell">
            <div className="feature-topline">
              <p className="eyebrow"><span /> A experiência</p>
              <p className="feature-note">Pequenos luxos,<br /><i>sem pressa.</i></p>
            </div>
            <div className="feature-grid">
              <article className="feature-card feature-image-card">
                <img src={photos.bedroom} alt="Quarto iluminado da Villa das Flores" />
                <div className="feature-overlay"><span>01</span><h3>Conforto<br /><i>natural</i></h3></div>
              </article>
              <article className="feature-card feature-text-card">
                <BedDouble size={26} strokeWidth={1.2} />
                <span className="card-index">02</span>
                <h3>Feita para<br /><i>ficar.</i></h3>
                <p>Quartos acolhedores, luz natural e tudo o que você precisa para sentir que chegou em casa.</p>
              </article>
              <article className="feature-card feature-tall-card">
                <img src={photos.garden} alt="Jardim tropical da Villa das Flores" />
                <div className="feature-overlay"><span>03</span><h3>Verde por<br /><i>todos os lados.</i></h3></div>
              </article>
            </div>
            <div className="amenities-row">
              <div><Sun size={19} strokeWidth={1.4} /><span>Sol o ano inteiro</span></div>
              <div><Trees size={19} strokeWidth={1.4} /><span>Jardim tropical</span></div>
              <div><Utensils size={19} strokeWidth={1.4} /><span>Cozinha equipada</span></div>
              <div><Sparkles size={19} strokeWidth={1.4} /><span>Casa inteira</span></div>
            </div>
          </div>
        </section>

        <section className="quote-section page-shell">
          <div className="quote-mark">“</div>
          <blockquote>Trancoso não é um lugar para conhecer.<br /><i>É um lugar para sentir.</i></blockquote>
          <div className="quote-rule" />
          <p>— sobre viver dias na Villa das Flores</p>
        </section>

        <section className="location-section" id="localizacao">
          <div className="location-image"><img src={photos.detail} alt="Detalhe da arquitetura tropical em Trancoso" /></div>
          <div className="location-copy">
            <p className="eyebrow light-eyebrow"><span /> A localização</p>
            <h2>Entre o quadrado<br />e o <i>mar.</i></h2>
            <p>A poucos minutos do Quadrado e das praias mais bonitas da região, a Villa fica no ponto perfeito entre a energia de Trancoso e a tranquilidade de um refúgio particular.</p>
            <a className="text-link light-text-link" href="https://maps.google.com/?q=Trancoso+Bahia" target="_blank" rel="noreferrer">Ver no mapa <MoveUpRight size={16} /></a>
          </div>
        </section>

        <section className="gallery-section page-shell">
          <div className="gallery-heading">
            <div><p className="eyebrow"><span /> Um olhar por dentro</p><h2>Casa com<br /><i>alma.</i></h2></div>
            <button className="text-link button-link" onClick={() => setGalleryOpen(true)}>Ver todas as fotos <ArrowUpRight size={16} /></button>
          </div>
          <div className="gallery-grid">
            <button className="gallery-photo gallery-photo-large" onClick={() => setGalleryOpen(true)}><img src={photos.main} alt="Sala da Villa das Flores" /></button>
            <button className="gallery-photo" onClick={() => setGalleryOpen(true)}><img src={photos.pool} alt="Piscina e jardim da Villa das Flores" /></button>
            <button className="gallery-photo" onClick={() => setGalleryOpen(true)}><img src={photos.garden} alt="Área verde da Villa das Flores" /></button>
          </div>
        </section>

        <section className="booking-section" id="reserva">
          <div className="booking-inner page-shell">
            <div className="booking-copy"><p className="eyebrow light-eyebrow"><span /> Sua próxima pausa</p><h2>Venha viver<br /><i>Trancoso.</i></h2></div>
            <div className="booking-action"><p>Pronto para trocar a rotina por dias leves, céu estrelado e pés na areia?</p><a className="booking-button" href="https://www.airbnb.com.br/rooms/34116394" target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowUpRight size={18} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div><Mark /><p className="footer-tagline">Uma casa para florescer<br />no seu próprio tempo.</p></div>
          <div className="footer-column"><span>Encontre a gente</span><a href="https://www.instagram.com/villadasflores/" target="_blank" rel="noreferrer">Instagram <MoveUpRight size={13} /></a><a href="https://www.airbnb.com.br/rooms/34116394" target="_blank" rel="noreferrer">Airbnb <MoveUpRight size={13} /></a></div>
          <div className="footer-column"><span>Fale com a gente</span><a href="https://www.instagram.com/villadasflores/" target="_blank" rel="noreferrer">Mensagem direta <MoveUpRight size={13} /></a><a href="https://www.airbnb.com.br/rooms/34116394" target="_blank" rel="noreferrer">Consultar no Airbnb <MoveUpRight size={13} /></a></div>
          <div className="footer-column footer-place"><span>Estamos aqui</span><p>Trancoso<br />Bahia, Brasil</p></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2024 Villa das Flores</span><span>Feito com calma na Bahia <i>✳</i></span></div>
      </footer>

      {galleryOpen && <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Galeria de fotos" onClick={() => setGalleryOpen(false)}>
        <IconButton label="Fechar galeria" className="modal-close" onClick={() => setGalleryOpen(false)}><X size={22} /></IconButton>
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <img src={photos.main} alt="Sala da Villa das Flores" />
          <div className="modal-side"><img src={photos.pool} alt="Piscina da Villa das Flores" /><img src={photos.bedroom} alt="Quarto da Villa das Flores" /></div>
        </div>
      </div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
