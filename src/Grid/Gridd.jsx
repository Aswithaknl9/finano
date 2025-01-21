import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';
import GridTable from './GridTable';

const Gridd = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return <div className="p-6">{loading ? <SkeletonLoader /> : <GridTable />}</div>;
};

export default Gridd;
