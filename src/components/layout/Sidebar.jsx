import React from 'react';
import { LayoutDashboard, Fence, HardHat, ListTree } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Fence, label: 'Farm Management', active: true },
    { icon: HardHat, label: 'ACP' },
    { icon: ListTree, label: 'Polyhouses' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="bg-green-500 p-2 rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xl font-bold">AGRIWEALTH</span>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
              item.active 
              ? 'bg-green-600 text-white' 
              : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;