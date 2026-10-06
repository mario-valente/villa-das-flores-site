import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ProximityDiagram from './ProximityDiagram.jsx'
import {
  AIRBNB_URL, INSTAGRAM_URL, MAPS_EMBED, MAPS_LINK, WHATSAPP_URL,
  beaches, distances, facts, floors, notes, photos, services,
} from './content.js'
import './styles.css'

/* ---------- roteador mínimo ---------- */

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

function scrollToHash(hash) {
  if (!hash) { window.scrollTo({ top: 0 }); return }
  const el = document.getElementById(hash.slice(1))
  if (el) el.scrollIntoView({ block: 'start' })
}

function navigate(to) {
  const [pathname, hash = ''] = to.split('#')
  const target = pathname || '/'
  if (target !== window.location.pathname) {
    window.history.pushState({}, '', target + (hash ? `#${hash}` : ''))
    window.dispatchEvent(new PopStateEvent('popstate'))
    requestAnimationFrame(() => scrollToHash(hash ? `#${hash}` : ''))
  } else {
    if (hash) window.history.replaceState({}, '', `#${hash}`)
    scrollToHash(hash ? `#${hash}` : '')
  }
}

function Link({ to, children, onClick, ...rest }) {
  const handle = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
    onClick?.()
  }
  return <a href={to} onClick={handle} {...rest}>{children}</a>
}

