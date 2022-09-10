import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CommunityItem from "@/components/home/CommunityItem";
import { table, minifyItems } from "@/utils/airtable";

export default function Home({ initialItems, initialError }) {
  console.log("initialItems =>", initialItems);
  //once we have the initial data, we can refresh it using SWR
  return (
    <MainLayout>
      <div className="wrapper  flex flex-col justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Hero className="my-8" />
        {initialError ? (
          <div className="text-red-600">{initialError}</div>
        ) : (
          <>
            {initialItems &&
              initialItems.length > 0 &&
              initialItems.map((item) => (
                <div className="wrapper w-full " key={item.id}>
                  <CommunityItem item={item} />
                </div>
              ))}
          </>
        )}
      </div>
    </MainLayout>
  );
}

//this function runs in server side, it takes the initial data and pass it to the component
//This is good for SEO and fast performance
export async function getStaticProps(context) {
  try {
    const items = await table.select({}).firstPage();
    return {
      props: {
        initialItems: minifyItems(items),
      },
      revalidate: 5, //Revalidate every 5 seconds
    };
  } catch (error) {
    console.log("Error getting initial communities data => ", error);
    return {
      props: {
        initialError: "Ocurrió un error cargando la información del sitio 😕",
      },
    };
  }
}
