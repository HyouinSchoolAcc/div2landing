import { useParams } from 'react-router-dom';          // React-Router dynamic params :contentReference[oaicite:2]{index=2}
import { Suspense, lazy } from 'react';

const modules = import.meta.glob('../posts/*.mdx');

export default function BlogPost() {
  const { slug } = useParams();
  const key = `../posts/${slug}.mdx`;

  if (!modules[key]) {
    return <p className="p-6">404 – post not found.</p>;
  }

  const Post = lazy(modules[key]);

  return (
    <main className="mx-auto max-w-3xl p-6 prose">
      <Suspense fallback={<p>Loading…</p>}>
        <Post />
      </Suspense>
    </main>
  );
}
