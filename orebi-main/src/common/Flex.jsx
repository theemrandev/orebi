import React from 'react';

const Flex = ({ className = '', children, ...props }) => {
  return (
    <div className={`flex items-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Flex;
