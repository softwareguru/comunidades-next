import Link from "next/link";

const HeroHomeSection = ({ ...rest }) => {
  return (
    <div className="herocontainer" {...rest}>
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="textcontainer text-center text-gray-800">
          <div className="title text-3xl md:text-4xl lg:text-5xl">
            <h1 className=" font-bold text-center">
              Comunidades <br />
              <span className="text-guru-blue">Software Guru 🙌</span>
            </h1>
          </div>
          <p className="  text-center mt-4 ">
            <span className=" text-guru-blue  font-bold text-sm md:text-xl">
              Bienvenid@ a comunidades Software Guru!
            </span>{" "}
          </p>

          <p className="text-sm md:text-base text-center mt-4 w-full md:max-w-xl ">
            {" "}
            El proposito de este sitio es poder compartir un listado de las
            comunidades de tecnología que existen en el mundo hispanohablante.
          </p>

          <p className="text-sm md:text-base text-center mt-4 w-full md:max-w-xl">
            Si tienes una comunidad y quieres que aparezca en este listado,
            agregala dando click en el botón de abajo 👇
          </p>
        </div>
        <div className="buttoncontainer mt-8 animate-wiggle">
          <Link href="/communities/add">
            <a className=" bg-guru-blue px-4 py-3 rounded-md text-sm md:text-base font-medium text-white">
              Agregar Comunidad
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHomeSection;
