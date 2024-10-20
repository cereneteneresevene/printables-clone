const NewsFromTheBlog = () => {
  const newsData = [
    {
      imageSrc: '/images/blogcontent1.png', 
      title: 'A working tool: How architects at MASSLAB utilize 3D printing',
      description: '3D printing is quickly changing the game in architecture, making it faster and easier to bring...',
      date: 'October 16, 2024',
      author: 'Prusa Research Content Team'
    },
    {
      imageSrc: '/images/blogcontent2.png', 
      title: 'Summer Camping Contest Winners',
      description: 'Our Summer Camping Contest has come to a close, and we\'re impressed with the turnout of...',
      date: 'October 16, 2024',
      author: 'Veronika Hrušková'
    },
    {
      imageSrc: '/images/blogcontent3.png', 
      title: 'Flash Contests Theme: Scratchers',
      description: 'We continue with our flash contests, so keep your eyes peeled on this page to catch the current...',
      date: 'October 4, 2024',
      author: 'Veronika Hrušková'
    },
    {
      imageSrc: '/images/blogcontent4.png', 
      title: 'Prusament celebrates its 6th anniversary: a new limited edition...',
      description: 'Once again, the Prusament brand is one year older, and what a year it was! We released many...',
      date: 'October 2, 2024',
      author: 'Jakub Kočí'
    },
  ];

  return (
    <div className="bg-[#1c1e21] text-white p-10">
      <h2 className="text-2xl font-bold mb-6">News from the Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsData.map((news, index) => (
          <div key={index} className="bg-[#1c1e21] border border-[#313336] p-1  rounded-none">
            <img
              src={news.imageSrc}
              alt={news.title}
              width={500}
              height={300}
              className="object-cover rounded-none"
            />
            <h3 className="mt-4 text-lg font-bold hover:text-[#d15836] cursor-pointer">{news.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{news.description}</p>
            <hr className="border-gray-700 my-4" />
            <p className="text-gray-500 text-sm p-2">
              {news.date} <span>|</span> {news.author}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-[#eb6f40] text-black px-6 py-3 rounded-md text-lg hover:bg-[#d15836]">
            MORE BLOG NEWS
        </button>
      </div>

    </div>
  );
};

export default NewsFromTheBlog;
