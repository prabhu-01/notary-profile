import axios from 'axios';

const BASE_URL = 'https://api.thenotary.app/directory';

export const fetchCustomerDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/customerDetails`, {
      params: { username },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching customer details:', error);
    throw error;
  }
};
