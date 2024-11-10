import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Footer from "../Footer/Footer";

export default function StandardComingSoon() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-12">
        <div className="w-96">
          <img src="/cellsweb-aminated.svg" className="w-full" alt="" />
        </div>
        <ComingSoonContent />
        <Footer />
      </main>
    </>
  );
}
