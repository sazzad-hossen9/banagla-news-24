const newsDetailsPage = async ({ params }) => {
  const { newsId } = await params;
  console.log("news is", newsId);
  return <div>sdfghjkl'</div>;
};

export default newsDetailsPage;
