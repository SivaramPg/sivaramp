/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/SivaramPg',
        permanent: true,
      },
      {
        source: '/github/:repo',
        destination: 'https://github.com/SivaramPg/:repo',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination:
          'https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://sivarampg.medium.com',
        permanent: true,
      },
      {
        source: '/codepen',
        destination: 'https://codepen.io/kaizoku_95',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:dev.sivaramp@gmail.com',
        permanent: false,
      },
    ];
  },
};
