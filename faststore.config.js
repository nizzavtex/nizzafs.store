
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "nizzafs",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "COP",
      symbol: "$",
    },
    locale: "es-CO",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "COL",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://nizzafs.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/clothes",
    search: "/s?q=Brand%20name",
    pdp: "/short-azul/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/short-azul/p",
      collection: "/clothes",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/short-azul/p",
      collection: "/clothes",
      collection_filtered: "/clothes/?category-1=clothes&brand=Brand%20name&facets=category-1%2Cbrand%27",
      search: "/s?q=Brand%20name",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://nizzafs.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
