
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white bg-opacity-90 backdrop-blur-sm border-b flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent gradient-bg">
          AutoPagePro
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          Documentation
        </Button>
        <Button variant="ghost" size="sm">
          Examples
        </Button>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
