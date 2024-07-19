export const PagePreview = ({ post }: any) => {

  return (
    <article className="relative border-slate-500/50">
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.shortDescription }}
      ></div>
    </article>
  );
};