/* ---------- peças compartilhadas ---------- */

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function WhatsAppButton({ children = 'Consultar datas pelo WhatsApp', className = '' }) {
  return (
    <a className={`button button-primary ${className}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  )
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Villa das Flores, página inicial">
      <span className="brand-name">Villa das Flores</span>
      <span className="brand-place">Praia dos Nativos, Trancoso</span>
    </Link>
  )
}

function Header({ path }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const onTrancoso = path === '/trancoso'
  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="shell header-row">
        <Brand />
        <nav className="site-nav" aria-label="Principal">
          <Link to="/#casa" onClick={close}>A casa</Link>
          <Link to="/#fotos" onClick={close}>Fotos</Link>
          <Link to="/trancoso" onClick={close} aria-current={onTrancoso ? 'page' : undefined}>Trancoso</Link>
          <Link to="/#reserva" onClick={close}>Reserva</Link>
        </nav>
        <div className="header-actions">
          <WhatsAppButton className="button-small header-whatsapp">WhatsApp</WhatsAppButton>
          <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
            <span className="menu-bars" aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Principal (celular)">
        <Link to="/#casa" onClick={close}>A casa</Link>
        <Link to="/#fotos" onClick={close}>Fotos</Link>
        <Link to="/trancoso" onClick={close}>Trancoso</Link>
        <Link to="/#reserva" onClick={close}>Reserva</Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">Villa das Flores</p>
          <p className="footer-address">Praia dos Nativos<br />Trancoso, Porto Seguro, Bahia</p>
        </div>
        <div className="footer-links">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Airbnb</a>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer">Google Maps</a>
        </div>
        <div className="footer-links">
          <Link to="/#casa">A casa</Link>
          <Link to="/#fotos">Fotos</Link>
          <Link to="/trancoso">Trancoso</Link>
          <Link to="/#reserva">Reserva</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Villa das Flores, {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
      <WhatsAppIcon size={26} />
    </a>
  )
}

/* ---------- página inicial ---------- */

function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  useEffect(() => {
    document.title = 'Villa das Flores | Praia dos Nativos, Trancoso'
  }, [])
  useEffect(() => {
    if (!galleryOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setGalleryOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [galleryOpen])

  return (
    <>
      <section className="hero">
        <img className="hero-photo" src={photos.pool} alt="Piscina e jardim da Villa das Flores" fetchPriority="high" />
        <div className="shell hero-copy">
          <h1>Uma casa de pé na areia na Praia dos Nativos.</h1>
          <p>Cinco suítes para até 11 hóspedes, piscina, área de lazer com fogão a lenha e um jardim cercado pelo mangue. A praia fica a 20 metros da porta.</p>
          <div className="hero-actions">
            <WhatsAppButton />
            <Link className="button button-ghost" to="/#casa">Ver a casa</Link>
          </div>
        </div>
      </section>

      <section className="facts shell" aria-label="Resumo da casa">
        <dl>
          {facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </section>

      <section className="house shell" id="casa">
        <div className="section-head">
          <h2>A casa</h2>
          <p>A Villa das Flores fica na Praia dos Nativos, em Trancoso, a 20 metros do mar. São dois pisos, um anexo de lazer e a área externa com piscina e jardim. Todas as suítes abrem para o avarandado.</p>
        </div>

        <div className="house-grid">
          <div className="house-plan">
            {floors.map((floor) => (
              <section key={floor.title} className="floor">
                <h3>{floor.title}</h3>
                <ul>{floor.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </section>
            ))}
          </div>
          <div className="house-photos">
            <img src={photos.varanda} alt="Avarandado com mesa de jantar" />
            <img src={photos.suite} alt="Suíte com cama de casal e mosquiteiro" />
            <img src={photos.suiteSolteiro} alt="Suíte com duas camas de solteiro" />
          </div>
        </div>
      </section>

      <section className="details">
        <div className="shell details-grid">
          <div>
            <h2>Incluído na diária</h2>
            <ul className="plain-list">{services.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h2>Bom saber</h2>
            <ul className="plain-list two-col">{notes.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="gallery shell" id="fotos">
        <div className="section-head section-head-row">
          <h2>Fotos</h2>
          <button className="text-button" onClick={() => setGalleryOpen(true)}>Ampliar</button>
        </div>
        <div className="gallery-grid">
          <button className="gallery-item large" onClick={() => setGalleryOpen(true)}><img src={photos.pool} alt="Piscina com espreguiçadeiras" /></button>
          <button className="gallery-item" onClick={() => setGalleryOpen(true)}><img src={photos.suite} alt="Suíte com mosquiteiro" /></button>
          <button className="gallery-item" onClick={() => setGalleryOpen(true)}><img src={photos.jardimEspreguicadeira} alt="Espreguiçadeira no jardim" /></button>
          <button className="gallery-item" onClick={() => setGalleryOpen(true)}><img src={photos.varanda} alt="Mesa de jantar no avarandado" /></button>
          <button className="gallery-item" onClick={() => setGalleryOpen(true)}><img src={photos.suiteSolteiro} alt="Suíte de solteiro" /></button>
        </div>
      </section>

      <section className="place shell" id="localizacao">
        <div className="section-head">
          <h2>Onde a casa está</h2>
          <p>Na Praia dos Nativos, abaixo do Quadrado e ao norte da foz do rio Trancoso. Da casa até a areia são 20 metros, por dentro do jardim.</p>
        </div>
        <ProximityDiagram compact />
        <Link className="button button-outline" to="/trancoso">Sobre Trancoso, mapa e distâncias</Link>
      </section>

      <section className="booking" id="reserva">
        <div className="shell booking-grid">
          <div>
            <h2>Datas e valores</h2>
            <p>Envie as datas e o número de hóspedes pelo WhatsApp. Respondemos com a disponibilidade e o valor da diária.</p>
          </div>
          <div className="booking-actions">
            <WhatsAppButton className="button-large" />
            <a className="button button-ghost" href={AIRBNB_URL} target="_blank" rel="noreferrer">Reservar pelo Airbnb</a>
          </div>
        </div>
      </section>

      {galleryOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fotos da casa" onClick={() => setGalleryOpen(false)}>
          <button className="lightbox-close" onClick={() => setGalleryOpen(false)}>Fechar</button>
          <div className="lightbox-grid" onClick={(e) => e.stopPropagation()}>
            {Object.entries(photos).map(([key, src]) => <img key={key} src={src} alt="" />)}
          </div>
        </div>
      )}
    </>
  )
}

/* ---------- página Trancoso ---------- */

function Trancoso() {
  useEffect(() => {
    document.title = 'Trancoso: praias, mapa e distâncias | Villa das Flores'
  }, [])
  return (
    <>
      <section className="page-intro shell">
        <h1>Trancoso</h1>
        <p>Vila do sul da Bahia, no município de Porto Seguro. O centro é o Quadrado: um gramado largo cercado por casas coloridas do século XVI, com a igreja de São João Batista no alto da falésia, de frente para o mar. Abaixo da falésia ficam as praias.</p>
      </section>

      <section className="shell beach-section">
        <h2>Praias</h2>
        <dl className="beaches">
          {beaches.map((b) => (
            <div key={b.name}><dt>{b.name}</dt><dd>{b.text}</dd></div>
          ))}
        </dl>
      </section>

      <section className="map-section" id="mapa">
        <div className="shell">
          <div className="section-head">
            <h2>Mapa</h2>
            <p>A casa fica na Praia dos Nativos. O ponto no mapa marca a praia; o endereço exato é enviado após a reserva.</p>
          </div>
          <div className="map-frame">
            <iframe
              title="Praia dos Nativos no Google Maps"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a className="text-link" href={MAPS_LINK} target="_blank" rel="noreferrer">Abrir no Google Maps</a>
        </div>
      </section>

      <section className="shell proximity-section">
        <div className="section-head">
          <h2>Da casa até o mar</h2>
          <p>Vinte metros separam a entrada da casa da areia. No caminho, o jardim e o mangue que cercam o terreno.</p>
        </div>
        <ProximityDiagram />
      </section>

      <section className="shell distance-section">
        <h2>Distâncias a partir da casa</h2>
        <table className="distances">
          <tbody>
            {distances.map((d) => (
              <tr key={d.place}><th scope="row">{d.place}</th><td>{d.value}</td><td>{d.how}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="muted">Valores aproximados.</p>
      </section>

      <section className="shell arrival-section">
        <div className="arrival-grid">
          <div>
            <h2>Como chegar</h2>
            <p>O aeroporto mais próximo é o de Porto Seguro. De lá, o caminho mais curto é a balsa para Arraial d'Ajuda, travessia de 10 minutos, e mais 25 km de estrada asfaltada até Trancoso. O trajeto leva cerca de uma hora. Por terra, pela BR-367 via Eunápolis, leva perto de duas horas e meia.</p>
          </div>
          <div>
            <h2>Quando ir</h2>
            <p>Quente o ano todo, entre 24 e 30 °C. A alta temporada vai de dezembro a março e no réveillon a vila fica cheia. De abril a junho e de agosto a novembro o movimento é menor e o mar costuma estar calmo.</p>
          </div>
        </div>
      </section>

      <section className="booking">
        <div className="shell booking-grid">
          <div>
            <h2>Datas e valores</h2>
            <p>Envie as datas e o número de hóspedes pelo WhatsApp. Respondemos com a disponibilidade e o valor da diária.</p>
          </div>
          <div className="booking-actions">
            <WhatsAppButton className="button-large" />
            <Link className="button button-ghost" to="/#casa">Ver a casa</Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- app ---------- */

function App() {
  const path = usePath()
  useEffect(() => {
    if (window.location.hash) requestAnimationFrame(() => scrollToHash(window.location.hash))
  }, [])
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header path={path} />
      <main id="conteudo">{path === '/trancoso' ? <Trancoso /> : <Home />}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
