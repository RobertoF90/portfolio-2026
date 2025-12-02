import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Social = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-2xl font-bold underline">On The Web</h2>

      <div className="flex justify-center gap-12 text-2xl">
        <a
          className="hover:scale-125 transition-transform"
          href="https://github.com/RobertoF90"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="hover:scale-125 transition-transform"
          href="https://www.linkedin.com/in/roberto-franco-dev/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:scale-125 transition-transform"
          href="https://www.instagram.com/robertofranco.dev/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Social;
