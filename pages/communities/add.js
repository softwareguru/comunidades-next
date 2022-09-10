import MainLayout from "@/components/layouts/MainLayout";
import NewCommunityForm from "@/components/forms/communities/New";

const AddCommunitypage = () => {
  return (
    <MainLayout title="Agregar Comunidad">
      <div className="wrapper text-center  my-8 flex flex-col justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="title">
          <h1 className="text-3xl font-bold ">Agregar Comunidad</h1>
          <p className="mt-2 text-sm lg:text-base ">
            Si no encuentras la comunidad que buscas, puedes agregarla aquí.
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center px-4 w-full text-left lg:max-w-3xl">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full ">
            <div className="py-2 align-middle inline-block max-w-7xl w-full sm:px-6 lg:px-8">
              <div className="formcontainer">
                <NewCommunityForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddCommunitypage;
