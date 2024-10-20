/** @type {import('next').NextConfig} */
const nextConfig = {
  //(公開用パス) basePath: "/test2", //パスを指定（例：https://limeokapi95.sakura.ne.jp/test2/）
  basePath: "", //（ローカル用パス）
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
