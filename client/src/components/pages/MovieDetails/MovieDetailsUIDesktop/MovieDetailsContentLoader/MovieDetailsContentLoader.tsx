import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieDetailsContentLoader = () => (
  <ContentLoader height={250} width={600} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
    <rect x="8" y="15" rx="4" ry="4" width="117" height="6" />
    <rect x="8" y="37" rx="3" ry="3" width="85" height="6" />
    <rect x="8" y="80" rx="3" ry="3" width="350" height="6" />
    <rect x="8" y="100" rx="3" ry="3" width="380" height="6" />
    <rect x="8" y="120" rx="3" ry="3" width="201" height="6" />
    <rect x="8" y="160" rx="0" ry="0" width="240" height="75" />
    <rect x="280" y="160" rx="0" ry="0" width="240" height="75" />
  </ContentLoader>
);

export { MovieDetailsContentLoader };
