// Every figure below is tagged with the sourceId it came from in
// ./sources.ts. See that file for the full citation and retrieval date.

export const oldGuardFounders = [
  { name: "Benz", year: "1886", note: "Carl Benz patents the Motorwagen; merges into Mercedes-Benz in 1926", sourceId: "mercedes-history" },
  { name: "Ford", year: "1903", note: "Ford Motor Company founded in Detroit", sourceId: "ford-model-t-history" },
  { name: "Volkswagen", year: "1937", note: "Volkswagen founded in Germany", sourceId: "vw-beetle-numbers" },
];

export const oldGuardVolumes = {
  modelT: { value: 15_000_000, sourceId: "ford-model-t-history" },
  beetle: { value: 21_529_464, sourceId: "vw-beetle-numbers" },
};

export const headlineShare = {
  latestPercent: 10,
  latestLabel: "December 2025",
  latestSourceId: "autonews-10-percent-december",
  growthSourceId: "jato-chinese-ascent",
};

export const brandRoster = {
  brands: [
    "BYD",
    "MG (SAIC Motor)",
    "Chery (incl. Omoda, Jaecoo)",
    "Great Wall Motor (incl. ORA, WEY)",
    "Geely family (Volvo, Polestar, Lynk & Co, Zeekr)",
    "Leapmotor",
    "Xpeng",
    "Nio",
  ],
  sourceId: "autonews-segment-analysis",
  geelySourceId: "wikipedia-geely",
};

export const entryTimeline = [
  { year: "Late 2019", label: "MG (SAIC Motor) begins continental European sales, starting with the ZS EV in the Netherlands", sourceId: "mg-europe-relaunch" },
  { year: "2021", label: "BYD begins exporting the Tang EV to Norway, its first European foothold", sourceId: "autonews-china-europe-sales" },
  { year: "2021", label: "Great Wall Motor enters Europe at the Munich motor show with the Ora and Wey lineups", sourceId: "automotiveworld-gwm-offensive" },
];

export const countryContrast = {
  norway: { percent: 17, label: "December 2025", priorPercent: 7.7, priorLabel: "December 2024", sourceId: "xinhua-norway-share" },
  euWide: { percent: 10, label: "December 2025", sourceId: "autonews-10-percent-december" },
};

export const bydHistory = [
  { year: "1995", label: "BYD founded in Shenzhen as a rechargeable battery maker", sourceId: "cnn-byd-explainer" },
  { year: "2003", label: "Enters carmaking by acquiring Xi'an Qinchuan Automobile", sourceId: "cnn-byd-explainer" },
  { year: "2008", label: "Launches its first plug-in hybrid, the F3 DM; Warren Buffett invests $230M for about 10%", sourceId: "wikipedia-byd-auto" },
  { year: "2009", label: "Launches its first battery-electric model, the e6", sourceId: "wikipedia-byd-auto" },
  { year: "Q4 2023", label: "Overtakes Tesla in quarterly global EV sales", sourceId: "cnn-byd-explainer" },
];

export const overcapacity = {
  brands2023: { value: 738, sourceId: "ainvest-overcapacity" },
  brands2024: { value: 591, sourceId: "ainvest-overcapacity" },
  capacityMillion: 36,
  demandMillion: 14,
  survivorsSourceId: "cnn-price-war",
};

export const evTrendComparison = {
  early: { year: "June 2022", percent: 5.5, sourceId: "rhg-chinese-cars-europe-trend" },
  later: { year: "June 2024", percent: 11.1, sourceId: "rhg-chinese-cars-europe-trend" },
};

export const scaleRealityCheck = {
  vwGroup: { registrations: 3_570_000, sourceId: "acea-full-year-2025" },
  chineseBrands: { registrations: 1_300_000, sourceId: "acea-full-year-2025" },
  totalMarket: { registrations: 13_271_270, sourceId: "eurostat-road-eqr-carpda" },
};

export const priceGap = {
  chineseAvgEuro: 25_200,
  overallAvgEuro: 30_200,
  sourceId: "eprs-chinese-ev-price-gap",
};

export const speedToMarket = {
  chineseModelAgeYears: 1.6,
  foreignModelAgeYears: 5.4,
  sourceId: "alixpartners-speed-outlook",
};

export const euTariffs = [
  { name: "BYD", percent: 17.4, sourceId: "eu-access2markets-tariffs" },
  { name: "Geely", percent: 19.9, sourceId: "eu-access2markets-tariffs" },
  { name: "SAIC", percent: 37.6, sourceId: "eu-access2markets-tariffs" },
  { name: "Tesla (China-made)", percent: 9.0, sourceId: "eu-access2markets-tariffs" },
];

export const supplierFallout = {
  jobsAtRisk: { value: 350_000, sourceId: "clepa-jobs-study" },
  cuts: [
    { company: "Bosch", value: 13_000, sourceId: "forbes-supplier-layoffs" },
    { company: "Continental", value: 10_000, sourceId: "forbes-supplier-layoffs" },
    { company: "ZF", value: 7_600, sourceId: "forbes-supplier-layoffs" },
  ],
};

export const localProduction = [
  { year: "Nov 2024", label: "Chery and Spain's Ebro-EV Motors start production together in a former Nissan plant in Barcelona", sourceId: "xinhua-chery-ebro-spain" },
  { year: "2025", label: "BYD begins trial passenger-car production at its Szeged, Hungary plant", sourceId: "electrive-byd-hungary" },
  { year: "March 2026", label: "BYD's Turkey plant starts production, tariff-free under the EU-Turkey customs union", sourceId: "electrive-byd-turkey" },
];

export const techLicensing = [
  { year: "Jul 2023", label: "Volkswagen invests $700M for a 4.99% stake in Xpeng to co-develop two VW-badged EVs on Xpeng's platform", sourceId: "vw-group-xpeng-deal" },
  { year: "Oct 2023", label: "Stellantis invests €1.5B for 20% of Leapmotor, forming the Leapmotor International joint venture", sourceId: "detroitnews-stellantis-leapmotor" },
  { year: "2025", label: "Stellantis considers using Leapmotor's EV tech to cut costs across Fiat, Opel and Peugeot", sourceId: "detroitnews-stellantis-leapmotor" },
];
