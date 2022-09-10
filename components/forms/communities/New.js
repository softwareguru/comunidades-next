/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Input, TextArea, Select } from "@/components/forms/fields";
import { City, Country, State } from "country-state-city";

const NewCommunityForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();

  const countryCode = watch("country");
  const stateCode = watch("state");

  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  //Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      const _countries = await Country.getAllCountries();
      const parsedCountries = _countries.map((country) => ({
        label: country.name,
        value: country.isoCode,
      }));
      setCountries(parsedCountries);
    };

    fetchCountries();
  }, []);

  //fetch states
  useEffect(() => {
    const fetchStates = async () => {
      const _states = await State.getStatesOfCountry(countryCode);
      const parsedStates = _states.map((state) => ({
        label: state.name,
        value: state.isoCode,
      }));
      setStates(parsedStates);
    };

    if (countryCode) fetchStates();
  }, [countryCode]);

  //fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      const _cities = await City.getCitiesOfState(countryCode, stateCode);
      const parsedCities = _cities.map((city) => ({
        label: city.name,
        value: city.name,
      }));
      setCities(parsedCities);
    };
    if (stateCode) fetchCities();
  }, [stateCode]);

  const onSubmit = async (data) => {
    console.log("data =>", data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputwrapper my-3">
        <Input
          label="Nombre de la comunidad"
          name="name"
          type="text"
          register={{
            ...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              maxLength: {
                value: 40,
                message: "No puede contener más de 40 caracteres",
              },
            }),
          }}
          placeholder="Escribe el nombre de tu comunidad"
          errorMessage={errors.name?.message}
        />
      </div>
      <div className="inputwrapper my-3">
        <TextArea
          label="Descripción"
          name="description"
          register={{
            ...register("description", {
              required: {
                value: true,
                message: "Descripción es requerida",
              },
              minLength: {
                value: 100,
                message: "Debe de tener minimo 100 caracteres",
              },
              maxLength: {
                value: 2000,
                message: "Debe de tener maximo 2000 caracteres",
              },
            }),
          }}
          errorMessage={errors.description?.message}
        />
      </div>
      <div className="inputwrapper my-3">
        <Select
          label="País"
          name="country"
          options={countries}
          register={{
            ...register("country", {
              required: {
                value: true,
                message: "Pais es requerido",
              },
            }),
          }}
          errorMessage={errors.country?.message}
        />
      </div>
      <div className="inputwrapper my-3">
        <Select
          label="Estado"
          name="state"
          options={states}
          register={{
            ...register("state", {
              required: {
                value: true,
                message: "Estado es requerido",
              },
            }),
          }}
          errorMessage={errors.state?.message}
        />
      </div>
      <div className="inputwrapper my-3">
        <Select
          label="Ciudad"
          name="city"
          options={cities}
          register={{
            ...register("city", {
              required: {
                value: true,
                message: "Ciudad es requerida",
              },
            }),
          }}
          errorMessage={errors.city?.message}
        />
      </div>
      <div className="inputwrapper my-3">
        <Input
          label="Website/LinkTree"
          name="website"
          type="text"
          register={{
            ...register("website", {
              required: {
                value: true,
                message: "URl es requerida",
              },
            }),
          }}
          placeholder="Escribe el nombre de tu comunidad"
          errorMessage={errors.website?.message}
        />
      </div>
      <button
        type="submit"
        className="my-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-guru-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={loading}
      >
        {loading ? (
          <div className="inline-flex items-center justify-center">
            <LoadingCircle color="#00A0E0" />
          </div>
        ) : (
          "Agregar comunidad"
        )}
      </button>
    </form>
  );
};

export default NewCommunityForm;
