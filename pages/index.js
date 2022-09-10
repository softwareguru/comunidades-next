import MainLayout from "@/components/layouts/MainLayout";
import { table, minifyItems } from "@/utils/Airtable";

export default function Home({ initialItems, initialError }) {
  console.log("initialItems =>", initialItems);
  //once we have the initial data, we can refresh it using SWR

  return (
    <MainLayout>
      <div className="wrapper flex flex-col justify-center items-center my-12">
        {initialError ? (
          <div className="text-red-600">{initialError}</div>
        ) : (
          <>
            {initialItems.map((item) => {
              const { id, fields } = item;
              console.log("fields =>", fields);
              return (
                <div key={id} className="text-black">
                  {fields?.Name}
                </div>
              );
            })}
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
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialError: "Ocurrió un error cargando la información del sitio 😕",
      },
    };
  }
}
