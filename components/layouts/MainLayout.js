import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";

const MainLayout = ({ title = "", children }) => {
  return (
    <>
      <Seo subtitle={title} />
      <Header />
      <main className=" h-full w-full min-w-full flex justify-center items-center ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
