import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ title = "", children }) => {
  return (
    <>
      <Seo subtitle={title} />
      <Header />
      <main className=" h-full w-full min-w-full flex justify-center items-center ">
        <Toaster position="bottom-center" />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
