import Header from './components/Header';
import Experience from './components/Experience';
import SocialMedia from './components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto px-16 py-16">
        {/* Hero Section */}
        <Header/>
        {/* Main Content */}
        <main className="space-y-16">
          {/* Resume Section */}
        <Experience/>
        <SocialMedia/>

        </main>
      </div>
    </div>
  );
};

export default Portfolio;