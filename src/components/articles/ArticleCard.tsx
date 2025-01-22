import { articleType } from './data';

function ArticleCard({ article }: { article: articleType }) {
  const { imgURL, sport, author, date, title, description } = article;

  return (
    <div className="rounded-md overflow-hidden">
      <div className="relative min-h-60 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${imgURL}')` }}>
        <p className="text-white absolute right-3 top-3 border p-2 rounded-md text-sm capitalize">{sport}</p>
      </div>
      <div className="py-4 px-2 grid gap-2">
        <div className="flex items-center gap-3">
          <img src={author.imgURL} alt="Author" className="w-10 h-10" />
          <p className="font-medium text-sm">{author.name}</p>
        </div>
        <p className="text-gray text-sm font-medium">{date}</p>
        <h3 className="font-medium text-lg">{title}</h3>
        <h4 className="text-gray font-medium text-sm">{description}</h4>
      </div>
    </div>
  );
}
export default ArticleCard;
