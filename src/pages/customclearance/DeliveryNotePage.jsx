// import React, { useState, useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

// function DeliveryNote() {
//   const [formData, setFormData] = useState({
//     deliveryNoteNo: '',
//     blNo: '',
//     date: '',
//     refNo: '',
//     shipperDetails: '',
//     truckType: '',
//     truckPlate: '',
//     truckCountry: '',
//     personInCharge: '',
//     notifyConsignee: '',
//     freight: '',
//     loadingPoint: '',
//     dischargePoint: '',
//     books: '',
//     line: '',
//     country: '',
//     goods: [{
//       marksNos: '',
//       description: '',
//       packages: '',
//       volumeWeight: ''
//     }],
//     partyName: '',
//     mobileNo: '',
//     signature: '',
//     arrivalTime: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleGoodsChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedGoods = [...formData.goods];
//     updatedGoods[index] = {
//       ...updatedGoods[index],
//       [name]: value
//     };
//     setFormData(prev => ({
//       ...prev,
//       goods: updatedGoods
//     }));
//   };

//   const addGoodsRow = () => {
//     setFormData(prev => ({
//       ...prev,
//       goods: [...prev.goods, {
//         marksNos: '',
//         description: '',
//         packages: '',
//         volumeWeight: ''
//       }]
//     }));
//   };

//   const removeGoodsRow = (index) => {
//     const updatedGoods = formData.goods.filter((_, i) => i !== index);
//     setFormData(prev => ({
//       ...prev,
//       goods: updatedGoods
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: `Delivery_Note_${formData.deliveryNoteNo || 'New'}`,
//     onBeforeGetContent: () => {
//       return Promise.resolve();
//     },
//     onAfterPrint: () => {
//       console.log('Print completed');
//     }
//   });

//   return (
//     <div className="max-w-7xl mx-auto p-3">
//       <div ref={componentRef} className="bg-gradient-to-b from-blue-50 to-blue-100 p-5 rounded-lg shadow-lg border border-blue-200">
//         <h2 className="bg-slate-700 text-white p-2 rounded-md mb-3 text-lg font-semibold text-center">
//           Delivery Note
//         </h2>
        
