const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <span className="text-navy text-xl font-bold">William Joseph</span>
    <div className="space-x-4">
      <a href="#" className="text-navy hover:underline">Home</a>
      <a href="#" className="text-navy hover:underline">Why Us</a>
      <a href="#" className="text-navy hover:underline">Contact</a>
    </div>
  </nav>
);

export default Navbar;