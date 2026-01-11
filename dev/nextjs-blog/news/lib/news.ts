import type { NewsArticle } from "@/app/news/types/lib";

const MockData: NewsArticle[] = [
	{
		id: 1,
		title: "news-1",
		summary: "summary-1",
		publishedAt: "2025-12-07",
		category: "sports",
	},
	{
		id: 2,
		title: "news-2",
		summary: "summary-2",
		publishedAt: "2025-12-07",
		category: "administration",
	},
	{
		id: 3,
		title: "news-3",
		summary: "summary-3",
		publishedAt: "2025-12-07",
		category: "politics",
	},
	{
		id: 4,
		title: "news-4",
		summary: "summary-4",
		publishedAt: "2025-12-07",
		category: "politics",
	},
	{
		id: 5,
		title: "news-5",
		summary: "summary-5",
		publishedAt: "2025-12-07",
		category: "sports",
	},
];

export const getAllNews = (): NewsArticle[] => {
	return MockData;
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
	return MockData.filter((news) => news.category === category);
};

export const getCategories = (): string[] => {
	const categories = MockData.map((data) => data.category);
	return [...new Set(categories)];
};
