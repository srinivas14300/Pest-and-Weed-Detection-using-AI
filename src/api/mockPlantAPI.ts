export const fetchPlants = async () => {
  const localData = localStorage.getItem('plants');
  return localData ? JSON.parse(localData) : [];
};

export const savePlantData = (plants) => {
  localStorage.setItem('plants', JSON.stringify(plants));
  return Promise.resolve();
};

export const analyzePlantImage = async (imageFile) => {
  // Mock image analysis with sample data
  return {
    species: 'Sample Plant',
    healthStatus: 'healthy',
    confidence: 0.92,
    timestamp: new Date().toISOString()
  };
};
