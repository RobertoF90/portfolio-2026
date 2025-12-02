import LatestItem from './components/LatestItem';

const LatestWorks = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold underline">Latest Works</h2>

      <div className="flex justify-between gap-6 flex-wrap">
        <LatestItem
          href="https://www.imbarcoalpero.com/"
          image="/imbarcoalpero.jpeg"
          title="Al Pero Imbarco sul Po"
          text="Restaurant in Torino"
        />

        <LatestItem
          href="https://security-technology-pabst.vercel.app/"
          image="/securitytechnology.jpeg"
          title="Sicherheitstechnik Pabst"
          text="LockSmith and Home Security"
        />

        <LatestItem
          href="https://www.lupidellamurgia.it/"
          image="/lupidellamurgia.jpg"
          title="Lupi Della Murgia"
          text="Dog Breeding Center"
        />

        <LatestItem
          href="https://www.lupidellamurgia.it/"
          image="/dreamhome.jpg"
          title="Dream Home"
          text="Real Estate Agency Mock-up"
        />
      </div>
    </div>
  );
};

export default LatestWorks;
