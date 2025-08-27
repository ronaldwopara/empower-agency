import Navigation from '@/components/layout/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                EMPOWER
              </h1>
              <h2 className="text-2xl text-gray-300 mb-8">
                NEW IDEAS FOR YOUR BUSINESS
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                We create powerful websites that drive results for businesses across all industries. 
                From lead generation to e-commerce, we build digital solutions that empower your success.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}