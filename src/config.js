// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "Fur Babies Pet Grooming",
  shortName: "Fur Babies Pet Grooming",

  // Used in the hero heading as: "{kicker} {highlight} {city}"
  heroKicker: "Grooming with",
  heroHighlight: "love",
  heroCity: "in Menifee",

  tagline: "Certified groomer · In-home pet sitting",

  description:
    "Hi, I’m Juju! I’m a certified pet groomer and in-home pet sitter in Menifee, CA. Every pup gets one-on-one attention in my private grooming studio — gentle handling for nervous babies, quality products, and a fresh, fluffy finish that smells amazing for days.",

  // E.164 format — used for tel: / sms: links.
  phone: "+16197723723",
  phoneDisplay: "(619) 772-3723",

  email: "", // leave blank to hide the "send by email" fallback link

  address: {
    line1: "29440 Canteen Cir",
    city: "Menifee",
    state: "CA",
    zip: "92596",
  },

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "29440 Canteen Cir, Menifee, CA 92596",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: "7:00 am", close: "6:00 pm" },
    { day: "Tuesday", open: "7:00 am", close: "6:00 pm" },
    { day: "Wednesday", open: "7:00 am", close: "6:00 pm" },
    { day: "Thursday", open: "7:00 am", close: "6:00 pm" },
    { day: "Friday", open: "7:00 am", close: "6:00 pm" },
    { day: "Saturday", open: "7:00 am", close: "6:00 pm" },
  ],
  hoursSummary: "Mon–Sat, 7am–6pm",

  // Drop-off windows offered in the booking form.
  dropOffTimes: ["7–9 am", "9–11 am", "11 am–1 pm", "1–3 pm", "3–5 pm"],

  // Toggle to show/hide "from $X" price labels next to each service.
  showPrices: false,

  // Leave `cat` empty to hide cats from the services list and booking form.
  services: {
    dog: [
      { name: "Full service grooming" },
      { name: "Grooming and styling" },
      { name: "Bathing and blow dry" },
      { name: "Nail trimming" },
      { name: "Ear cleaning" },
      { name: "Teeth brushing" },
      { name: "Anal gland expression" },
      { name: "Flea and tick treatment" },
      { name: "Color dye and nail polish" },
      { name: "Dog sitting" },
    ],
    cat: [],
  },

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Small", "under 20 lb"],
      ["Medium", "20–50 lb"],
      ["Large", "50–90 lb"],
      ["XL", "90+ lb"],
    ],
    cat: [],
  },

  // Shown in the hero.
  heroPhoto: {
    src: "/assets/salon.webp",
    alt: "Juju’s grooming studio with an electric grooming table, dryer and colorful leashes",
  },

  gallery: [
    { src: "/assets/goldendoodle.webp", alt: "Apricot Goldendoodle with a fresh teddy-bear cut and floral bandana" },
    { src: "/assets/shih-tzu.webp", alt: "Cream Shih Tzu mix freshly groomed, wearing a navy bandana" },
    { src: "/assets/yorkie.webp", alt: "Yorkie with a neat puppy cut sitting on the grooming table" },
  ],

  // Real Google reviews.
  reviews: [
    {
      name: "Tiana Robinson",
      when: "3 months ago",
      text: "Juju is an exceptional groomer who consistently provides us with a fantastic experience. We’ve become so impressed that we now bring both of our Goldendoodles to her for grooming. She takes the time to understand and cater to each of their unique needs with a passionate and loving approach. Juju genuinely cares for our fur babies and greets them with a warm hug and lots of affection. When they arrive looking wild and untamed, they leave looking and smelling absolutely amazing! We are incredibly grateful for her kind-hearted service and will never consider going anywhere else. The prices are also reasonable, making her a great choice for grooming. We highly recommend checking her out; you won’t be disappointed!",
    },
    {
      name: "Bianca Higuera",
      when: "2 months ago",
      text: "Juju is the sweetest groomer/ dog sitter to ever exist! Lady has sever anxiety, but Juju’s gentleness keeps Lady calm. We’re so excited to have met Juju. Juju gives the best customer service and hair cuts around. 10/10 I recommend her and her services!",
    },
    {
      name: "Alejandra Rodriguez",
      when: "2 months ago",
      text: "Juju is the best groomer in the area she is so sweet and does an amazing job with my dog, she’s always so patient and demonstrates her love for animals. Whenever I pick him up my fur baby he always comes back looking like a stuffed animal and smelling amazing. She is truly one of a kind and you can tell she’s passionate about her job.🤍",
    },
    {
      name: "Some Chick",
      when: "9 months ago",
      text: "This woman is an angel. I had been taking my baby somewhere else for a looong time, they injured him expressing his glands so I came to her. She treats my baby like he’s her own. Every time she does a beautiful job and he comes home happy. He loves her he used to be terrified of the groomer, not her ever. She gave him a free dye job and a toy and cookie for Christmas. He has been feeling a little mopey last time he went, she called and texted the next day just to check how he was feeling. She’s amazing. I will never voluntarily take him to anyone else again. And her prices are very fair. She uses really good products he gets a perfume spritz every time and smells lovely for like a week after but it’s still gentle and not overpowering at all. Truly can’t say enough about her 💜 He looks like a My Little Pony I can’t even stand it he’s so cute.",
    },
  ],

  // Palette pulled from the studio photos: bubblegum pink, grooming-mat teal,
  // deep plum ink. Applied at runtime as CSS custom properties (see
  // src/main.jsx). accentStrong/accentDeep/accentLabel are kept dark enough
  // to clear WCAG AA contrast against the light backgrounds they sit on.
  colors: {
    bg: "#FFF8F3",
    surface: "#FFFFFF",
    surfaceAlt: "#FDEDE8",
    ink: "#2A2140",
    inkSoft: "#4E4566",
    inkMute: "#6B6382",
    inkHover: "#41355E",
    border: "rgba(42,33,64,.1)",
    borderStrong: "rgba(42,33,64,.2)",
    accent: "#F59AB0",
    accentHover: "#F8B1C3",
    accentStrong: "#C0335F",
    accentDeep: "#A32A52",
    accentLabel: "#0B7A71",
    teal: "#3CBFB2",
    tealSoft: "#DDF4F1",
    highlight: "#FFE6EC",
    selection: "#FBD0DB",
    onDark: "#FFF8F3",
    onDarkSoft: "#D6CFE4",
    headerBg: "rgba(255,248,243,.94)",
    placeholder: "#F3E3DE",
    error: "#B3261E",
    openDot: "#2E9E6A",
    closedDot: "#D69AAA",
  },

  fonts: {
    display: "'Fredoka', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&family=Nunito:wght@400;600;700&display=swap",
  },
};
