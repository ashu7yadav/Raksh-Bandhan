/**
 * ==============================================================================
 * CONTENT.JS - SINGLE SOURCE OF TRUTH FOR PERSONALIZING THIS WEBSITE
 * ==============================================================================
 * 
 * You can easily customize this website by editing the text, quotes, and image
 * paths in this file!
 * 
 * 📸 HOW TO REPLACE PHOTOS:
 * 1. Place your own JPG/PNG images into the `public/images/` folder.
 * 2. Update the image filenames in this file (e.g., "/images/sister.jpg").
 * 
 * 🎵 HOW TO CHANGE SPOTIFY PLAYLIST:
 * 1. Copy the playlist ID from Spotify (e.g. "7DILEiQF93PlU7eKMI2FIt").
 * 2. Replace `spotifyPlaylistId` below!
 * ==============================================================================
 */

export const content = {
  // 🌟 Main Profile Information
  sisterName: "My Dearest Sister",
  sisterNickname: "Chhoti / Didi / Partner in Crime",
  brotherName: "Your Brother",

  // 🎬 Hero Section
  hero: {
    badge: "Festive Edition • Raksha Bandhan 2026",
    greeting: "Hey Sis… ❤️",
    subGreeting: "This Raksha Bandhan…",
    tagline: "I made something special just for you.",
    ctaText: "Start Our Journey ✨",
  },

  // 👑 Sister Introduction
  sisterIntro: {
    title: "The Person Behind So Many Memories ❤️",
    subtitle: "From sharing toys to sharing life's biggest secrets.",
    image: "/images/sister_main.jpg", // New Festive celebration photo with brother & sisters!
    quote: "She can annoy me in 5 seconds… and somehow make everything better in the next 5. 😂❤️",
    badges: [
      { text: "👑 Queen of Drama", color: "bg-rose-500/20 text-rose-300 border-rose-500/30" },
      { text: "🍫 Certified Food Stealer", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
      { text: "🛡️ Always My Protector", color: "bg-gold-500/20 text-gold-300 border-gold-500/30" },
    ]
  },

  // 📖 Memory Timeline (Our Little Story)
  timeline: [
    {
      chapter: "Chapter 01",
      year: "Childhood Days",
      title: "Our First Memories & Silly Fights",
      description: "From fighting over the smallest slice of cake and the TV remote, to crying when the other got scolded. We were partners in mischief from day one.",
      image: "/images/memory_2.jpg",
      quote: "Remember when we promised to keep each other's secrets from Mom and Dad?"
    },
    {
      chapter: "Chapter 02",
      year: "Growing Up",
      title: "Somehow The Fights Became Memories",
      description: "As the years flew by, our endless arguments turned into late-night gossip sessions, homework rescues, and understanding each other with just a single glance.",
      image: "/images/memory_4.jpg",
      quote: "Growing up with you was the greatest blessing in disguise."
    },
    {
      chapter: "Chapter 03",
      year: "The Crazy Years",
      title: "Too Many Laughs & Secret Stories 😂",
      description: "Too many inside jokes that make zero sense to anyone else. Too many unplanned trips, hilarious photoshoots, and pretending we have our lives together.",
      image: "/images/memory_5.jpg",
      quote: "We don't need words when our eye contact already says 'Did you see that?!'"
    },
    {
      chapter: "Chapter 04",
      year: "Today",
      title: "Different Paths, Same Bond",
      description: "Life gets busy, schedules clash, and we might be in different places, but one call from you still feels like we are right back in our living room.",
      image: "/images/memory_1.jpg",
      quote: "Distance means nothing when someone means everything."
    },
    {
      chapter: "Chapter 05",
      year: "Forever",
      title: "No Matter Where Life Takes Us",
      description: "No matter how old we get, no matter how many changes life brings, you will always be my sister, my greatest cheerleader, and my family for life.",
      image: "/images/memory_3.jpg",
      quote: "Side by side or miles apart, we are sisters & brothers connected by heart."
    }
  ],

  // 💌 Things I Don't Say Often (Interactive Reveal Cards)
  unsaidWords: [
    {
      id: 1,
      teaser: "About your presence in my life...",
      secret: "Thank you for always being there, even when I didn't know how to ask.",
      icon: "Heart"
    },
    {
      id: 2,
      teaser: "A truth I don't admit often...",
      secret: "I may not say it every day, but I am extraordinarily lucky to have you as my sister.",
      icon: "Sparkles"
    },
    {
      id: 3,
      teaser: "About our random moments...",
      secret: "You have a magic way of making the most ordinary, boring days feel special.",
      icon: "Smile"
    },
    {
      id: 4,
      teaser: "Whenever things get tough...",
      secret: "Even when we disagree or argue, I will always, unconditionally, have your back.",
      icon: "Shield"
    },
    {
      id: 5,
      teaser: "About the future...",
      secret: "You'll always be my favorite sibling, no matter how old, busy, or far apart we become.",
      icon: "Infinity"
    }
  ],

  // 😂 Fun Sister Section (Playful Quirks)
  funTraits: [
    {
      emoji: "❤️",
      title: "Always Caring",
      desc: "Pretends not to care, but asks 10 questions to make sure I ate and reached safely."
    },
    {
      emoji: "😂",
      title: "Professional Irritator",
      desc: "Has a PhD in annoying me at the exact moment I am trying to focus."
    },
    {
      emoji: "🍫",
      title: "Midnight Food Thief",
      desc: "Says 'I am not hungry', then eats 70% of whatever snack I ordered."
    },
    {
      emoji: "👀",
      title: "Knows All Secrets",
      desc: "Can read my face in 0.2 seconds and knows exactly what trouble I am in."
    },
    {
      emoji: "😎",
      title: "Chief Family Advisor",
      desc: "Somehow knows all the family updates before the news channel does."
    },
    {
      emoji: "👑",
      title: "Queen of the House",
      desc: "Wins 100% of arguments by simply declaring 'Because I said so!'"
    },
    {
      emoji: "🫶",
      title: "Always There",
      desc: "The one person I can always count on, through sunshine and storm."
    }
  ],

  // 🎵 Spotify Playlist Details
  spotify: {
    title: "Our Raksha Bandhan Soundtrack 🎵",
    subtitle: "Some memories sound so much sweeter with music.",
    playlistId: "7DILEiQF93PlU7eKMI2FIt",
    playlistUrl: "https://open.spotify.com/playlist/7DILEiQF93PlU7eKMI2FIt",
    caption: "Press play, turn up the volume, and let every song bring back our favorite smiles. ❤️"
  },

  // 📸 Memory Photo Gallery (Masonry with Lightbox)
  gallery: [
    {
      id: 1,
      image: "/images/sister_main.jpg",
      caption: "Vibrant Haldi festivities & sibling love in matching sunshine yellow 💛✨",
      tag: "Haldi Celebrations"
    },
    {
      id: 2,
      image: "/images/memory_3.jpg",
      caption: "The sacred Raksha Bandhan aarti — prayers, blessings, and forever bonds 🧵❤️",
      tag: "Rakhi Moment"
    },
    {
      id: 3,
      image: "/images/memory_1.jpg",
      caption: "Festive family celebrations & royal traditional vibes ✨",
      tag: "Family Festivities"
    },
    {
      id: 4,
      image: "/images/memory_6.jpg",
      caption: "Mountain sunshine, blooming roses, and beautiful scenery with you 🌸🏔️",
      tag: "Nature & Roses"
    },
    {
      id: 5,
      image: "/images/memory_7.jpg",
      caption: "Vibrant festivities, colorful canopies, and adorable family smiles ⛱️✨",
      tag: "Festive Joy"
    },
    {
      id: 6,
      image: "/images/memory_8.jpg",
      caption: "Golden traditions, blessings, and treasured family moments 💛",
      tag: "Golden Vibes"
    },
    {
      id: 7,
      image: "/images/memory_9.jpg",
      caption: "Grace, elegance, and timeless beauty 👑✨",
      tag: "Royal Grace"
    },
    {
      id: 8,
      image: "/images/memory_10.jpg",
      caption: "Sweet smiles, peaceful evenings, and golden terrace moments 💙",
      tag: "Sweet Moments"
    },
    {
      id: 9,
      image: "/images/memory_2.jpg",
      caption: "Terrace masti, crazy selfies, and endless laughter with you 😂❤️",
      tag: "Fun Times"
    },
    {
      id: 10,
      image: "/images/memory_4.jpg",
      caption: "The Sibling Squad — together through every lockdown and adventure 😎",
      tag: "Sibling Squad"
    },
    {
      id: 11,
      image: "/images/memory_5.jpg",
      caption: "Finding inner peace before starting the next sibling argument 🧘‍♀️😂",
      tag: "Peace Mode"
    }
  ],

  // 🧵 Interactive Rakhi Section
  rakhi: {
    title: "A Rakhi Is More Than Just A Thread…",
    quote: "It's a sacred thread woven with prayers, childhood laughter, silent promises, and a bond that time or distance can never break.",
    buttonText: "Tie The Rakhi 🧵❤️",
    successHeading: "Bond Locked Forever ❤️",
    successSub: "May your life be filled with endless joy, radiant health, and boundless happiness. Your brother is always with you!"
  },

  // 🎁 Final Surprise & Emotional Finale
  surprise: {
    title: "One Last Surprise… 🎁",
    subtitle: "A heartfelt promise packaged with love.",
    buttonText: "Open Your Gift ❤️",
    heading: "Happy Raksha Bandhan, Sis! ❤️",
    letter: [
      "No matter how much we grow up, no matter where our individual paths lead us in this world, you will always be my sister, my first best friend, and one of my most cherished people.",
      "Thank you for being my constant, for your warm hugs, your endless patience, and even your drama. Life wouldn't be half as vibrant without you in it.",
      "I promise to always stand by you, protect your smile, and cheer for you louder than anyone else in the room."
    ],
    finalTagline: "Love you always & forever. 🫶",
    credits: "Made with love, cherished memories, and code. 💻❤️",
    finalPhoto: "/images/memory_1.jpg",
    finalPhotoCaption: "Forever my sister. Forever my family. ❤️"
  }
};
