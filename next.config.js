require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://johnretsas.github.io" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Important for static exports
  output: "export",
};
