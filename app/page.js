import Image from 'next/Image';

export default function Page() {
  return 
(<main>
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
