import Tag from "@/components/common/Tag";

const CommunityItem = ({ item }) => {
  const { fields } = item;
  const activities = fields["Actividades"] || [];
  const themes = fields["Tema(s) de enfoque"] || [];
  const website = fields["Website / Linktree"] || "";
  const description = fields["Descripción"] || "";
  return (
    <div className="itemcontainer text-black border border-gray-300 shadow-md w-full mt-4 rounded-md px-3 py-2">
      <div className="wrapper flex justify-between items-center">
        <div className="main w-full ">
          <div className="header w-full flex justify-between items-center">
            <div className="titles">
              <p className="font-bold">{fields?.Name}</p>
              <p className="text-sm">{fields?.["Area geográfica"]}</p>
            </div>
            <div className="button">
              <div className="rightsection">
                <a
                  href={website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-guru-blue px-4 py-2 rounded-md text-xs font-medium text-white"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div className="description mt-4">
            <p className="text-xs lg:text-base lg:max-w-5xl pr-8">
              {description}
            </p>
          </div>
          <div className="tags my-4 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-between items-start md:max-w-4xl lg:max-w-7xl">
            {activities && activities.length > 0 && (
              <div className="activities  md:my-0 md:w-1/2">
                <p className="text-left mb-1 text-sm font-semibold">
                  Actividades
                </p>

                <div className="activites flex flex-1 flex-wrap">
                  {activities.map((item) => (
                    <div className="container" key={item}>
                      <Tag text={item} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="themes md:my-0 md:w-1/2">
              {themes && themes.length > 0 && (
                <>
                  <p className="text-left mb-1 text-sm font-semibold">Temas</p>

                  <div className="activites flex flex-1 flex-wrap">
                    {themes.map((item) => (
                      <div className="container" key={item}>
                        <Tag text={item} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityItem;
