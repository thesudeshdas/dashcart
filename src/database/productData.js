const productData = [
  {
    id: 1,
    name: { text: 'Adidas Uniforia Football' },
    brand: { text: 'Adidas' },
    description: {
      text: `12 hosts, 24 national teams. A celebration of soccer and culture. A continent united. Made for training and kickabouts, this adidas Uniforia football shows off a bold design based on the one covering the official match ball. Its machine-stitched construction ensures it's always ready to roll. Reflective details helps you head in extra time when the sun goes down.`,
    },
    price: { original: 1999, discounted: 999, discount: 30 },
    images: [
      {
        url:
          'https://content.adidas.co.in/static/Product-FH7353/adidas_FH7353_1.jpg',
        altText: 'Football by Adidas',
        priority: 0,
      },
    ],
    categories: [{ type: 'football' }],
    rating: { stars: 3 },
    link: { url: 'https://shop.adidas.co.in/#!product/FH7353_unifotrn' },
    oneDayDeliveryOnly: false,
    inStock: false,
  },
  {
    id: 2,
    name: {
      text: 'Adidas Football Finale 21 20th Anniversary UCL League Ball',
    },
    brand: { text: 'Adidas' },
    description: {
      text: `Celebrate two decades of star-studded football with this adidas Finale 20 League Ball. It's decorated with panel designs from every UCL Finale ball since it made its debut in European football's most prestigious competition. The seamless surface and FIFA Quality stamp means it'll sparkle on the pitch and the training field.`,
    },
    price: { original: 2999, discounted: 2999, discount: 30 },
    images: [
      {
        url:
          'https://content.adidas.co.in/static/Product-GK3468/adidas_GK3468_1.jpg.zoom',
        altText: 'Football by Adidas',
        priority: 0,
      },
    ],
    categories: [{ type: 'football' }],
    rating: { stars: 4 },
    link: { url: 'https://shop.adidas.co.in/#!product/GK3468_finalelge' },
    oneDayDeliveryOnly: true,
    inStock: false,
  },
  {
    id: 3,
    name: {
      text:
        'Adidas Football Finale 21 20th Anniversary UCL textured Training Ball',
    },
    brand: { text: 'Adidas' },
    description: {
      text: `Celebrate two decades of star-studded football with this adidas Finale 21 20th Anniversary Training Ball. Its textured surface shows off an eye-catching design that calls back to the panel graphics on all 20 previous Finale balls. The hard-wearing machine-stitched construction and butyl bladder mean it's always ready to roll.`,
    },
    price: { original: 2499, discounted: 2499, discount: 30 },
    images: [
      {
        url:
          'https://content.adidas.co.in/static/Product-GK3476/adidas_GK3476_1.jpg',
        altText: 'Football by Adidas',
        priority: 0,
      },
    ],
    categories: [{ type: 'football' }],
    rating: { stars: 5 },
    link: { url: 'https://shop.adidas.co.in/#!product/GK3476_finaletrn' },
    oneDayDeliveryOnly: true,
    inStock: true,
  },
  {
    id: 4,
    name: {
      text: 'Adidas Football UCl Finale 20 League Ball',
    },
    brand: { text: 'Adidas' },
    description: {
      text: `The stars are the star on this adidas UCL Finale 20 League Ball. Its dynamic graphics are inspired by the design of the UEFA Champions League official match football. Made for training and matches, it's seamless and FIFA certified to ensure sparkling performances on the pitch.`,
    },
    price: { original: 2799, discounted: 1959, discount: 30 },
    images: [
      {
        url:
          'https://content.adidas.co.in/static/Product-FS0256/adidas_FS0256_1.jpg.zoom',
        altText: 'Football by Adidas',
        priority: 0,
      },
    ],
    categories: [{ type: 'football' }],
    rating: { stars: 3 },
    link: { url: 'https://shop.adidas.co.in/#!product/FS0256_fin20lge' },
    oneDayDeliveryOnly: false,
    inStock: true,
  },
  {
    id: 5,
    name: {
      text: 'Nike Premier League Pitch Football',
    },
    brand: { text: 'Nike' },
    description: {
      text: `Celebrate the top flight of English football with the Premier League Pitch Football. It has a smooth casing with high-contrast graphics making it easy to track across the pitch.`,
    },
    price: { original: 1495, discounted: 1495, discount: 30 },
    images: [
      {
        url:
          'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9942f178-df61-4550-b85e-657deee14a3c/premier-league-pitch-football-sJh7Fg.jpg',
        altText: 'Football by Nike',
        priority: 0,
      },
    ],
    rating: { stars: 2 },
    categories: [{ type: 'football' }],
    link: {
      url:
        'https://www.nike.com/in/t/premier-league-pitch-football-sJh7Fg/CQ7151-420',
    },
    oneDayDeliveryOnly: false,
    inStock: false,
  },
]

export default productData
