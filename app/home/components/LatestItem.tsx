import Image from 'next/image';

type Props = {
  href: string;
  image: string;
  title: string;
  text: string;
};

const LatestItem = (props: Props) => {
  return (
    <a
      className="flex flex-col gap-4  hover:scale-105 transition-transform"
      href={props.href}
      target="_blank"
    >
      <div className="max-w-full sm:max-w-[250px] rounded-2xl overflow-hidden">
        <Image src={props.image} width={1440} height={1080} alt="" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-center">{props.title} </p>
        <p className="text-center">{props.text}</p>
      </div>
    </a>
  );
};

export default LatestItem;
