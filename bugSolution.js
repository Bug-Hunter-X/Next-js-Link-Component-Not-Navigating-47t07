```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

//Ensure that pages are correctly defined in pages directory
export default MyComponent; 
// pages/index.js
export default function Home() {
  return <div>Home</div>;
}
// pages/about.js
export default function About() {
  return <div>About</div>;
}
```