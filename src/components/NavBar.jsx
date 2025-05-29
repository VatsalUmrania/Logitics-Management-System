// // import { useState, useEffect } from 'react';

// // const Navbar = () => {
// //   const [currentDateTime, setCurrentDateTime] = useState('2025-05-28 08:03:18');
// //   const [user] = useState('VatsalUmrania');

// //   useEffect(() => {
// //     const updateDateTime = () => {
// //       const now = new Date();
// //       const formatted = now.toISOString().slice(0, 19).replace('T', ' ');
// //       setCurrentDateTime(formatted);
// //     };

// //     updateDateTime();
// //     const interval = setInterval(updateDateTime, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const navItems = [
// //     { icon: 'fa-solid fa-house-chimney', text: 'Home', align: 'justify-start' },
// //     { icon: 'fa-solid fa-layer-group', text: 'Master Data', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-truck', text: 'Supplier', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-clipboard-check', text: 'Custom Clearance', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-credit-card', text: 'Payment', align: 'justify-center' },
// //     { icon: 'fa-solid fa-file-lines', text: 'Reports', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-magnifying-glass', text: 'Search', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-user-group', text: 'Accounts', hasDropdown: true, align: 'justify-center' },
// //     { icon: 'fa-solid fa-right-from-bracket', text: 'Logout', hasDropdown: true, align: 'justify-end' }
// //   ];

// //   return (
// //     <div className="w-full">
// //       {/* Header */}
// //       <div className="bg-gradient-to-r from-[#1b2844] via-[#1b2844] to-[#40919e] h-14 flex items-center px-4">
// //         <div className="flex-1 flex items-center justify-between max-w-[1920px] mx-auto w-full">
// //           <div className="flex items-center space-x-6">
// //             <h1 className="text-white text-2xl font-bold tracking-wide">LOGISTICS</h1>
// //             <span className="text-gray-200 text-sm whitespace-nowrap">
// //               Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): {currentDateTime}
// //             </span>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <div className="flex items-center gap-2">
// //               <div className="relative">
// //                 <i className="fa-regular fa-envelope text-white text-xl"></i>
// //                 <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
// //               </div>
// //               <i className="fa-solid fa-triangle-exclamation text-yellow-400 text-xl"></i>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <span className="w-2 h-2 bg-green-400 rounded-full"></span>
// //               <span className="text-white text-sm">Hello - Current User's Login: {user}</span>
// //               <i className="fa-solid fa-chevron-down text-white text-xs ml-1 opacity-80"></i>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navigation */}
// //       <div className="bg-gradient-to-r from-[#1b2844] via-[#2b4167] to-[#40919e]">
// //         <div className="max-w-[1920px] mx-auto">
// //           <div className="flex items-stretch">
// //             {navItems.map((item, index) => (
// //               <div key={index} className="relative group flex-1">
// //                 <a
// //                   href="#"
// //                   className={`flex items-center h-12 px-4 text-white hover:bg-white/10 transition-colors w-full ${item.align}`}
// //                 >
// //                   <div className={`flex items-center gap-2 ${
// //                     item.align === 'justify-start' ? 'ml-0' : 
// //                     item.align === 'justify-end' ? 'ml-auto' : 'mx-auto'
// //                   }`}>
// //                     <i className={`${item.icon} opacity-90`}></i>
// //                     <span className="text-sm font-light tracking-wide opacity-90 whitespace-nowrap">{item.text}</span>
// //                     {item.hasDropdown && (
// //                       <i className="fa-solid fa-chevron-down text-[10px] opacity-75"></i>
// //                     )}
// //                   </div>
// //                 </a>
// //                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect } from 'react';

// const Navbar = () => {
   
//   const [user] = useState('Test');

