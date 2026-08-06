export const categories = [
  {
    id: "immunity-boost",
    name: "Immunity Boost",
    description: "Fortify the body's natural defense systems and cellular vitality.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "digestion-detox",
    name: "Digestion & Detox",
    description: "Enhance metabolic fire (Agni) and gently sweep out deep intestinal waste (Ama).",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "stress-sleep",
    name: "Stress & Sleep",
    description: "Adaptogenic nerve tonics to calm mental chatter and restore deep sleep cycles.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "joint-skeletal",
    name: "Joint & Skeletal Care",
    description: "Anti-inflammatory botanical blends to lubricate joints and strengthen cartilage.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "skin-hair",
    name: "Skin & Hair Therapy",
    description: "Purify blood layers and calm allergies with cooling herbal elixirs.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "womens-wellness",
    name: "Women's Wellness",
    description: "Adaptogenic support for pelvic energy, cycles, and hormonal transitions.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cold-cough",
    name: "Respiratory Wellness",
    description: "Liquefy excess mucus congestion and soothe the bronchial lining.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800"
  }
];

export const products = [
  {
    id: "rk-amla-rasayan",
    name: "RK Amla Rasayan",
    category: "immunity-boost",
    form: "Herbal Jam",
    shortDescription: "A premium immunity-boosting restorative jam prepared from fresh Wild Amla pulp, honey, and organic ghee.",
    description: "RK Amla Rasayan is a classical Ayurvedic rejuvenator (Rasayana). Slow-cooked on copper vessels to protect active molecules, it delivers raw antioxidant vitamin complexes that support white blood cells, stimulate natural antibody responses, and reverse metabolic fatigue.",
    benefits: [
      "Boosts defensive immune responses against seasonal viruses.",
      "Acts as a powerful antioxidant that prevents cellular aging.",
      "Improves digestion and balances high stomach acidity.",
      "Promotes hair root vitality and clears skin complexion."
    ],
    ingredients: [
      "Amalaki (Phyllanthus emblica) - Concentrated natural vitamin C matrix",
      "Organic Raw Honey - Transports herbal elements deep into tissues",
      "Pure Cow Ghee - Nourishes brain cells and acts as organic vehicle (Anupana)",
      "Pippali (Long Pepper) - Boosts respiratory oxygen levels"
    ],
    suitableFor: "Frequently catching colds, physical fatigue, low stamina, and metabolic sluggishness.",
    usage: "Take 1 tablespoon every morning on empty stomach, followed by half a cup of warm water or organic milk.",
    dosage: "Adults: 10-15g daily. Children: 5g daily (under parental supervision).",
    storage: "Store in a cool, dry place. Keep jar lid tightly closed. Do not refrigerate.",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Does it contain refined sugar?",
        answer: "No, RK Amla Rasayan is sweetened naturally using organic raw honey and raw minimally processed rock candy (Mishri) as dictated by Vedic formulas."
      },
      {
        question: "Can it be taken in hot summer months?",
        answer: "Yes, Amla is inherently cooling in nature, making it highly suitable for summer Pitta relief."
      }
    ]
  },
  {
    id: "rk-haritaki-churna",
    name: "RK Haritaki Churna",
    category: "digestion-detox",
    form: "Powder",
    shortDescription: "Pure botanical powder prepared from premium Haritaki fruits to regulate intestinal Vata.",
    description: "RK Haritaki Churna is formulated from sun-dried, seedless fruits of Terminalia chebula. Revered as the 'Mother of Herbs', it pacifies Vata dosha in the colon, absorbing gases, easing stomach cramping, and supporting clean morning evacuation.",
    benefits: [
      "Alleviates dry, stubborn constipation naturally.",
      "Cleanses sticky toxins (Ama) from intestinal walls.",
      "Reduces bloating, gas, and abdominal heavy feelings.",
      "Aids liver function and nutrient absorption."
    ],
    ingredients: [
      "Haritaki (Terminalia chebula) Fruit Powder - 100% certified organic and finely milled"
    ],
    suitableFor: "Chronic constipation, gas build-up, bloating, and sluggish bowel motility.",
    usage: "Mix 1 teaspoon of churna in a glass of warm water. Drink at night, 30 minutes after your dinner.",
    dosage: "3-5 grams daily before sleep.",
    storage: "Store in a dry airtight container to prevent moisture absorption.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519735008984-df302de37025?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Will I become dependent on this churna?",
        answer: "No, Haritaki is non-habit-forming. It tones and cleanses the colon muscles, restoring their natural peristaltic rhythm."
      },
      {
        question: "Is it bitter to taste?",
        answer: "Yes, it possesses an astringent and bitter taste. You can mix it with a teaspoon of warm organic ghee to make ingestion easier."
      }
    ]
  },
  {
    id: "rk-ashwagandha-capsules",
    name: "RK Ashwagandha Capsules",
    category: "stress-sleep",
    form: "Capsules",
    shortDescription: "Standardized KSM-66 Ashwagandha capsules to lower stress hormones and support deep rest.",
    description: "RK Ashwagandha Capsules utilize certified organic KSM-66 extract with over 5% active withanolides. Acting as a prime adaptogen, it pacifies Vata in the nervous system, lower circulating cortisol levels, and calms racing thoughts for deep, natural sleep.",
    benefits: [
      "Reduces stress, nervous tension, and everyday anxiety.",
      "Restores physical energy, stamina, and muscular vigor.",
      "Calms the sympathetic nervous system to induce deep sleep.",
      "Supports cognitive attention and memory recall."
    ],
    ingredients: [
      "Standardized Organic Ashwagandha (Withania somnifera) Root Extract (500mg) - Rich in natural active withanolides"
    ],
    suitableFor: "Insomnia, stress, adrenal fatigue, racing thoughts, and muscular weakness.",
    usage: "Take 1 capsule twice daily after meals with warm milk or lukewarm water.",
    dosage: "1-2 capsules daily.",
    storage: "Store in a cool dry place, keeping bottle capped tight.",
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Does it cause daytime drowsiness?",
        answer: "No, Ashwagandha is an adaptogen. It balances energy, supporting morning alertness while calming the mind at night for sleep."
      },
      {
        question: "Is this suitable for women?",
        answer: "Yes, Ashwagandha is excellent for both men and women to manage stress and balance cortisol."
      }
    ]
  },
  {
    id: "rk-triphala-tablets",
    name: "RK Triphala Tablets",
    category: "digestion-detox",
    form: "Tablets",
    shortDescription: "Traditional formulation of three organic fruits to sweep colon waste and balance pH.",
    description: "RK Triphala Tablets are prepared from organic extracts of Amla, Haritaki, and Bibhitaki. By coordinating the Vata, Pitta, and Kapha energies across the entire digestive tract, this formula cleanses toxic deposits (Ama) without purging the body of essential nutrients.",
    benefits: [
      "Flushes digestive toxins, purifying stomach pathways.",
      "Supports natural, gentle bowel regulation.",
      "Pacifies hyper-acidity and balances gastrointestinal pH.",
      "Rich source of organic vitamin C and protective antioxidants."
    ],
    ingredients: [
      "Amalaki - Cools stomach heat (Pitta)",
      "Haritaki - Moves intestinal wind (Vata)",
      "Bibhitaki - Liquefies metabolic fluid blockages (Kapha)"
    ],
    suitableFor: "Acid reflux, occasional constipation, digestive acidity, and overall gut detoxification.",
    usage: "Take 1-2 tablets daily at night, 30 minutes after your dinner with warm water.",
    dosage: "1 to 2 tablets daily.",
    storage: "Keep in a cool, dry place away from direct sunlight.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519735008984-df302de37025?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Is this safe to use every night?",
        answer: "Yes, Triphala is a Rasayana (body tonic) and does not weaken the bowel muscles. It is safe for long-term daily health support."
      }
    ]
  },
  {
    id: "rk-joint-care-oil",
    name: "RK Joint Care Oil",
    category: "joint-skeletal",
    form: "Herbal Oil",
    shortDescription: "A premium joint massage oil cooked with 18 herbs in sesame oil to relieve stiffness.",
    description: "RK Joint Care Oil is prepared through classical Ksheera Pakva methods. We cook Ashwagandha, Bala, Gokshura, and Rasna in milk and cold-pressed Sesame oil. It penetrates deep into joint capsules, pacifying dry Vata, restoring lubrication, and easing severe stiffness.",
    benefits: [
      "Soothes severe joint inflammation, soreness, and swelling.",
      "Restores flexibility and skeletal movement.",
      "Lubricates synovial membranes inside dry joints.",
      "Eases chronic lower back pain and neck stiffness."
    ],
    ingredients: [
      "Ashwagandha - Relieves muscular tension",
      "Bala (Sida cordifolia) - Rebuilds ligament strength",
      "Rasna (Alpinia galanga) - Strong anti-inflammatory botanical",
      "Sesame Oil Base - Absorbs deep into the skin layers"
    ],
    suitableFor: "Joint stiffness, cracking knees, osteoarthritis, lower back pain, and muscle soreness.",
    usage: "Warm a small amount of oil. Massage gently onto affected joints in circular motions for 10-15 minutes. Apply a warm compress afterwards.",
    dosage: "Apply 5-10 ml, twice daily.",
    storage: "Store bottle upright in a warm place. Keep away from water contamination.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519735008984-df302de37025?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Can I use this for sports injuries?",
        answer: "Yes, it helps soothe muscle strains and ligament pulls by improving circulation and healing local tissues."
      }
    ]
  },
  {
    id: "rk-neem-tulsi-skin-care",
    name: "RK Neem Tulsi Skin Care",
    category: "skin-hair",
    form: "Herbal Cream",
    shortDescription: "A soothing herbal cream enriched with pure Neem, Tulsi, and Aloe extracts for skin allergies.",
    description: "RK Neem Tulsi Skin Care cream is an antibacterial barrier cream. Blended with cold-pressed Neem oil, fresh Tulsi extracts, and cooling Aloe Vera gel, it purifies local tissue, pacifies flaming Pitta allergies, and controls bacterial breakouts.",
    benefits: [
      "Relieves skin allergy itching, redness, and dry patches.",
      "Reduces hormonal acne and blackheads.",
      "Soothes sunburns, minor insect bites, and eczema scales.",
      "Deeply hydrates skin layers without blocking pores."
    ],
    ingredients: [
      "Neem (Azadirachta indica) - Elite natural purifier and antibacterial",
      "Tulsi (Holy Basil) - Antioxidant shield that cleanses toxins",
      "Aloe Vera Gel - Cools and hydrates inflamed epidermal tissue"
    ],
    suitableFor: "Skin allergies, hormonal acne, redness, itching, and dry eczema patches.",
    usage: "Cleanse the skin with a mild herbal soap. Apply a thin layer of cream over the affected areas. Massage gently until absorbed.",
    dosage: "Apply twice daily, morning and evening.",
    storage: "Store in a cool dry place, keeping container cap closed tight.",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Is it suitable for oily skin?",
        answer: "Yes, Aloe Vera gel base absorbs cleanly without leaving greasy residues, helping regulate sebum production."
      }
    ]
  },
  {
    id: "rk-shatavari-wellness",
    name: "RK Shatavari Wellness",
    category: "womens-wellness",
    form: "Powder",
    shortDescription: "Pure Shatavari root powder to balance hormones and nurture female reproductive pathways.",
    description: "RK Shatavari Wellness is a premium single-herb powder formulated from the roots of Asparagus racemosus. Highly nourishing, it acts as a primary phytoestrogenic tonic that balances hormones, regularizes menstrual cycles, and cools menopausal symptoms.",
    benefits: [
      "Supports natural female hormonal balance.",
      "Relieves painful cramping, mood swings, and PMS symptoms.",
      "Promotes lactation in nursing mothers.",
      "Cools hot flashes and dryness during menopausal years."
    ],
    ingredients: [
      "Shatavari (Asparagus racemosus) Root Powder - 100% organic, standardized for saponin contents"
    ],
    suitableFor: "Irregular cycles, menstrual cramps, hormonal imbalances, hot flashes, and lactation support.",
    usage: "Take 1 teaspoon of Shatavari powder with a glass of warm milk (or warm water) after meals.",
    dosage: "3-5 grams twice daily.",
    storage: "Store in dry airtight containers, keeping away from child reach.",
    images: [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Can unmarried girls take this powder?",
        answer: "Yes, Shatavari is a general tissue tonic for the female system, highly recommended to balance irregular periods and cramps."
      }
    ]
  },
  {
    id: "rk-cold-cough-syrup",
    name: "RK Cold & Cough Syrup",
    category: "cold-cough",
    form: "Syrup",
    shortDescription: "A soothing respiratory syrup cooked with Tulsi, Ginger, and Yashtimadhu to clear chest congestion.",
    description: "RK Cold & Cough Syrup is an all-natural bronchodilator and expectorant. Cooked slowly with Vasaka, Yashtimadhu, Tulsi, and Ginger in a honey base, it quickly liquefies sticky Kapha phlegm, soothes throat itchiness, and fights minor fever chills.",
    benefits: [
      "Soothes dry, spasmodic, and productive coughs.",
      "Liquefies thick mucus congestion in the lungs.",
      "Eases throat irritation, dryness, and scratchy feelings.",
      "Supports recovery from mild fever chills and sinus blocks."
    ],
    ingredients: [
      "Vasaka (Adhatoda vasica) - Powerful natural bronchodilator",
      "Yashtimadhu (Licorice) - Soothes scratchy mucous membranes",
      "Tulsi - Antimicrobial respiratory protector",
      "Ginger - Warms chest energy and helps digest cold mucus"
    ],
    suitableFor: "Dry cough, sore throat, chest congestion, sinus blockages, and fever recovery.",
    usage: "Take 2 teaspoons of syrup thrice daily. Avoid drinking cold water for 30 minutes after intake.",
    dosage: "Adults: 10ml, thrice daily. Children: 5ml, twice daily.",
    storage: "Store in a cool dry place, keeping bottle capped tight.",
    images: [
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800"
    ],
    faqs: [
      {
        question: "Will it cause drowsiness like modern cough syrups?",
        answer: "No, it contains zero alcohol or sedating antihistamines, making it completely safe and non-drowsy."
      }
    ]
  }
];
