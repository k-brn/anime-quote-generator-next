const getQoute = async (name: string) => {
  const res = await fetch(
    `https://animechan.xyz/api/random/anime?title=${name}`,
    {
      cache: "no-store", // Disable cache on the client-side
    }
  );
  return res.json();
};

interface Params {
  params: { name: string };
}

async function Quote({ params }: Params) {
  const quoteData = await getQoute(params.name);
  const anime = quoteData?.anime;
  const quote = quoteData?.quote;
  const character = quoteData?.character;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md md:w-[544px]">
        <div className="flex items-center justify-center">
          <span role="img" aria-label="emoji" className="text-4xl mx-2">
            📚
          </span>
          <span role="img" aria-label="emoji" className="text-4xl mx-2">
            🎨
          </span>
          <span role="img" aria-label="emoji" className="text-4xl mx-2">
            😄
          </span>
          <span role="img" aria-label="emoji" className="text-4xl mx-2">
            🎬
          </span>
          <span role="img" aria-label="emoji" className="text-4xl mx-2">
            📖
          </span>
        </div>
        <div className="text-center text-black md:text-xl my-4">
          <span className="font-bold">"{quote}"</span>
          <br />
          <span className="block text-center">
            - {character} ({anime})
          </span>
        </div>
        <p className="text-center mt-4 text-gray-500">
          😳 For now, please use your browser's back button.
        </p>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 text-center text-gray-500 mt-4">
        Created by Korrier with ❤️
      </footer>
    </div>
  );
}

export default Quote;
