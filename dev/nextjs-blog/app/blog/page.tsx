import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App Blog",
  description: "ブログ記事の一覧が表示される。",
};

// ダミーデータ
const articles = [
  { id: "1", title: "タイトル1" },
  { id: "2", title: "タイトル2" },
  { id: "3", title: "タイトル3" },
];

async function fetchArticles() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  // error.tsxの内容を表示させるため。
  // throw new Error("エラー発生！！！")
  return articles;
}

export default async function BlogPage() {
  const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return <li key={article.id}>title: {article.title}</li>;
        })}
      </ul>
    </div>
  );
}
