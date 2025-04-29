import { Link } from 'react-router-dom';
import matter from 'gray-matter';

// Eager-load every post and pull its front-matter
const posts = Object.entries(
  import.meta.glob('../posts/*.mdx', { eager: true })
).map(([path, mod]) => {
  const { data } = matter(mod.default.frontMatter ?? mod.raw ?? '');
  return {
    slug: path.split('/').pop().replace(/\.mdx?$/, ''),
    Component: mod.default,
    ...data
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export default function BlogList() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-6">Dev Log</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} className="text-blue-600 hover:underline">
              {p.title}
            </Link>
            <div className="text-sm text-gray-500">{p.date}</div>
            <p className="mt-1">{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
