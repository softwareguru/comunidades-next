import { NextSeo } from "next-seo";

const data = {
  siteName: "Comunidades Software Guru",
  title: "Comunidades Software Guru",
  description:
    "Lista de comunidades de tecnología en Latinoamerica. Actualizada por Software Guru",
  url: "https://sg.com.mx/", //TODO: change this to the real url
  imageUrl: "/images/og.png", //Change oG image
  twitter: "@RevistaSG",
};

const Seo = ({
  subtitle,
  description = data.description,
  url = data.url,
  imageUrl = data.imageUrl,
}) => {
  const title = subtitle ? `${data.title} | ${subtitle}` : `${data.title}`;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: url,
        locale: "es",
        title: title,
        description: description,
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: title,
          },
        ],
        site_name: data.siteName,
      }}
      twitter={{
        handle: data.twitter,
        site: data.twitter,
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
