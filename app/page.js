import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Page() {
  return (
  <main>
  <h1>Hello, Next.js!</h1>
  <Image
  src="/image.png"
  alt="image logo"
  width={300}
  height={200}
  priority
  />
</main>
);
  
}
