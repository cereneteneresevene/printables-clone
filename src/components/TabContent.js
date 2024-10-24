import React from 'react';
import DescriptionTab from './DescriptionTab';
import FilesTab from './FilesTab';
import MakesAndCommentsTab from './MakesCommentsTab';
import RemixesTab from './RemixesTab';
import RelatedModelsTab from './RelatedModelsTab';
import CollectionsTab from './CollectionsTab';
import UserPrintFilesTab from './UserPrintFilesTab';

const TabContent = ({ activeTab, product }) => {
  // Sekmelere göre gösterilecek içerik
  const content = [
    <DescriptionTab product={product} />,
    <FilesTab product={product} />,
    <MakesAndCommentsTab product={product} />,
    <RemixesTab product={product} />,
    <RelatedModelsTab product={product} />,
    <CollectionsTab product={product} />,
    <UserPrintFilesTab product={product} />,
  ];

  return (
    <div className="mt-8 overflow-x-auto whitespace-nowrap"> {/* overflow-x-auto ile içerik yatay kaydırılabilir hale geldi */}
      {content[activeTab]}
    </div>
  );
};

export default TabContent;

