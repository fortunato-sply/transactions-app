import styles from './styles.module.scss';
import { useEffect } from 'react';
import axios from 'axios';

export default function ReqPage() {
  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    const res = await axios.get('https://dummyjson.com/products');
    console.log(res);
  }

  return (
    <>Teste</>
  )
}