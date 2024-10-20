import React from 'react';

const DesignContests = () => {
  const contests = [
    {
      id: 1,
      image: '/images/design1.png', 
      status: 'open', 
      title: 'Education Tools',
      entries: 381,
      dateRange: 'October 2 – November 3, 2024',
      photos: [],
      jury: 'Waiting for entries',
    },
    {
      id: 2,
      image: '/images/design2.png',
      status: 'open',
      title: 'Scratchers',
      entries: 256,
      dateRange: 'October 4 – October 21, 2024',
      photos: [],
      jury: 'Waiting for entries',
    },
    {
      id: 3,
      image: '/images/design3.png', 
      status: 'finished',
      title: 'Single Extruder - Dual Color',
      entries: 458,
      dateRange: 'September 20 – October 7, 2024',
      photos: [],
      jury: 'Waiting for jury',
    },
    {
      id: 4,
      image: '/images/design4.png', 
      status: 'finished',
      title: 'Sorting Trays',
      entries: 933,
      dateRange: 'September 6 – September 23, 2024',
      photos: [
        {
          id: 1,
          image: '/images/content1.png', 
          award: 'gold',
          creator: {
            image: '/images/owner1.png', 
            level: 17,
          },
        },
        {
          id: 2,
          image: '/images/content2.png', 
          award: 'silver',
          creator: {
            image: '/images/owner2.png', 
            level: 4,
          },
        },
        {
          id: 3,
          image: '/images/content3.png', 
          award: 'silver',
          creator: {
            image: '/images/owner3.png', 
            level: 18,
          },
        },
      ],
      jury: '',
    },
  ];

  const getStatusClass = (status) => {
    return status === 'open' ? 'bg-orange-500' : 'bg-gray-500';
  };

  const getAwardImage = (award) => {
    switch (award) {
      case 'gold':
        return '/images/gold.png'; 
      case 'silver':
        return '/images/silver.png'; 
      case 'bronze':
        return '/images/bronze.png'; 
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#18191a] p-8">
      <h2 className="text-3xl text-white mb-8">Design Contests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contests.map((contest) => (
          <div key={contest.id} className="relative bg-[#1c1e21] rounded-lg overflow-visible shadow-md">
            {/* Fotoğraf ve etiket */}
            <div className="relative">
              <img src={contest.image} alt={contest.title} className="w-full h-48 object-cover" />
              {contest.status && (
                <div
                  className={`absolute top-0 left-0 ${getStatusClass(contest.status)} text-white text-xs font-bold px-2 py-1 transform -rotate-45 translate-y-3 -translate-x-1`}
                >
                  {contest.status.toUpperCase()}
                </div>
              )}
            </div>

            {/* Başlık ve entry bilgisi */}
            <div className="p-4">
              <h3 className="text-white text-xl font-bold hover:text-[#d15836] cursor-pointer">{contest.title}</h3>
              <p className="text-gray-400 text-sm">
                {contest.entries} entries | {contest.dateRange}
              </p>

              {/* Fotoğraflar veya 'waiting for entries' */}
              {contest.photos.length > 0 ? (
                <div className="flex space-x-2 items-center justify-center mt-4 cursor-pointer">
                  {contest.photos.slice(0, 3).map((photo) => (
                    <div key={photo.id} className="relative">
                      <img src={photo.image} alt="entry" className="w-28 h-28 object-cover " />
                      <div className="absolute bottom-[-15px] left-4  text-xs rounded-full w-9 h-9 flex items-center justify-center overflow-visible z-10">
                        <img src={getAwardImage(photo.award)} alt={photo.award} className="w-9 h-9 items-center justify-center object-cover rounded-full" /> {/* Ödül simgesi */}
                      </div>
                      <div className="absolute bottom-[-15px] right-4 text-xs rounded-full w-9 h-9 flex items-center justify-center ">
                        <img src={photo.creator.image} alt={`creator-${photo.creator.level}`} className="w-9 h-9 rounded-full object-cover" /> {/* Owner resmi */}
                        <span className="absolute bottom-[-10px] right-2 text-xs bg-blue-500 text-white rounded-md p-1 w-4 h-4 flex items-center justify-center">{photo.creator.level}</span> {/* Level göstergesi */}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mt-14 flex items-center justify-center">{contest.jury}</p>
              )}
            </div>
          </div>
        ))} 
      </div>

      {/* All Contests butonu */}
      <div className="mt-8 text-center">
        <button className="bg-[#eb6f40] text-black px-6 py-3 rounded-md text-lg hover:bg-[#d15836]">
            ALL CONTESTS
        </button>
      </div>
    </div>
  );
};

export default DesignContests;
