const getQoute = async (name: string) => {
  const res = await fetch(
    `https://animechan.xyz/api/random/anime?title=${name}`
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
      <div className="w-[544px] p-4 shadow-md bg-white rounded-md">
        <p className="text-black md:text-xl my-4">
          <span className="font-bold">"{quote}"</span>
          <br />
          <span className="block text-center">
            - {character} ({anime})
          </span>
        </p>
      </div>
    </div>
  );
}

export default Quote;
