import { useState } from 'react';
import axios from 'axios';

interface Data {
  foodList: string;
  coa: string;
  price: number;
}

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

const userFoodList = async () => fetchData('/api/userFoodList');
const foodCOA = async () => fetchData('/api/foodCOA');
const foodPrice = async () => fetchData('/api/foodPrice');

const getData = async (): Promise<Data> => {
  try {
    const foodList = await userFoodList();
    const coa = await foodCOA();
    const price = await foodPrice();
    return { foodList, coa, price };
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getData();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError('데이터를 가져오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? '로딩...' : '데이터 가져오기'}
      </button>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>음식 목록</h2>
          <p>{data.foodList}</p>
          <h2>원자재 정보</h2>
          <p>{data.coa}</p>
          <h2>가격 정보</h2>
          <p>{data.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;