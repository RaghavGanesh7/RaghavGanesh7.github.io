import React from 'react';

function Header() {
    return (
      <header className="mb-16">
      <h1 className="text-4xl font-serif mb-2">
        <span className="font-light italic text-gray-600 dark:text-gray-400">hello,</span> I'm
        <div className="text-5xl mt-1">Raghav Ganesh.</div>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Developer @ Korbyt
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        I solve problems and build websites using{' '}
        <span className="text-yellow-600">JavaScript</span>,{' '}
        <span className="text-violet-600">TypeScript</span>,{' '}
        <span className="text-blue-600">C#</span>,and{' '}
        <span className="text-blue-900">Dart</span>,{' '}
      </p>
    </header>

      );
}

export default Header;