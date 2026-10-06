import { MAPS_LINK } from './content.js'

// Corte esquemático casa -> jardim/mangue -> areia -> mar, com a cota de 20 m.
export default function ProximityDiagram({ compact = false }) {
  return (
    <figure className={`proximity ${compact ? 'proximity-compact' : ''}`}>
      <svg viewBox="0 0 920 300" role="img" aria-labelledby="prox-title prox-desc">
        <title id="prox-title">Distância da Villa das Flores até a Praia dos Nativos</title>
        <desc id="prox-desc">Corte esquemático mostrando a casa, o jardim com mangue, a faixa de areia e o mar. A casa fica a 20 metros da praia.</desc>

        {/* chão */}
        <path d="M0 220 H560" className="d-ground" />

        {/* casa: dois pisos, telhado, varanda */}
        <g className="d-house">
          <path d="M70 220 V120 L165 62 L260 120 V220 Z" />
          <path d="M58 122 L165 56 L272 122" />
          <path d="M70 160 H260" />
          <path d="M100 220 V182 H132 V220" />
          <path d="M170 176 H236 V202 H170 Z" />
          <path d="M100 128 H132 V150 H100 Z M170 128 H236 V150 H170 Z" />
          <path d="M20 220 V190 H70" />
          <path d="M38 190 V220 M54 190 V220" />
          <path d="M286 220 V190 H260" />
          {/* piscina */}
          <path d="M300 220 H380 V206 H300 Z" className="d-water" />
          <path d="M306 212 Q316 208 326 212 T346 212 T366 212 T378 212" className="d-wave" />
        </g>

        {/* mangue e jardim */}
        <g className="d-mangrove">
          <path d="M410 220 Q404 186 424 176 Q450 168 460 194 Q474 180 484 200 Q488 214 480 220 Z" />
          <path d="M424 220 L422 202 M442 220 L440 190 M462 220 L464 202" />
          <path d="M494 220 Q490 196 506 190 Q524 186 530 204 Q540 196 544 210 Q546 218 540 220 Z" />
          <path d="M506 220 L504 208 M520 220 L520 200 M532 220 L534 208" />
          <path d="M392 220 Q394 206 402 202 M552 220 Q554 206 562 204" />
        </g>

        {/* areia */}
        <path d="M560 220 Q640 226 720 236 Q780 243 820 240 V300 H560 Z" className="d-sand" />
        <path d="M560 220 Q640 226 720 236 Q780 243 820 240" className="d-ground" />

        {/* mar */}
        <path d="M790 242 Q830 238 870 242 T920 244 V300 H790 Z" className="d-water" />
        <path d="M800 262 Q815 256 830 262 T860 262 T890 262 T920 262" className="d-wave" />
        <path d="M815 280 Q830 274 845 280 T875 280 T905 280" className="d-wave" />

        {/* cota de 20 m */}
        <g className="d-dim">
          <path d="M286 40 V190 M790 40 V242" />
          <path d="M286 52 H790" />
          <path d="M286 52 l10 -5 v10 Z M790 52 l-10 -5 v10 Z" className="d-arrow" />
          <text x="538" y="42" textAnchor="middle">20 m</text>
        </g>

        {/* legendas */}
        <g className="d-label">
          <text x="165" y="262">Villa das Flores</text>
          <text x="476" y="262">Jardim e mangue</text>
          <text x="680" y="272">Praia dos Nativos</text>
          <text x="900" y="296" textAnchor="end">Mar</text>
        </g>
      </svg>
      <figcaption>
        <span>Corte esquemático, sem escala. A casa é cercada pelo mangue e a praia fica a 20 metros da entrada.</span>
        <a href={MAPS_LINK} target="_blank" rel="noreferrer">Abrir no Google Maps</a>
      </figcaption>
    </figure>
  )
}
