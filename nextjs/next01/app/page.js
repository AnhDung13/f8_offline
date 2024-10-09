import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>HomePage</h1>
      <Link href="/products">product</Link>
    </div>
  );
}
