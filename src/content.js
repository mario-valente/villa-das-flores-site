export const WHATSAPP_URL = 'https://wa.me/message/L44RNCTKJZSHA1'
export const AIRBNB_URL = 'https://www.airbnb.com.br/rooms/34116394'
export const INSTAGRAM_URL = 'https://www.instagram.com/villadasflores/'
export const MAPS_QUERY = 'Praia dos Nativos, Trancoso, Porto Seguro - BA'
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`

export const photos = {
  pool: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/0ff887d7-2fef-44d3-b701-00f728e24799.jpeg?im_w=1200',
  suite: 'https://a0.muscache.com/im/pictures/8cd66eda-b925-4b44-85d8-ea6d6ada1ed7.jpg?im_w=1200',
  varanda: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/42c5ec20-baaf-4a36-aa4e-b82002661272.jpeg?im_w=1200',
  jardimEspreguicadeira: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/388fbb17-915b-413e-a195-3e244fb0bc19.jpeg?im_w=1200',
  suiteSolteiro: 'https://a0.muscache.com/im/pictures/miso/Hosting-34116394/original/5efbd52d-1bf0-4517-8b80-3f88ded3ec43.jpeg?im_w=1200',
}

export const facts = [
  { value: '20 m', label: 'da praia' },
  { value: '5', label: 'suítes' },
  { value: '11', label: 'hóspedes' },
  { value: '6', label: 'banheiros' },
]

export const floors = [
  {
    title: 'Piso inferior',
    items: [
      'Duas suítes',
      'Sala e cozinha integradas',
      'Avarandado com mesa de jantar e área de estar com cadeiras Adirondack brancas',
    ],
  },
  {
    title: 'Piso superior',
    items: [
      'Três suítes: duas com cama de casal e uma com duas camas de solteiro',
    ],
  },
  {
    title: 'Anexo',
    items: [
      'Área de lazer com churrasqueira, fogão a lenha e pia',
      'Mesa para refeições e balcão com bancos altos',
      'Banheiro',
    ],
  },
  {
    title: 'Área externa',
    items: [
      'Piscina com espreguiçadeiras, mesa com cadeiras e guarda-sol',
      'Jardim com folhagens e flores da região, cercado pelo mangue',
      'Bangalô de massagem',
      'Chuveiro externo',
      'Abrigo para três carros',
    ],
  },
]

export const services = [
  'Camareira',
  'Serviços gerais: piscina, jardim e manutenção',
  'Indicação de cozinheira e auxiliar de cozinha, contratadas diretamente com as profissionais',
]

export const notes = [
  'Acomoda até 11 hóspedes',
  'Roupas de cama, mesa e banho',
  'Suítes com porta-janela para o avarandado e ar-condicionado split',
  'Camas com mosquiteiro',
  'Wi-Fi e TV na sala',
  'Louças e eletrodomésticos',
  'Secador de cabelo e ferro de passar',
  'Voltagem 220 V',
]

export const distances = [
  { place: 'Praia dos Nativos', value: '20 m', how: 'a pé' },
  { place: 'Quadrado de Trancoso', value: '2 km', how: 'a pé pela praia ou de carro' },
  { place: 'Praia dos Coqueiros', value: '1 km', how: 'a pé, ao sul do rio' },
  { place: 'Arraial d\u2019Ajuda', value: '25 km', how: 'de carro' },
  { place: 'Praia do Espelho', value: '25 km', how: 'de carro, estrada de terra' },
  { place: 'Aeroporto de Porto Seguro', value: '40 km', how: 'cerca de 1h, com balsa' },
]

export const beaches = [
  { name: 'Nativos', text: 'A praia da casa. Fica abaixo do Quadrado, ao norte da foz do rio Trancoso. Areia larga, mar aberto e poucas barracas.' },
  { name: 'Coqueiros', text: 'Ao sul do rio, com barracas e restaurantes. É a praia mais movimentada da vila.' },
  { name: 'Rio Verde e Itapororoca', text: 'Ao norte, mais isoladas. Piscinas naturais na maré baixa e coqueirais.' },
  { name: 'Espelho', text: 'Ao sul, a 25 km por estrada de terra. Falésias, água clara e piscinas naturais.' },
]
