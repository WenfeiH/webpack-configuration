import newsData from "../mock/news";
export default function(req, res, next) {
  const data = newsData();
  const news = data.news;
  res.send(news);
}