//         <form onSubmit={handleSubmit}>
//           {/* Add Delivery Note Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Add Delivery Note
//             </h2>
//             <div className="grid grid-cols-2 gap-8 mb-2">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Delivery Note No.
//                 </label>
//                 <input
//                   type="text"
//                   name="deliveryNoteNo"
//                   value={formData.deliveryNoteNo}
//                   onChange={handleChange}
//                   placeholder="1:2 ششم صفر"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   BL No.
//                 </label>
//                 <input
//                   type="text"
//                   name="blNo"
//                   value={formData.blNo}
//                   onChange={handleChange}
//                   placeholder="3:5 مشروع قانون"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Ref No.
//                 </label>
//                 <input
//                   type="text"
//                   name="refNo"
//                   value={formData.refNo}
//                   onChange={handleChange}
//                   placeholder="محضر رقم"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Shipper / Loading Party Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Shipper / Loading Party
//             </h2>
//             <div className="flex flex-col gap-1.5 mb-2">
//               <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                 Details / Party
//               </label>
//               <textarea
//                 name="shipperDetails"
//                 value={formData.shipperDetails}
//                 onChange={handleChange}
//                 placeholder="التفاصيل / حزب الفصل"
//                 className="p-2 border border-gray-300 rounded text-sm h-16 w-full resize-y focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//               />
//             </div>
//             <div className="grid grid-cols-3 gap-7">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Truck Type
//                 </label>
//                 <input
//                   type="text"
//                   name="truckType"
//                   value={formData.truckType}
//                   onChange={handleChange}
//                   placeholder="Type"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Truck Plate
//                 </label>
//                 <input
//                   type="text"
//                   name="truckPlate"
//                   value={formData.truckPlate}
//                   onChange={handleChange}
//                   placeholder="Plate"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Truck Country
//                 </label>
//                 <input
//                   type="text"
//                   name="truckCountry"
//                   value={formData.truckCountry}
//                   onChange={handleChange}
//                   placeholder="Country"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Person In Charge Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Person In Charge
//             </h2>
//             <div className="grid grid-cols-2 gap-8 mb-2">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Person In Charge
//                 </label>
//                 <input
//                   type="text"
//                   name="personInCharge"
//                   value={formData.personInCharge}
//                   onChange={handleChange}
//                   placeholder="الشخص السؤال"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Notify/Consignee
//                 </label>
//                 <input
//                   type="text"
//                   name="notifyConsignee"
//                   value={formData.notifyConsignee}
//                   onChange={handleChange}
//                   placeholder="إعلام / الرسول ثانية"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                 Freight
//               </label>
//               <input
//                 type="text"
//                 name="freight"
//                 value={formData.freight}
//                 onChange={handleChange}
//                 className="p-2 border border-gray-300 rounded text-sm h-9 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Loading/Discharge Points Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Loading/Discharge Points
//             </h2>
//             <div className="grid grid-cols-2 gap-8">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Loading Point
//                 </label>
//                 <input
//                   type="text"
//                   name="loadingPoint"
//                   value={formData.loadingPoint}
//                   onChange={handleChange}
//                   placeholder="فلغا نصيل"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Discharge Point
//                 </label>
//                 <input
//                   type="text"
//                   name="dischargePoint"
//                   value={formData.dischargePoint}
//                   onChange={handleChange}
//                   placeholder="لقطة الشريع"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Additional Details Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Additional Details
//             </h2>
//             <div className="grid grid-cols-2 gap-8 mb-2">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Books
//                 </label>
//                 <input
//                   type="text"
//                   name="books"
//                   value={formData.books}
//                   onChange={handleChange}
//                   placeholder="الكتب"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Line
//                 </label>
//                 <input
//                   type="text"
//                   name="line"
//                   value={formData.line}
//                   onChange={handleChange}
//                   placeholder="خطئ"
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 placeholder="بلد"
//                 className="p-2 border border-gray-300 rounded text-sm h-9 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Goods Details Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Goods Details
//             </h2>
//             <div>
//               <table className="w-full border-collapse mb-3 text-xs rounded-md overflow-hidden shadow-sm">
//                 <thead>
//                   <tr>
//                     <th className="bg-slate-700 text-white p-2 text-xs font-semibold text-center uppercase tracking-wide">
//                       Marks & Nos
//                     </th>
//                     <th className="bg-slate-700 text-white p-2 text-xs font-semibold text-center uppercase tracking-wide">
//                       Description of Goods
//                     </th>
//                     <th className="bg-slate-700 text-white p-2 text-xs font-semibold text-center uppercase tracking-wide">
//                       Packages
//                     </th>
//                     <th className="bg-slate-700 text-white p-2 text-xs font-semibold text-center uppercase tracking-wide">
//                       Volume/Weight
//                     </th>
//                     <th className="bg-slate-700 text-white p-2 text-xs font-semibold text-center uppercase tracking-wide">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {formData.goods.map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="p-1.5 border-b border-gray-200 bg-white text-center">
//                         <input
//                           type="text"
//                           name="marksNos"
//                           value={item.marksNos}
//                           onChange={(e) => handleGoodsChange(index, e)}
//                           className="w-full p-1.5 border border-gray-200 rounded text-xs h-7 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none"
//                         />
//                       </td>
//                       <td className="p-1.5 border-b border-gray-200 bg-white text-center">
//                         <input
//                           type="text"
//                           name="description"
//                           value={item.description}
//                           onChange={(e) => handleGoodsChange(index, e)}
//                           className="w-full p-1.5 border border-gray-200 rounded text-xs h-7 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none"
//                         />
//                       </td>
//                       <td className="p-1.5 border-b border-gray-200 bg-white text-center">
//                         <input
//                           type="text"
//                           name="packages"
//                           value={item.packages}
//                           onChange={(e) => handleGoodsChange(index, e)}
//                           className="w-full p-1.5 border border-gray-200 rounded text-xs h-7 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none"
//                         />
//                       </td>
//                       <td className="p-1.5 border-b border-gray-200 bg-white text-center">
//                         <input
//                           type="text"
//                           name="volumeWeight"
//                           value={item.volumeWeight}
//                           onChange={(e) => handleGoodsChange(index, e)}
//                           className="w-full p-1.5 border border-gray-200 rounded text-xs h-7 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none"
//                         />
//                       </td>
//                       <td className="p-1.5 border-b border-gray-200 bg-white text-center">
//                         {formData.goods.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => removeGoodsRow(index)}
//                             className="px-2 py-1 bg-red-500 text-white rounded text-xs font-semibold hover:bg-red-600 transition-all transform hover:-translate-y-0.5"
//                           >
//                             Remove
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="flex justify-center mb-2">
//                 <button
//                   type="button"
//                   onClick={addGoodsRow}
//                   className="px-2 py-1 bg-green-500 text-white rounded text-xs font-semibold hover:bg-green-600 transition-all transform hover:-translate-y-0.5"
//                 >
//                   Add Row
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Party Information Section */}
//           <div className="bg-white bg-opacity-85 mb-2 p-4 rounded-md border border-blue-200">
//             <h2 className="text-blue-700 text-xs font-semibold mb-3 pb-1 border-b-2 border-blue-300 uppercase tracking-wide">
//               Party Information
//             </h2>
//             <div className="grid grid-cols-2 gap-8 mb-2">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Party Name
//                 </label>
//                 <input
//                   type="text"
//                   name="partyName"
//                   value={formData.partyName}
//                   onChange={handleChange}
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Mobile No.
//                 </label>
//                 <input
//                   type="text"
//                   name="mobileNo"
//                   value={formData.mobileNo}
//                   onChange={handleChange}
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Signature
//                 </label>
//                 <input
//                   type="text"
//                   name="signature"
//                   value={formData.signature}
//                   onChange={handleChange}
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                   Arrival Time
//                 </label>
//                 <input
//                   type="time"
//                   name="arrivalTime"
//                   value={formData.arrivalTime}
//                   onChange={handleChange}
//                   className="p-2 border border-gray-300 rounded text-sm h-9 w-full min-w-[200px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Form Actions */}
//           <div className="flex justify-center gap-3 mt-3 pt-2.5 border-t border-gray-200 print:hidden">
//             <button 
//               type="button" 
//               onClick={handlePrint}
//               className="px-3.5 py-1.5 bg-blue-500 text-white rounded text-xs font-semibold min-w-[80px] hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 hover:shadow-md"
//             >
//               Print Delivery Note
//             </button>
//             <button 
//               type="submit" 
//               className="px-3.5 py-1.5 bg-blue-700 text-white rounded text-xs font-semibold min-w-[80px] hover:bg-blue-800 transition-all transform hover:-translate-y-0.5 hover:shadow-md"
//             >
//               Submit Delivery Note
//             </button>
//             <button 
//               type="button" 
//               className="px-3.5 py-1.5 bg-gray-600 text-white rounded text-xs font-semibold min-w-[80px] hover:bg-gray-700 transition-all transform hover:-translate-y-0.5 hover:shadow-md"
//             >
//               Reset Form
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DeliveryNote;

