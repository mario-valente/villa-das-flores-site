# Villa das Flores

Site da Villa das Flores, casa de pé na areia na Praia dos Nativos, Trancoso (BA). React + Vite, sem backend.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Estrutura

- `src/content.js`: textos, links (WhatsApp, Airbnb, Instagram, Maps), descrição da casa e distâncias. Edite aqui para mudar conteúdo.
- `src/main.jsx`: páginas `/` (casa) e `/trancoso` (vila, mapa, distâncias), roteador mínimo via History API.
- `src/ProximityDiagram.jsx`: corte esquemático casa, jardim/mangue, praia e mar com a cota de 20 m.
- `wrangler.jsonc`: config do Cloudflare (assets em `dist`, fallback de SPA para a rota `/trancoso`).

## Cloudflare (Workers Assets / Pages)

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

As fotos usam as URLs públicas do anúncio no Airbnb. Para controle total em produção, substitua as URLs em `src/content.js` por imagens próprias.
