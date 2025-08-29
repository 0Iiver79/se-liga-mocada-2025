/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.institutomariadapenha.org.br' },
      { protocol: 'https', hostname: 'www.institutoavon.org.br' },
      { protocol: 'https', hostname: 'www.geledes.org.br' },
      { protocol: 'https', hostname: 'tamojuntas.org.br' },
      { protocol: 'https', hostname: 'artemis.org.br' },
      { protocol: 'https', hostname: 'www.gov.br' },
      { protocol: 'https', hostname: 'www.mapadoacolhimento.org' },
      { protocol: 'https', hostname: 'azmina.com.br' },
      { protocol: 'https', hostname: 'www.patriciagalvao.org.br' },
      { protocol: 'https', hostname: 'defemde.org' },
  { protocol: 'https', hostname: 'thinkolga.com' },
  { protocol: 'https', hostname: 'institutoliberta.org.br' },
    ],
  },
};
