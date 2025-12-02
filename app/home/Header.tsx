import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-bold">Roberto Franco</h1>
        <h2 className="text-2xl">Full-Stack Web Developer</h2>
      </div>

      <div className="flex w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image src="/about.jpg" width={674} height={674} alt="" />
      </div>
    </div>
  );
};

export default Header;
