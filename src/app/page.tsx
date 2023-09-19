//import Image from 'next/image'

import Link from 'next/link'

import x from "@/styles/app.module.css"
import y from "@/styles/test.module.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Description home',
}

export default function Home() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res", data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <ul>
        <li className={x['red']}>Lorem ispum<Link href='/facebook'><span className={y['red']}>Facebook</span></Link></li>
        <li><Link href='/tiktok'>Tiktok</Link></li>
        <li><Link href='/youtube'>Youtube</Link></li>
      </ul>


    </div>
  )
}
