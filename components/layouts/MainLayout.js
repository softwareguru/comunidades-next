import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";

const MainLayout = ({ title = "", children }) => {
  return (
    <>
      <Seo subtitle={title} />
      <Header />
      <main className="min-h-screen h-full w-full ">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
