export const solutionCategories = [
  {
    id: "digestive-health",
    name: "Digestive Health",
    description: "Nurturing stomach balance, detox pathways, and gut motility."
  },
  {
    id: "mind-sleep",
    name: "Mind & Sleep Wellness",
    description: "Nourishing nervine energy to reduce stress and induce restorative rest."
  },
  {
    id: "bone-joints",
    name: "Bone & Joint Care",
    description: "Soothe skeletal soreness, lower back strain, and knee stiffness."
  },
  {
    id: "skin-care",
    name: "Skin Allergy Solutions",
    description: "Calm epidermal redness, purifies blood layers, and stops itchiness."
  },
  {
    id: "vitality-lungs",
    name: "Vitality & Respiratory Support",
    description: "Rebuild cellular resilience, build Ojas (immunity), and clear lung channels."
  }
];

export const healthSolutions = [
  {
    id: "headache",
    name: "Headache & Cranial Tension",
    category: "mind-sleep",
    icon: "Brain",
    shortDescription: "Tension-type headaches, migraine pressure, and stress-induced temple throbbing.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Vataja Shirashoola: Nervous stress, structural neck strain, or sleeping late drying out cranial pathways.",
      "Pittaja Shirashoola: Internal body heat and acid build-up triggering vascular head pressure."
    ],
    recommendedMedicines: ["rk-ashwagandha-capsules"],
    benefits: [
      "Calms hyper-active sympathetic cranial nerves.",
      "Reduces chronic physical stress that initiates migraine cycles.",
      "Improves relaxation for a calm morning sensory refresh."
    ],
    ingredients: [
      "KSM-66 Ashwagandha - High-potency adaptogenic root extract that lowers cortisol"
    ],
    howToUse: "Take 1 RK Ashwagandha Capsule with warm milk at night after dinner. Gently apply warm compress to temples.",
    lifestyleTips: [
      "Keep screen devices away 1 hour before sleep.",
      "Drink warm cardamom tea during acute pressure spikes.",
      "Maintain a fixed morning wakeup schedule."
    ],
    faqs: [
      {
        question: "How long does it take to relieve mental pressure?",
        answer: "Ashwagandha works adaptogenically. Chronic tension begins to subside within 1–2 weeks of daily evening usage."
      }
    ]
  },
  {
    id: "acidity",
    name: "Acidity & Heartburn",
    category: "digestive-health",
    icon: "Flame",
    shortDescription: "Burning chest pain, acid reflux, sour burps, and stomach heat.",
    image: "https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Amla Pitta: High levels of liquid heat (Pitta) rising from stomach fermentations.",
      "Weak Agni: Sluggish stomach lining unable to process heavy fatty ingredients."
    ],
    recommendedMedicines: ["rk-triphala-tablets"],
    benefits: [
      "Cools mucosal lining tissue, balancing gastrointestinal pH.",
      "Eliminates sour, heated regurgitations.",
      "Gently regulates intestinal digestion layers."
    ],
    ingredients: [
      "Amalaki Fruit Extract - The premier cooling botanical for hyper-active Pitta"
    ],
    howToUse: "Take 1 RK Triphala Tablet twice daily after meals with lukewarm water.",
    lifestyleTips: [
      "Avoid eating sour citrus fruits or drinking alcohol on empty stomach.",
      "Do not lay flat immediately after lunch; wait at least 30 minutes.",
      "Sip warm fennel-infused water throughout the afternoon."
    ],
    faqs: [
      {
        question: "Will it interfere with my standard antacids?",
        answer: "No, Triphala operates naturally to strengthen stomach lining. You can safely support your system with it alongside dietary changes."
      }
    ]
  },
  {
    id: "constipation",
    name: "Constipation & Bloating",
    category: "digestive-health",
    icon: "RefreshCw",
    shortDescription: "Stubborn dry bowel evacuation blocks, heavy stomach bloating, and flatulence.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Apana Vata blocks: The downward energy governing excretion becomes dry and blocked.",
      "Intestinal Rukshata: Insufficient fat intake drying out colonic muscle tissue."
    ],
    recommendedMedicines: ["rk-haritaki-churna", "rk-triphala-tablets"],
    benefits: [
      "Adds structural hydration to dry colonic deposits.",
      "Regulates natural peristaltic muscle squeeze.",
      "Safely detoxifies digestive walls from heavy Ama (toxic waste)."
    ],
    ingredients: [
      "Haritaki Fruit Churna - Elite classical herb to move bowel wind downward",
      "Amalaki & Bibhitaki - Gentle colon wall cleansers"
    ],
    howToUse: "Dissolve 1 teaspoon of RK Haritaki Churna in warm water and drink before bed. Alternatively, swallow 2 RK Triphala Tablets with warm water.",
    lifestyleTips: [
      "Add 1-2 teaspoons of pure cow ghee to your warm lunch vegetables.",
      "Perform simple abdominal twists (spinal twists) in the morning.",
      "Avoid dry, cold, crispy snacks like dry chips."
    ],
    faqs: [
      {
        question: "Is this habit-forming?",
        answer: "No, our formulas contain no harsh chemical laxatives or stimulants. They restore muscle tone without inducing dependency."
      }
    ]
  },
  {
    id: "joint-pain",
    name: "Joint & Back Pain",
    category: "bone-joints",
    icon: "ShieldAlert",
    shortDescription: "Joint stiffness, knee crackling, lower back strain, and morning muscle stiffness.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Sandhigata Vata: Dry Vata dosha depleting joint synovial fluid, causing friction.",
      "Ama Vata: Internal waste deposits calcifying inside joints, causing swollen soreness."
    ],
    recommendedMedicines: ["rk-joint-care-oil", "rk-ashwagandha-capsules"],
    benefits: [
      "Lubricates inner skeletal membranes and bone joints.",
      "Pacifies dry muscle inflammation, relieving soreness.",
      "Strengthens ligaments, reducing knee crepitus (crackling)."
    ],
    ingredients: [
      "Bala Root extract cooked in Sesame Oil - Classical cell dynamic reconstructor",
      "KSM-66 Ashwagandha - Promotes muscular flexibility and strain repair"
    ],
    howToUse: "Gently massage warm RK Joint Care Oil onto affected joints for 10 minutes. Follow with a warm bath. Take 1 Ashwagandha Capsule daily after dinner.",
    lifestyleTips: [
      "Avoid eating dry raw salads or nightshade vegetables (potatoes, tomatoes).",
      "Engage in mild, non-impact stretches daily.",
      "Protect sore joints from cold air drafts or air conditioning vents."
    ],
    faqs: [
      {
        question: "Does it help with lower back sciatica pain?",
        answer: "Yes, the deep-absorption sesame base helps calm hyper-sensitive sciatic nerve pathways when massaged daily."
      }
    ]
  },
  {
    id: "skin-allergy",
    name: "Skin Allergies & Eczema",
    category: "skin-care",
    icon: "Smile",
    shortDescription: "Itchy red rashes, localized skin allergies, dry eczema scales, and recurring acne.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Rakta Dushti: Accumulated digestive toxins leaking into blood layers, seeking exit through skin.",
      "Pitta Twacha: Excess heat drying out epidermal oils, creating itchy scales."
    ],
    recommendedMedicines: ["rk-neem-tulsi-skin-care", "rk-triphala-tablets"],
    benefits: [
      "Quickly relieves intense itching, redness, and swelling.",
      "Destroys local skin bacteria, reducing hormonal acne.",
      "Purifies internal blood levels, healing skin from within."
    ],
    ingredients: [
      "Neem & Tulsi extracts - Active natural antimicrobial skin shields",
      "Amalaki - Blood purifying antioxidant powerhouse"
    ],
    howToUse: "Apply a thin layer of RK Neem Tulsi Skin Care Cream to clean skin twice daily. Take 1 RK Triphala Tablet in the morning for internal detox support.",
    lifestyleTips: [
      "Avoid synthetic cosmetics or heavily fragranced body wash.",
      "Limit spicy, salty, and deep-fried foods.",
      "Stay hydrated with lukewarm water stored in copper bottles."
    ],
    faqs: [
      {
        question: "Is it safe for children's dry skin rashes?",
        answer: "Yes, our cream is formulated with pure Aloe Vera, Neem, and Tulsi, making it extremely gentle and safe for children."
      }
    ]
  },
  {
    id: "stress",
    name: "Stress & Poor Sleep",
    category: "mind-sleep",
    icon: "Moon",
    shortDescription: "Racing mind, insomnia, chronic physical fatigue, and elevated anxiety levels.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Vataja Anidra: Hyperactive air element in brain pathways, scattering sleep indicators.",
      "Prana Vayu disturbance: Excessive screen stimuli exhausting nervous tissue."
    ],
    recommendedMedicines: ["rk-ashwagandha-capsules"],
    benefits: [
      "Lowers chronic stress cortisol hormones.",
      "Induces sound, deep, uninterrupted sleep cycles.",
      "Re-energizes cellular energy during day hours."
    ],
    ingredients: [
      "Standardized Ashwagandha Root Extract - Premier nerve balancer and vitality booster"
    ],
    howToUse: "Take 1-2 capsules of RK Ashwagandha Capsules at night after dinner with a cup of hot organic milk.",
    lifestyleTips: [
      "Unplug from all internet devices 1 hour before sleeping.",
      "Perform 10 minutes of deep abdominal breathing (Nadi Shodhana) before bed.",
      "Keep your bedroom temperature cool and dark."
    ],
    faqs: [
      {
        question: "Is it a sleeping pill?",
        answer: "No. It is an adaptogen. It does not force sedation; instead, it calms the nervous system so your body falls asleep naturally."
      }
    ]
  },
  {
    id: "immunity-boost",
    name: "Low Immunity & Fatigue",
    category: "vitality-lungs",
    icon: "Shield",
    shortDescription: "Catching recurrent seasonal colds, waking up tired, and physical weakness.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Ojas Kshaya: Depletion of the body's protective life-essence (Ojas).",
      "Ama blockage: Sticky metabolic wastes slowing cellular renewal."
    ],
    recommendedMedicines: ["rk-amla-rasayan", "rk-ashwagandha-capsules"],
    benefits: [
      "Improves daily defense parameters against environmental viruses.",
      "Replenishes physical strength and muscle integrity.",
      "Promotes structural tissue rejuvenation (Rasayana effect)."
    ],
    ingredients: [
      "Wild Amla Jam - Rich organic ascorbic acid source",
      "Ashwagandha capsules - Stamina booster and cellular restorer"
    ],
    howToUse: "Eat 1 tablespoon of RK Amla Rasayan in the morning. Take 1 RK Ashwagandha Capsule after dinner with warm water.",
    lifestyleTips: [
      "Spend 15 minutes in morning sunlight.",
      "Consume seasonal, locally grown fresh fruits daily.",
      "Avoid eating heavy, oily food after sunset."
    ],
    faqs: [
      {
        question: "How long should I consume Amla Rasayan?",
        answer: "It can be eaten daily as a premium health supplement to maintain strong Ojas (vitality) year-round."
      }
    ]
  },
  {
    id: "womens-wellness",
    name: "Women's Hormonal Balance",
    category: "mind-sleep",
    icon: "Heart",
    shortDescription: "Irregular cycles, menstrual cramps, hot flashes, or menopausal changes.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Artava Dusti: Imbalance of Vata and Pitta in the reproductive tissue reserves.",
      "Depleted Rasa Dhatu: Poor nourishment to systemic body fluids, causing cramps."
    ],
    recommendedMedicines: ["rk-shatavari-wellness"],
    benefits: [
      "Supports balanced estrogen and regularizes menstrual periods.",
      "Soothes pelvic cramping, pain, and lower back aches.",
      "Eases hot flashes and vaginal dryness in menopausal transition."
    ],
    ingredients: [
      "Organic Shatavari Root Powder - Standardized adaptogenic phytoestrogen source"
    ],
    howToUse: "Stir 1 teaspoon of RK Shatavari Wellness powder in a cup of warm milk. Drink twice daily after lunch and dinner.",
    lifestyleTips: [
      "Reduce dry, carbonated, or deep-fried foods, especially near cycle onset.",
      "Practice restorative yoga postures like Supta Baddha Konasana (Reclining Bound Angle Pose).",
      "Sip warm fennel tea to soothe pelvic cramping."
    ],
    faqs: [
      {
        question: "Does it help during lactation?",
        answer: "Yes, Shatavari is a renowned galactagogue, widely used to safely improve breast milk supply in nursing mothers."
      }
    ]
  },
  {
    id: "cold-cough",
    name: "Cold & Cough Relief",
    category: "vitality-lungs",
    icon: "Award",
    shortDescription: "Dry cough, sore throat, lung chest congestion, and recovery from mild fevers.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600",
    ayurvedicCauses: [
      "Kaphaja Kasa: Excess accumulation of cold, sticky fluid (Kapha) blocking respiratory channels.",
      "Agni Manda: Low digestion heat creating mucus toxins that seek outlet through lungs."
    ],
    recommendedMedicines: ["rk-cold-cough-syrup", "rk-amla-rasayan"],
    benefits: [
      "Liquefies thick mucus congestion for easy expectoration.",
      "Soothes dry tickling throat itching and coughing spasms.",
      "Clears nasal pathways and supports chest energy recovery."
    ],
    ingredients: [
      "Vasaka Leaf & Yashtimadhu extracts - Elite organic bronchodilators",
      "Fresh Amla - Vitamin C support to defend breathing barriers"
    ],
    howToUse: "Take 2 teaspoons of RK Cold & Cough Syrup three times daily. Take 1 teaspoon of Amla Rasayan in the morning.",
    lifestyleTips: [
      "Avoid ice water, cold yogurts, and raw milk products.",
      "Inhale warm eucalyptus steam daily.",
      "Drink warm water infused with dry ginger and basil leaves."
    ],
    faqs: [
      {
        question: "Does it cause sleepiness?",
        answer: "No, our syrup is completely free from antihistamines or alcohol, making it safe and non-drowsy."
      }
    ]
  }
];