import React, { useState } from 'react';
import {
  Truck,
  Plus,
  Pencil,
  Trash2,
  ChevronDown,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

const DeliveryNotePage = () => {
  // Sample initial data for delivery notes
  const initialDeliveryNotes = [
    {
      id: 1,
      deliveryNoteNo: 'DN001',
      orderNo: 'ORD001',
      clientName: 'ABC Trading Company',
      deliveryDate: '2024-04-01',
      deliveredBy: 'John Doe',
      address: '123 Main St, City',
    },
    {
      id: 2,
      deliveryNoteNo: 'DN002',
      orderNo: 'ORD002',
      clientName: 'XYZ Logistics',
      deliveryDate: '2024-04-03',
      deliveredBy: 'Jane Smith',
      address: '456 Market Ave, City',
    },
    {
      id: 3,
      deliveryNoteNo: 'DN003',
      orderNo: 'ORD003',
      clientName: 'Global Shipping Ltd',
      deliveryDate: '2024-04-05',
      deliveredBy: 'Alex Johnson',
      address: '789 Industrial Rd, City',
    },
    {
      id: 4,
      deliveryNoteNo: 'DN004',
      orderNo: 'ORD004',
      clientName: 'Emirates Freight',
      deliveryDate: '2024-04-07',
      deliveredBy: 'Emily Davis',
      address: '101 Business Blvd, City',
    },
    {
      id: 5,
      deliveryNoteNo: 'DN005',
      orderNo: 'ORD005',
      clientName: 'Dubai Cargo Services',
      deliveryDate: '2024-04-09',
      deliveredBy: 'Michael Brown',
      address: '202 Trade St, City',
    },
  ];

  // State variables
  const [deliveryNotes, setDeliveryNotes] = useState(initialDeliveryNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newDeliveryNote, setNewDeliveryNote] = useState({
    deliveryNoteNo: '',
    orderNo: '',
    clientName: '',
    deliveryDate: '',
    deliveredBy: '',
    address: '',
  });

  // Sorting and pagination state
  const [sortField, setSortField] = useState('deliveryNoteNo');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Add or update delivery note handler
  const handleAddDeliveryNote = () => {
    // Require delivery note number and delivery date
    if (!newDeliveryNote.deliveryNoteNo.trim() || !newDeliveryNote.deliveryDate.trim()) return;

    if (editingId) {
      // Update the existing delivery note
      const updatedNotes = deliveryNotes.map((note) =>
        note.id === editingId ? { ...note, ...newDeliveryNote } : note
      );
      setDeliveryNotes(updatedNotes);
    } else {
      // Add a new delivery note (generate a new id)
      const newId = deliveryNotes.length ? Math.max(...deliveryNotes.map((n) => n.id)) + 1 : 1;
      setDeliveryNotes([...deliveryNotes, { id: newId, ...newDeliveryNote }]);
    }
    // Reset the form and close add/edit mode
    setNewDeliveryNote({
      deliveryNoteNo: '',
      orderNo: '',
      clientName: '',
      deliveryDate: '',
      deliveredBy: '',
      address: '',
    });
    setEditingId(null);
    setIsAdding(false);
  };

  // Delete a delivery note
  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this delivery note?')) return;
    setDeliveryNotes(deliveryNotes.filter((note) => note.id !== id));
  };

  // Populate the form for editing
  const handleEdit = (note) => {
    setNewDeliveryNote({
      deliveryNoteNo: note.deliveryNoteNo,
      orderNo: note.orderNo,
      clientName: note.clientName,
      deliveryDate: note.deliveryDate,
      deliveredBy: note.deliveredBy,
      address: note.address,
    });
    setEditingId(note.id);
    setIsAdding(true);
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Apply sorting and filtering based on the search term
  const sortedNotes = [...deliveryNotes].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredNotes = sortedNotes.filter(
    (note) =>
      note.deliveryNoteNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.orderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNotes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <Truck className="w-8 h-8 mr-3 text-indigo-600" />
              DELIVERY NOTES
            </h1>
            <p className="text-gray-600 mt-2">
              Manage delivery notes for your logistics operations
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <div className="relative">
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search delivery notes..."
                  className="bg-transparent outline-none w-40"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentPage(1)}
                />
              </div>
            </div>
            <button
              onClick={() => {
                setIsAdding(!isAdding);
                setEditingId(null);
                setNewDeliveryNote({
                  deliveryNoteNo: '',
                  orderNo: '',
                  clientName: '',
                  deliveryDate: '',
                  deliveredBy: '',
                  address: '',
                });
              }}
              className={`px-5 py-2 text-white rounded-lg font-medium transition-all flex items-center shadow-md ${
                isAdding
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
              }`}
            >
              {isAdding ? (
                <>
                  <X className="w-5 h-5 mr-2" />
                  Close
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Add Delivery Note
                </>
              )}
            </button>
          </div>
        </div>

        {/* Add/Edit Delivery Note Form */}
        {isAdding && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                {editingId ? 'Edit Delivery Note' : 'Add Delivery Note'}
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Note No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Delivery Note No"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.deliveryNoteNo}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, deliveryNoteNo: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Order No
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Order No"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.orderNo}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, orderNo: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Client Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.clientName}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, clientName: e.target.value })
                      }
                    />
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.deliveryDate}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, deliveryDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivered By
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name of deliverer"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.deliveredBy}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, deliveredBy: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      placeholder="Enter delivery address"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={newDeliveryNote.address}
                      onChange={(e) =>
                        setNewDeliveryNote({ ...newDeliveryNote, address: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleAddDeliveryNote}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                >
                  {editingId ? 'Update Delivery Note' : 'Add Delivery Note'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Notes Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-600 text-white text-sm font-semibold">
              <tr>
                {[
                  { label: 'SL', key: 'sl', noSort: true },
                  { label: 'Delivery Note No', key: 'deliveryNoteNo' },
                  { label: 'Order No', key: 'orderNo' },
                  { label: 'Client Name', key: 'clientName' },
                  { label: 'Delivery Date', key: 'deliveryDate' },
                  { label: 'Delivered By', key: 'deliveredBy' },
                  { label: 'Address', key: 'address' },
                  { label: 'Actions', key: null },
                ].map(({ label, key, noSort }) => (
                  <th
                    key={label}
                    onClick={() => key && !noSort && handleSort(key)}
                    className={`px-4 py-3 text-left cursor-pointer select-none ${
                      key && !noSort ? 'hover:bg-indigo-700' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      {label}
                      {key && !noSort && sortField === key && (
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${sortDirection === 'asc' ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentNotes.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-gray-500">
                    No delivery notes found.
                  </td>
                </tr>
              ) : (
                currentNotes.map((note, index) => (
                  <tr key={note.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-center text-gray-900">
                      {index + 1 + indexOfFirstItem}
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">{note.deliveryNoteNo}</td>
                    <td className="px-4 py-3 text-gray-900">{note.orderNo}</td>
                    <td className="px-4 py-3 text-gray-900">{note.clientName}</td>
                    <td className="px-4 py-3 text-gray-900">{note.deliveryDate}</td>
                    <td className="px-4 py-3 text-gray-900">{note.deliveredBy}</td>
                    <td className="px-4 py-3 text-gray-900">{note.address}</td>
                    <td className="px-4 py-3 flex space-x-3">
                      <button
                        onClick={() => handleEdit(note)}
                        title="Edit"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(note.id)}
                        title="Delete"
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-700">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredNotes.length)} of {filteredNotes.length} results
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md hover:bg-indigo-100 disabled:opacity-50"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 rounded-md hover:bg-indigo-100 disabled:opacity-50"
                title="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryNotePage;