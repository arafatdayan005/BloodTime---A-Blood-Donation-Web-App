import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-12 lg:pt-16">{children}</div>
      <Footer />
    </>
  );
};

export default mainLayout;
