export default function PostCard({ post }) {
  const { id, title, content } = post;

  return (
    <div
      className="max-w-[250px] rounded overflow-hidden shadow-lg"
      key={id}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}
