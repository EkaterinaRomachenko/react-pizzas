import ContentLoader from 'react-content-loader';
import React from 'react';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#545454"
    foregroundColor="#545454"
  >
    <rect x="1" y="258" rx="15" ry="15" width="280" height="23" />
    <rect x="-3" y="295" rx="10" ry="10" width="279" height="111" />
    <rect x="1" y="424" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="418" rx="19" ry="19" width="152" height="45" />
    <rect x="7" y="9" rx="20" ry="20" width="266" height="230" />
  </ContentLoader>
);

export default Skeleton;
