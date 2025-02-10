import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: React.FC<IconProps> = ({ icon: IconComponent, className, ...props }) => (
  <IconComponent className={className} {...props} />
);
