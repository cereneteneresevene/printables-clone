const HeroBanner = () => {
    return (
      <div className="bg-black text-white h-[500px] flex items-center justify-center">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Printables Awards 2024 Finalists</h1>
          <p className="text-lg">
            Vote for your favorite models and designers from the finalists!
          </p>
          <div className="space-x-4">
            <button className="bg-orange-500 px-6 py-2 rounded-md text-white hover:bg-orange-600">
              VOTE NOW
            </button>
            <button className="bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-700">
              Read more
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  