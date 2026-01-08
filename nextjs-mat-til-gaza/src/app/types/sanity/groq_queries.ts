export const FORSIDE_HEADER_QUERY = `*[_type == "forside" && slug.current == "header"][0]{
  title,
  subtitle,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body
}`;

export const INTRO_QUERY = `*[_type == "forside" && slug.current == "introduksjon"][0]{title, subtitle, body}`;
export const STATUS_UPDATE_121125_QUERY = `*[_type == "aktivitet" && slug.current == "november-2025"][0]{title, subtitle, body}`;
export const STATUS_UPDATE_271225_QUERY = `*[_type == "aktivitet" && slug.current == "desember-2025"][0]{title, subtitle, body}`;
export const SPLEIS_INITIATIV_QUERY = `*[_type == "aktivitet" && slug.current == "januar-2026"][0]{title, subtitle, body}`;

export const OCT_2024_QUERY = `*[_type == "aktivitet" && slug.current == "oktober-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body,
  _key,
  _type
}
`;

export const NOV_2024_QUERY = `*[_type == "aktivitet" && slug.current == "november-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body,
  _key,
  _type
}
`;

export const DES_2024_QUERY = `*[_type == "aktivitet" && slug.current == "desember-2024"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body,
  _key,
  _type
}
`;

export const JAN_2025_QUERY = `
*[_type == "aktivitet" && slug.current == "januar-2025"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body,
  _key,
  _type
}
`;

export const APR_2025_QUERY = `*[_type == "aktivitet" && slug.current == "april-2025"][0]{
  title,
  gallery[]{
    _key,
    alt,
    _type,
    asset  // <- leave as reference, do not fetch full object
  },
  body,
  _key,
  _type
}
`;