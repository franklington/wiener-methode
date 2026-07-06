// Every figure below is tagged with the sourceId it came from in
// ./sources.ts. See that file for the full citation and retrieval date.

export const litteringProblem = {
  tonnesPerYear: 15_000,
  sourceId: "staedtebund-littering-report",
};

export const systemBasics = [
  {
    year: "1 Jan 2025",
    label: "Austria's single-use deposit begins: a 25-cent refundable deposit on PET bottles and metal cans from 0.1 to 3 litres",
    sourceId: "bottlebill-austria",
  },
  {
    year: "End of 2025",
    label: "First-year legal target: 80% of deposit containers collected",
    sourceId: "recycling-pfand-year-one",
  },
  {
    year: "2027",
    label: "National collection target rises to 90%",
    sourceId: "recycling-pfand-year-one",
  },
  {
    year: "2029",
    label: "EU deadline (Packaging and Packaging Waste Regulation): 90% collection required in every member state",
    sourceId: "bottlebill-austria",
  },
];

export const yearOneResult = {
  percent: 81.5,
  targetPercent: 80,
  circulationMillion: 2_000,
  returnedMillion: 1_400,
  sourceId: "recycling-pfand-year-one",
};

export const rampUp = [
  { year: "By Apr 2025 (Q1)", label: "36 million containers returned so far", sourceId: "recycling-pfand-q1" },
  { year: "By Jul 2025 (mid-year)", label: "357 million returned of about 880 million put into circulation", sourceId: "recycling-pfand-midyear" },
  { year: "By Oct 2025 (10 months)", label: "Cumulative returns pass 1 billion", sourceId: "recycling-pfand-tenmonths" },
  { year: "By Dec 2025 (year-end)", label: "1.4 billion returned of about 2 billion put into circulation - 81.5%", sourceId: "recycling-pfand-year-one" },
];

export const rvmInfrastructure = {
  machineCount: 6_400,
  shareReturnedViaMachine: 98,
  sourceId: "recycling-pfand-year-one",
};

export const reuseCollapse = {
  historicalPercent: 80,
  historicalLabel: "1995",
  currentPercent: 19,
  currentLabel: "2023",
  historySourceId: "and-less-mehrweg-history",
  legalQuotaPercent: 30,
  legalQuotaYear: "2030",
  legalQuotaSourceId: "bmluk-mehrwegquote",
};

export const recyclabilityPayoff = {
  recyclablePercent: 99.5,
  recycledContentPercent: 60,
  sourceId: "recycling-pfand-recyclability",
};

export const reductionCaveat = {
  bottledWaterMillionLitres: 700,
  quote: "Rücklauf ja - Reduktion nein",
  sourceId: "culligan-pressrelease",
};
