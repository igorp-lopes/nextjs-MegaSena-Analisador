import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DateSelector from "../components/DateSelector";

export default function Home() {
  return (
    <div className='container'>
      <h1>Analisador de resultados da Mega-Sena</h1>
      <DateSelector></DateSelector>
    </div>
  );
}
