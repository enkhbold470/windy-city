// Mock data for demonstration
export const topCrops = [
  {
    name: "Cotton",
    score: 0.95,
    marketValue: "High",
    esgImpact: "Medium",
    technicalComplexity: "Low",
  },
  {
    name: "Soybean",
    score: 0.92,
    marketValue: "High",
    esgImpact: "High",
    technicalComplexity: "Medium",
  },
  {
    name: "Rice",
    score: 0.88,
    marketValue: "Medium",
    esgImpact: "Medium",
    technicalComplexity: "High",
  },
  {
    name: "Wheat",
    score: 0.85,
    marketValue: "Medium",
    esgImpact: "Low",
    technicalComplexity: "Medium",
  },
  {
    name: "Corn",
    score: 0.82,
    marketValue: "High",
    esgImpact: "Medium",
    technicalComplexity: "Low",
  },
];

export const radarData = {
  labels: ["Technical", "Market", "ESG", "Regulatory"],
  datasets: [
    {
      label: "Cotton",
      data: [0.9, 0.8, 0.7, 0.85],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Soybean",
      data: [0.85, 0.9, 0.8, 0.7],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

export const barData = {
  labels: ["Cotton", "Soybean", "Rice", "Wheat", "Corn"],
  datasets: [
    {
      label: "Feasibility Score",
      data: [0.95, 0.92, 0.88, 0.85, 0.82],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export const loadingStates = [
  {
    text: "Assessing soil quality",
  },
  {
    text: "Evaluating water availability",
  },
  {
    text: "Analyzing climate conditions",
  },
  {
    text: "Calculating growth potential",
  },
  {
    text: "Estimating market demand",
  },
  {
    text: "Reviewing pest resistance",
  },
  {
    text: "Finalizing feasibility report",
  },
  {
    text: "Ready for planting decision",
  },
];

export const mockPapers = [
  {
    id: 1,
    title: "Advances in Cotton Cell Culture Techniques",
    authors: "Smith, J., et al.",
    year: 2023,
    journal: "Plant Cell Reports",
    score: 0.95,
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=Advances+in+Cotton+Cell+Culture+Techniques",
  },
  {
    id: 2,
    title: "Genetic Modification of Soybean for Enhanced Protein Content",
    authors: "Johnson, A., et al.",
    year: 2022,
    journal: "Crop Science",
    score: 0.89,
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=Genetic+Modification+of+Soybean+for+Enhanced+Protein+Content",
  },
  {
    id: 3,
    title:
      "Optimizing Growth Conditions for Rice in Liquid Suspension Cultures",
    authors: "Lee, S., et al.",
    year: 2023,
    journal: "In Vitro Cellular & Developmental Biology - Plant",
    score: 0.87,
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=Optimizing+Growth+Conditions+for+Rice+in+Liquid+Suspension+Cultures",
  },
  {
    id: 4,
    title: "Novel Approaches to Wheat Embryo Culture",
    authors: "Garcia, M., et al.",
    year: 2021,
    journal: "Plant Cell, Tissue and Organ Culture",
    score: 0.82,
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=Novel+Approaches+to+Wheat+Embryo+Culture",
  },
  {
    id: 5,
    title: "Improving Corn Yield Through Cell Culture Techniques",
    authors: "Brown, R., et al.",
    year: 2022,
    journal: "Agronomy Journal",
    score: 0.78,
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=Improving+Corn+Yield+Through+Cell+Culture+Techniques",
  },
];
