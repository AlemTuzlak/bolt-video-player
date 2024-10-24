export function Footer() {
  return (
    <footer className="bg-[#1c1d1f] border-t border-gray-700 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Game Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Database Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Forums</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teaching</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2024 LearnCode. All rights reserved.</p>
      </div>
    </footer>
  );
}