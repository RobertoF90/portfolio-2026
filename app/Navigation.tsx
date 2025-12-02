import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 max-w-4xl">
      <Link href="/">
        <h2 className="text-lg font-bold">Roberto Franco</h2>
      </Link>

      <ul className="flex gap-2">
        {/* <li>About</li>
        <li>Projects</li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
