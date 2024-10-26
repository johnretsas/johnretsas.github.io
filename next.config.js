require("dotenv").config();

const isProd = process.env.NODE_ENV !== "development";

module.exports = {
  assetPrefix: isProd ? "https://johnretsas.github.io" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // This is important for static exports
  output: "export",
};
