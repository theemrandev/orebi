import React from 'react';

const Container = ({ className = '', children, ...props }) => {
  return (
    <div className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