//   const navItems = [
//     { icon: 'fa-solid fa-house-chimney', text: 'Home' },
//     { icon: 'fa-solid fa-layer-group', text: 'Master Data', hasDropdown: true },
//     { icon: 'fa-solid fa-truck', text: 'Supplier', hasDropdown: true },
//     { icon: 'fa-solid fa-clipboard-check', text: 'Custom Clearance', hasDropdown: true },
//     { icon: 'fa-solid fa-credit-card', text: 'Payment' },
//     { icon: 'fa-solid fa-file-lines', text: 'Reports', hasDropdown: true },
//     { icon: 'fa-solid fa-magnifying-glass', text: 'Search', hasDropdown: true },
//     { icon: 'fa-solid fa-user-group', text: 'Accounts', hasDropdown: true },
//     { icon: 'fa-solid fa-right-from-bracket', text: 'Logout', hasDropdown: true }
//   ];

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-[#1b2844] via-[#1b2844] to-[#40919e] h-14 flex items-center px-4">
//         <div className="flex-1 flex items-center justify-between max-w-[1920px] mx-auto w-full">
//           <div className="flex items-center space-x-6">
//             <h1 className="text-white text-2xl font-bold tracking-wide">LOGISTICS</h1>
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
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               <span className="text-white text-sm">Hello - Current User's Login: {user}</span>
//               <i className="fa-solid fa-chevron-down text-white text-xs ml-1 opacity-80"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="bg-gradient-to-r from-[#1b2844] via-[#2b4167] to-[#40919e]">
//         <div className="max-w-[1920px] mx-auto w-fit">
//           <div className="flex items-stretch">
//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group w-full"
//                 style={{ width: 'fit-content', minWidth: '120px'}}
//               >
//                 <a
//                   href="#"
//                   className="flex items-center justify-center h-10 px-4 text-white hover:bg-white/10 transition-colors w-full"
//                 >
//                   <i className={`${item.icon} opacity-90 mr-2`}></i>
//                   <span className="text-sm font-light tracking-wide opacity-90 whitespace-nowrap">{item.text}</span>
//                   {item.hasDropdown && (
//                     <i className="fa-solid fa-chevron-down text-[10px] opacity-75 ml-1"></i>
//                   )}
//                 </a>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
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
import {
  Bell, Mail, Search, ChevronDown, User, LogOut, Home, Database, Truck,
  FileCheck, CreditCard, FileText, Users, Settings, HelpCircle
} from 'lucide-react';
import { href, Link } from 'react-router-dom';


// Master Data submenu
const masterDataMenu = [
  { label: 'Banks', key: 'banks', href:"/bank" },
  { label: 'Clients', key: 'clients', href:"/clients" },
  { label: 'Commodity', key: 'commodity', href:"/commodity" },
  { label: 'Category', key: 'category', href:"/category" },
  { label: 'Expense & Income Head', key: 'expense_income_head' },
  { label: 'Vessel', key: 'vessel', href:"/vessel"},
  { label: 'Container', key: 'container', href:"/container" },
  { label: 'POL', key: 'polldetails', href:"/poll"},
  { label: 'User', key: 'user', href:"/user" },
];

// Supplier submenu
const supplierMenu = [
  { label: 'Add Supplier', key: 'add_supplier', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Purchase', key: 'supplier_purchase', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Payment', key: 'supplier_payment', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Invoice Edit', key: 'supplier_invoice_edit', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Creditnote', key: 'supplier_creditnote', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Invoice Cancel', key: 'supplier_invoice_cancel', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Supplier Statement Report', key: 'supplier_statement_report', icon: <span className="mr-2 text-indigo-500">•</span> },
  { label: 'Purchase Search By Supplier', key: 'purchase_search_supplier', icon: <span className="mr-2 text-indigo-500">•</span> },
];

// Custom Clearance submenu
const clearanceMenu = [
  { label: 'Add Clearance Operation', key: 'add_clearance_op' },
  { label: 'Edit Clearance Operation', key: 'edit_clearance_op' },
  { label: 'Assign Expense', key: 'assign_expense' },
  { label: 'Invoice', key: 'invoice' },
  { label: 'Invoice Creditnote', key: 'invoice_creditnote' },
  { label: 'Creditnote Search', key: 'creditnote_search' },
  { label: 'Invoice Creditnote Edit', key: 'invoice_creditnote_edit' },
  { label: 'Job Other Charges', key: 'job_other_charges' },
  { label: 'Receipt Cancelation', key: 'receipt_cancelation' },
  { label: 'Delivery Note', key: 'delivery_note' },
  { label: 'Delivery Note Edit', key: 'delivery_note_edit' },
  { label: 'Delivery Note Search', key: 'delivery_note_search' },
  { label: 'Expense Posting', key: 'expense_posting' },
];

// Reports submenu
const reportsMenu = [
  { label: 'Search Invoice', key: 'search_invoice' },
  { label: 'Search Invoice By Date', key: 'search_invoice_date' },
  { label: 'Search By Invoice No', key: 'search_by_invoice_no' },
  { label: 'Invoice Search By Bayan No', key: 'invoice_search_bayan' },
  { label: 'Invoice Search By Job No', key: 'invoice_search_job' },
  { label: 'Customer Statement Report', key: 'customer_statement_report' },
  { label: 'Payment Report', key: 'payment_report' },
  { label: 'Client Searching', key: 'client_searching' },
  { label: 'Cancelled Receipt', key: 'cancelled_receipt' },
  { label: 'Expense Reports', key: 'expense_reports' },
  { label: 'Vat Statement', key: 'vat_statement' },
  { label: 'Voucher', key: 'voucher' },
  { label: 'Profit Report By Jobno', key: 'profit_report_jobno' },
  { label: 'Profit Report By Date', key: 'profit_report_date' },
  { label: 'Purchase Sales Vat Report', key: 'purchase_sales_vat_report' },
];

// Accounts submenu
const accountsMenu = [
  { label: 'Account Head', key: 'account_head' },
  { label: 'Sub Account Head', key: 'sub_account_head' },
  { label: 'Opening Balance', key: 'opening_balance' },
  { label: 'Journal Voucher', key: 'journal_voucher' },
  { label: 'Journal Voucher Edit', key: 'journal_voucher_edit' },
  { label: 'Journal Voucher Print', key: 'journal_voucher_print' },
  { label: 'Journal Report', key: 'journal_report' },
  { label: 'Ledger Report', key: 'ledger_report' },
  { label: 'Trial Balance', key: 'trial_balance' },
  { label: 'Profit And Loss Report', key: 'profit_and_loss_report' },
  { label: 'Balance Sheet', key: 'balance_sheet' },
  { label: 'Balance Sheet(Yearly Base)', key: 'balance_sheet_yearly' },
  { label: 'Cash Book', key: 'cash_book' },
];

// Main nav items
const navItems = [
  { icon: Home, text: 'Dashboard', id: 'home', color: 'text-emerald-600', href:"/"},
  {
    icon: Database,
    text: 'Master Data',
    hasDropdown: true,
    id: 'master',
    color: 'text-purple-600',
    dropdownItems: masterDataMenu,
  },
  {
    icon: Truck,
    text: 'Suppliers',
    hasDropdown: true,
    id: 'supplier',
    color: 'text-blue-600',
    dropdownItems: supplierMenu,
  },
  {
    icon: FileCheck,
    text: 'Custom Clearance',
    hasDropdown: true,
    id: 'clearance',
    color: 'text-orange-600',
    dropdownItems: clearanceMenu,
  },
  {
    icon: CreditCard,
    text: 'Payments',
    id: 'payment',
    color: 'text-pink-600',
  },
  {
    icon: FileText,
    text: 'Reports',
    hasDropdown: true,
    id: 'reports',
    color: 'text-indigo-600',
    dropdownItems: reportsMenu,
  },
  {
    icon: Users,
    text: 'Accounts',
    hasDropdown: true,
    id: 'accounts',
    color: 'text-teal-600',
    dropdownItems: accountsMenu,
  },
];

const Navbar = () => {
  const [user] = useState('Vatsal Umrania');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (isUserDropdownOpen && !e.target.closest('.user-dropdown')) {
        setIsUserDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsUserDropdownOpen(false);
  };

  return (
    <div className="w-full">
      <div
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100'
            : 'bg-gradient-to-r from-gray-50/95 via-white/95 to-gray-50/95 backdrop-blur-sm'
        }`}
      >
        {/* Main Header */}
        <div className={`px-5 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <div className="max-w-12xl mx-auto flex items-stretch justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                    <Truck className="w-6 h-6 text-white transform -rotate-3"/>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
                    LOGISTICS
                  </h1>
                  <p className="text-xs text-gray-500 font-medium tracking-wider">
                    MANAGEMENT SYSTEM
                  </p>
                </div>
              </div>
            </div>
            {/* Action Center */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-300 focus-within:bg-white">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-500 outline-none"
                />
              </div>
              {/* Notifications */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="p-2.5 bg-gray-100 hover:bg-indigo-50 rounded-xl cursor-pointer transition-all duration-300 group">
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold animate-pulse">
                      3
                    </span>
                  </div>
                </div>
                <div className="p-2.5 bg-gray-100 hover:bg-amber-50 rounded-xl cursor-pointer transition-all duration-300 group">
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                </div>
              </div>
              {/* User Menu */}
              <div className="flex items-center space-x-3 relative user-dropdown">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-sm font-medium text-gray-800">{user}</span>
                    
                    
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      isUserDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* User Dropdown */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-100 transform origin-top-right transition-all duration-300">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{user}</h3>
                          <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <User className="w-4 h-4 mr-3 text-gray-500" />
                        My Profile
                      </a>
                      <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4 mr-3 text-gray-500" />
                        Settings
                      </a>
                      <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <HelpCircle className="w-4 h-4 mr-3 text-gray-500" />
                        Help Center
                      </a>
                    </div>
                    <div className="py-1 border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-1">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-stretch -mb-px">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative group">
                      <button
                        onClick={() =>
                          item.hasDropdown && toggleDropdown(item.id)
                        }
                        className={`flex items-center space-x-1 px-5 py-4 border-b-2 border-transparent transition-all duration-300 ${
                          activeDropdown === item.id
                            ? 'border-indigo-600 text-indigo-600 font-medium'
                            : 'text-gray-700 hover:text-gray-900 hover:border-gray-300'
                        }`}
                      >
                        <IconComponent className={`w-4.5 h-4.5 ${item.color}`} />
                        <span className="font-medium">
                          {item.text}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform duration-300 transform ${
                              activeDropdown === item.id ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      {/* Dropdown Menu */}
                      {item.hasDropdown && activeDropdown === item.id && (
                        <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-xl shadow-lg border border-gray-100 py-2 z-50 max-h-[70vh] overflow-auto">
                          <div className="px-4 py-2">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                              {item.text} Options
                            </h3>
                          </div>
                          {(item.dropdownItems || []).map((entry) => (
                            <Link
                              key={entry.key}
                              to={entry.href || `#${entry.key}`}
                              className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 group"
                              onClick={() => setActiveDropdown(null)} // Optional: close dropdown after click
                            >
                              {entry.icon ? entry.icon : <span className="w-5 mr-2 text-xs text-indigo-500 flex justify-center">•</span>}
                              {entry.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden py-3 border-t border-gray-100 bg-white">
                <div className="space-y-1 px-3">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            item.hasDropdown && toggleDropdown(item.id)
                          }
                          className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className={`w-5 h-5 ${item.color}`} />
                            <span className="font-medium">{item.text}</span>
                          </div>
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`w-4 h-4 text-gray-400 transition-transform duration-300 transform ${
                                activeDropdown === item.id ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </button>
                        {item.hasDropdown && activeDropdown === item.id && (
                          <div className="bg-gray-50 px-5 py-2 space-y-1 max-h-[60vh] overflow-auto rounded-lg mx-2 mb-2">
                            <Link
                              key={entry.key}
                              to={entry.href || `#${entry.key}`}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
                              onClick={() => {
                                setActiveDropdown(null); // Optional: collapse menu
                                setIsMobileMenuOpen(false); // Optional: close mobile menu
                              }}
                            >
                              {entry.icon && entry.icon}
                              {entry.label}
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-28"></div>
    </div>
  );
};

export default Navbar;