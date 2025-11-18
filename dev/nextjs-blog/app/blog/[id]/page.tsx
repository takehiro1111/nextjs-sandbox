// 動的ルーティング
import { Params } from "@/app/types/about";

export async function generateMetadata({
  params,
}: {
  // Next.js15からparamsが非同期になった。
  params: Promise<Params>;
}) {
  const { id } = await params;
  return {
    title: `ブログIDは、${id}!!!!!`,
  };
}

export default async function page({
  params,
}: {
  // Next.js15からparamsが非同期になった。
  params: Promise<Params>;
}) {
  const { id } = await params;
  console.log(id);
  return <div>ブログID: {id}</div>;
}
