/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/test2", // (公開用のパスを指定)（例：https://limeokapi95.sakura.ne.jp/test2/）
  basePath: "", //（ローカル用パス）
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
