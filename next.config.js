const webpack = require('webpack');

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_ENV': JSON.stringify(
          process.env.NEXT_PUBLIC_ENV
        ),
      })
    );
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
