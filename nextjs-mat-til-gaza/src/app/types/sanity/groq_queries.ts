export const FORSIDE_HEADER_QUERY = `*[_type == "forside" && slug.current == "header"][0]{
  title,
  subtitle,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const INTRO_QUERY = `*[_type == "forside" && slug.current == "introduksjon"][0]{title, subtitle, body}`;

export const OM_FORENINGEN_QUERY = `*[_type == "om_foreningen" && slug.current == "om-foreningen"][0]{title, body}`;

export const OM_OSS_QUERY = `*[_type == "om_oss" && slug.current == "om-oss"][0]{
  title,
  image,
  gallery[0]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const STATUS_UPDATE_121125_QUERY = `*[_type == "aktivitet" && slug.current == "november-2025"][0]{title, subtitle, body}`;

export const STATUS_UPDATE_271225_QUERY = `*[_type == "aktivitet" && slug.current == "desember-2025"][0]{title, subtitle, body}`;

export const SPLEIS_INITIATIV_QUERY = `*[_type == "aktivitet" && slug.current == "juli-2025"][0]{title, subtitle, body}`;

export const AKTIVITET_QUERY = `*[_type == "aktivitet"]`;

export const OCT_2024_QUERY = `*[_type == "aktivitet" && slug.current == "oktober-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const NOV_2024_QUERY = `*[_type == "aktivitet" && slug.current == "november-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const DES_2024_QUERY = `*[_type == "aktivitet" && slug.current == "desember-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const JAN_2025_QUERY = `
*[_type == "aktivitet" && slug.current == "januar-2025"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;

export const APR_2025_QUERY = `*[_type == "aktivitet" && slug.current == "april-2025"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset,
    crop,
    hotspot
  },
  body,
  _key,
  _type
}`;