import Navigation from './Navigation';
import Bio from './home/Bio';
import Footer from './home/Footer';
import Header from './home/Header';
import LatestWorks from './home/LatestWorks';
import Social from './home/Social';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-zinc-50 font-sans dark:bg-black ">
      <Navigation />
      <main className="flex w-full max-w-xl flex-col items-center py-8 px-8 bg-white dark:bg-black sm:items-start gap-8">
        <Header />
        <Bio />
        <Social />
        <LatestWorks />
      </main>

      <Footer />
    </div>
  );
}
