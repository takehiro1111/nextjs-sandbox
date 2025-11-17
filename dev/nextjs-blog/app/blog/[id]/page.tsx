// 動的ルーティング
import {Params} from '@/app/types/about'

export default async function page({
  params,
}: {
  // Next.js15からparamsが非同期になった。
  params: Promise<Params>;
}) {
  console.log(params);
  const { id } = await params;
  return <div>ブログID: {id}</div>;
}
