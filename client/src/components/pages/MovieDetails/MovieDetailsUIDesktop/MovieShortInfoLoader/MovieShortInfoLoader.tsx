import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieShortInfoLoader = () => (
  <div style={{ height: '100px', width: '350px' }}>
    <ContentLoader height={100} width={350} speed={2} primaryColor="#dedede" secondaryColor="#ccc">
      <rect x="6" y="14" rx="3" ry="3" width="308" height="9" />
      <rect x="183" y="205" rx="0" ry="0" width="0" height="0" />
      <rect x="6" y="36" rx="3" ry="3" width="308" height="9" />
      <rect x="7" y="57" rx="3" ry="3" width="308" height="9" />
      <rect x="8" y="79" rx="3" ry="3" width="308" height="9" />
    </ContentLoader>
  </div>
);

export { MovieShortInfoLoader };
