// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [currentDateTime, setCurrentDateTime] = useState('2025-05-28 08:03:18');
//   const [user] = useState('VatsalUmrania');

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formatted = now.toISOString().slice(0, 19).replace('T', ' ');
//       setCurrentDateTime(formatted);
//     };

//     updateDateTime();
//     const interval = setInterval(updateDateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const navItems = [
//     { icon: 'fa-solid fa-house-chimney', text: 'Home', align: 'justify-start' },
//     { icon: 'fa-solid fa-layer-group', text: 'Master Data', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-truck', text: 'Supplier', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-clipboard-check', text: 'Custom Clearance', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-credit-card', text: 'Payment', align: 'justify-center' },
//     { icon: 'fa-solid fa-file-lines', text: 'Reports', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-magnifying-glass', text: 'Search', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-user-group', text: 'Accounts', hasDropdown: true, align: 'justify-center' },
//     { icon: 'fa-solid fa-right-from-bracket', text: 'Logout', hasDropdown: true, align: 'justify-end' }
//   ];

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-[#1b2844] via-[#1b2844] to-[#40919e] h-14 flex items-center px-4">
//         <div className="flex-1 flex items-center justify-between max-w-[1920px] mx-auto w-full">
//           <div className="flex items-center space-x-6">
//             <h1 className="text-white text-2xl font-bold tracking-wide">LOGISTICS</h1>
//             <span className="text-gray-200 text-sm whitespace-nowrap">
//               Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): {currentDateTime}
//             </span>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="relative">
//                 <i className="fa-regular fa-envelope text-white text-xl"></i>
//                 <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
//               </div>
//               <i className="fa-solid fa-triangle-exclamation text-yellow-400 text-xl"></i>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//               <span className="text-white text-sm">Hello - Current User's Login: {user}</span>
//               <i className="fa-solid fa-chevron-down text-white text-xs ml-1 opacity-80"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="bg-gradient-to-r from-[#1b2844] via-[#2b4167] to-[#40919e]">
//         <div className="max-w-[1920px] mx-auto">
//           <div className="flex items-stretch">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative group flex-1">
//                 <a
//                   href="#"
//                   className={`flex items-center h-12 px-4 text-white hover:bg-white/10 transition-colors w-full ${item.align}`}
//                 >
//                   <div className={`flex items-center gap-2 ${
//                     item.align === 'justify-start' ? 'ml-0' : 
//                     item.align === 'justify-end' ? 'ml-auto' : 'mx-auto'
//                   }`}>
//                     <i className={`${item.icon} opacity-90`}></i>
//                     <span className="text-sm font-light tracking-wide opacity-90 whitespace-nowrap">{item.text}</span>
//                     {item.hasDropdown && (
//                       <i className="fa-solid fa-chevron-down text-[10px] opacity-75"></i>
//                     )}
//                   </div>
//                 </a>
//                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [user] = useState('VatsalUmrania');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toISOString().slice(0, 19).replace('T', ' ');
      setCurrentDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { icon: 'fa-solid fa-house-chimney', text: 'Home' },
    { icon: 'fa-solid fa-layer-group', text: 'Master Data', hasDropdown: true },
    { icon: 'fa-solid fa-truck', text: 'Supplier', hasDropdown: true },
    { icon: 'fa-solid fa-clipboard-check', text: 'Custom Clearance', hasDropdown: true },
    { icon: 'fa-solid fa-credit-card', text: 'Payment' },
    { icon: 'fa-solid fa-file-lines', text: 'Reports', hasDropdown: true },
    { icon: 'fa-solid fa-magnifying-glass', text: 'Search', hasDropdown: true },
    { icon: 'fa-solid fa-user-group', text: 'Accounts', hasDropdown: true },
    { icon: 'fa-solid fa-right-from-bracket', text: 'Logout', hasDropdown: true }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1b2844] via-[#1b2844] to-[#40919e] h-14 flex items-center px-4">
        <div className="flex-1 flex items-center justify-between max-w-[1920px] mx-auto w-full">
          <div className="flex items-center space-x-6">
            <h1 className="text-white text-2xl font-bold tracking-wide">LOGISTICS</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <i className="fa-regular fa-envelope text-white text-xl"></i>
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </div>
              <i className="fa-solid fa-triangle-exclamation text-yellow-400 text-xl"></i>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-white text-sm">Hello - Current User's Login: {user}</span>
              <i className="fa-solid fa-chevron-down text-white text-xs ml-1 opacity-80"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gradient-to-r from-[#1b2844] via-[#2b4167] to-[#40919e]">
        <div className="max-w-[1920px] mx-auto w-fit">
          <div className="flex items-stretch">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group w-full"
                style={{ width: 'fit-content', minWidth: '120px'}}
              >
                <a
                  href="#"
                  className="flex items-center justify-center h-10 px-4 text-white hover:bg-white/10 transition-colors w-full"
                >
                  <i className={`${item.icon} opacity-90 mr-2`}></i>
                  <span className="text-sm font-light tracking-wide opacity-90 whitespace-nowrap">{item.text}</span>
                  {item.hasDropdown && (
                    <i className="fa-solid fa-chevron-down text-[10px] opacity-75 ml-1"></i>
                  )}
                </a>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;