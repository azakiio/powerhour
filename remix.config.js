/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
    v2_errorBoundary: true,
    v2_meta: true,
    // unstable_dev: true,
  },
  tailwind: true,
  serverDependenciesToBundle: ["lodash-es"],
  serverBuildPath: "api/index.js",
  // server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
};
