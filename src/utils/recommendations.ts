interface Recommendation {
  crop?: string;
  weed?: string;
  tips?: string[];
  herbicides?: string[];
}

const getRecommendations = (className: string): Recommendation => {
  const recommendations: { [key: string]: Recommendation } = {
    'Corn': {
      crop: 'Corn',
      tips: [
        'Ensure adequate nitrogen fertilization.',
        'Maintain soil moisture levels.',
        'Monitor for pests like corn borers.'
      ]
    },
    'Wheat': {
      crop: 'Wheat',
      tips: [
        'Apply phosphorus and potassium fertilizers.',
        'Control weeds early in the season.',
        'Monitor for fungal diseases like rust.'
      ]
    },
    'Dandelion': {
      weed: 'Dandelion',
      herbicides: ['2,4-D', 'Glyphosate'],
      tips: ['Remove manually before seed dispersal.']
    },
    'Crabgrass': {
      weed: 'Crabgrass',
      herbicides: ['Quinclorac', 'Dithiopyr'],
      tips: ['Apply pre-emergent herbicides in early spring.']
    }
  };

  return recommendations[className] || {};
};

export { getRecommendations };
