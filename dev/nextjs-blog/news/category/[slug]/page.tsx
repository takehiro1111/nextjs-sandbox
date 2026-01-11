import Link from "next/link";
import { getNewsByCategory } from "@/app/news/lib/news";

export const dynamic = "force-dynamic";

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const now = new Date().toLocaleString("ja-JP");
	const newsByCategory = getNewsByCategory(slug);

	return (
		<>
			<div>
				<h1>カテゴリ{slug}のニュース一覧</h1>
			</div>
			<div>
				<h2 className="font-medium text-lg bg-red-50">最終更新時刻: {now}</h2>
			</div>
			<div>
				{newsByCategory.map((data) => {
					return (
						<Link
							key={data.id}
							href={`/news/${data.id}`}
							className="block p-4 bg-gray-50 rounded-lg hover:bg-sky-100 transition"
						>
							<div>
								<span className="font-medium text-lg">{data.title}</span>
							</div>

							<div>
								<span className="text-gray-600 mt-1">{data.summary}</span>
							</div>

							<div className="flex gap-4 mt-2 text-gray-500 text-xs">
								<span>{data.publishedAt}</span>
								<span>{data.category}</span>
							</div>
						</Link>
					);
				})}
			</div>
			<div>
				<Link href="/news" className="px-3 py-1 bg-blue-500 text-white rounded">
					すべてのニュース
				</Link>
			</div>
		</>
	);
}
