import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ethan 1';
export const siteTitle = 'Next.js Sample Website';
//Reactらしい型
const Name=({name})=>{
    return(
        <>
        Name:{name}
        </>
    )
}

export default function Layout({ tohome, children }) {
  const names=["suzaku","ethan","sss"]
  return (
    <div className={styles.container}>
        {/*
        {names.map((v)=>{
            return <><Name name={v}/><br/></>
        })
        }
        */}

      <h2>
        <div>profile</div>
        <div>Age</div>
        <div>From</div>
        <div>Hobby</div>
        <div>Activity</div>
        <div>Proverb</div>
      </h2>

      <main>{children}</main>

    </div>
  );
}
