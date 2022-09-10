import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CommunityItem from "@/components/home/CommunityItem";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import LoadingCircle from "@/components/common/LoadingCircle";

//Base component for loading, error and data
const BaseComponent = ({ children }) => {
  return (
    <MainLayout>
      <div className="wrapper  flex flex-col justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Hero className="my-8" />
        {children}
      </div>
    </MainLayout>
  );
};

//PAGE COMPONENT
export default function Home() {
  const { data, error } = useSWR("/api/communities", fetcher);
  console.log("data =>", data);
  if (error) {
    return (
      <BaseComponent>
        <p className="text-red-600 my-16">
          {" "}
          Ocurrió un error cargando la información del sitio 😕
        </p>
      </BaseComponent>
    );
  }

  if (!data)
    return (
      <BaseComponent>
        <div className="inline-flex items-center justify-center my-16">
          <LoadingCircle color="#00A0E0" />
        </div>
      </BaseComponent>
    );

  return (
    <BaseComponent>
      <>
        {data.communities && data.communities.length > 0 ? (
          <>
            {data.communities.map((item) => (
              <div className="wrapper w-full " key={item.id}>
                <CommunityItem item={item} />
              </div>
            ))}
          </>
        ) : (
          <div className="inline-flex items-center justify-center my-16">
            <p className="text-black">No hay comunidades :( </p>
          </div>
        )}
      </>
    </BaseComponent>
  );
}
