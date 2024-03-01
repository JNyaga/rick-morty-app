import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => (
    <span className='text-gray-500 dark:text-gray-400 font-semibold'>{children}</span>
);

export default Title;