// import { usePathname } from "next/navigation";
import Link from "next/link";
// import clsx from "clsx";
import { getAllNews, getCategories } from "@/app/news/lib/news";

export const revalidate = 60;

export default function NewsNavLinks() {
	const allNews = getAllNews();
	const now = new Date().toLocaleString("ja-JP");

	return (
		<>
			<div>
				<h1>ニュース一覧</h1>
			</div>
			<div>
				<h2 className="font-medium text-lg bg-red-50">最終更新時刻: {now}</h2>
			</div>
			<div>
				{allNews.map((data) => {
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
				<h2>カテゴリごとのニュース一覧へ</h2>
				<div className="flex gap-2 mb-4">
					{getCategories().map((cat) => (
						<Link
							key={cat}
							href={`/news/category/${cat}`}
							className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
						>
							{cat}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
