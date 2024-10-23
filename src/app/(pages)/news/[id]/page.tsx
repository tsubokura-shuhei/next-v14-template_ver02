import React from "react";
import type { Metadata } from "next";

// type Props = {
//     params: {id: string}
//     searchParams: {[key: string | string | string[] | undefined]}
// }

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// generateStaticParamsを追加
export const generateStaticParams = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    return posts.map((post) => ({
      id: post.id.toString(),
      title: post.title,
    }));
  } catch (error) {
    console.error("データの取得に失敗しました", error);
  }
};

// generateMetadataを使用してメタデータを動的に生成
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = (await res.json()) as Post;

  return {
    title: `${params.id}:${data.title}`,
    description: `ディスクリプション:${params.id}${data.body}`,
  };
};

// ページコンポーネント
export default function NewsPage({
  params,
}: {
  params: { id: string; title: string };
}) {
  return (
    <div>
      <h1>ニュース：{params.id}</h1>
      <p>{params.title}</p>
    </div>
  );
}
