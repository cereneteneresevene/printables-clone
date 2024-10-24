const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-start md:justify-center items-center space-x-4 border-b border-gray-700 py-4 overflow-x-auto whitespace-nowrap"> {/* overflow-x-auto ve whitespace-nowrap ile yatay kaydırma ekledik */}
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`px-4 py-2 text-sm md:text-base font-medium ${activeTab === index ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'}`}
        >
          {tab.label}
          {tab.count !== null && <span className="ml-2 text-xs md:text-sm">({tab.count})</span>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
