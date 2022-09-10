const CommunityItem = ({ item }) => {
  const { fields } = item;
  const activities = fields["Actividades"] || [];
  const themes = fields["Tema(s) de enfoque"] || [];
  const website = fields["Website / Linktree"] || "";
  return (
    <div className="itemcontainer text-black shadow-md border-gray-500 w-full mt-4 rounded-md px-3 py-2">
      <div className="wrapper flex justify-between items-center">
        <div className="leftsection">
          <p className="font-bold">{fields?.Name}</p>
          <p className="text-sm">{fields?.["Area geográfica"]}</p>
        </div>
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
  );
};

export default CommunityItem;
