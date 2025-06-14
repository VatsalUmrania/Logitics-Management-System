
// import React, { useState, useEffect } from 'react';

// function AssignSupplier() {
//   const currentUser = 'VatsalUmrania'; // Current user's login
//   const currentDateTime = '2025-06-14 09:23:57'; // Current UTC datetime

//   // Get authentication headers
//   const getAuthHeaders = () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) throw new Error('Authentication token missing');
//     return { 
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     };
//   };

//   // Main form state
//   const [formData, setFormData] = useState({
//     selectedSupplierId: '',
//     supplierInvoiceNo: '',
//     jobNumber: '',
//     invoiceDate: '',
//     vatRate: 0.15,
//     createdBy: currentUser,
//     createdAt: currentDateTime
//   });

//   // Other state variables
//   const [supplierList, setSupplierList] = useState([]);
//   const [selectedSupplier, setSelectedSupplier] = useState(null);
//   const [items, setItems] = useState([{ purpose: '', item: '', quantity: '', amount: '' }]);
//   const [totals, setTotals] = useState({
//     totalAmount: 0,
//     vatAmount: 0,
//     billTotalWithVAT: 0,
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [lastInvoiceNumber, setLastInvoiceNumber] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch initial data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch suppliers
//         const suppliersRes = await fetch('http://localhost:5000/api/suppliers', {
//           headers: getAuthHeaders()
//         });
        
//         if (!suppliersRes.ok) {
//           throw new Error(`Failed to fetch suppliers: ${suppliersRes.status} ${suppliersRes.statusText}`);
//         }
        
//         const suppliersData = await suppliersRes.json();
//         setSupplierList(suppliersData);
        
//         // Fetch last invoice number
//         const invoiceRes = await fetch('http://localhost:5000/api/supplier-assignments/last-invoice', {
//           headers: getAuthHeaders()
//         });
        
//         if (invoiceRes.ok) {
//           const invoiceData = await invoiceRes.json();
//           if (invoiceData.lastInvoiceNumber) {
//             setLastInvoiceNumber(invoiceData.lastInvoiceNumber);
//             // Set initial invoice number
//             const nextInvoiceNumber = `INV-${String(parseInt(invoiceData.lastInvoiceNumber.replace('INV-', '')) + 1).padStart(3, '0')}`;
//             setFormData(prev => ({
//               ...prev,
//               supplierInvoiceNo: nextInvoiceNumber
//             }));
//           }
//         }
//       } catch (err) {
//         console.error('Failed to fetch data', err);
//         setError('Failed to load data. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Update selected supplier when selection changes
//   useEffect(() => {
//     if (formData.selectedSupplierId) {
//       const supplier = supplierList.find(s => s._id === formData.selectedSupplierId);
//       setSelectedSupplier(supplier);
//     } else {
//       setSelectedSupplier(null);
//     }
//   }, [formData.selectedSupplierId, supplierList]);

//   // Calculate totals when items or VAT rate changes
//   useEffect(() => {
//     let calculatedTotalAmount = 0;
//     items.forEach((item) => {
//       if (item.quantity && item.amount) {
//         calculatedTotalAmount += parseFloat(item.quantity) * parseFloat(item.amount);
//       }
//     });
    
//     const calculatedVatAmount = calculatedTotalAmount * formData.vatRate;
//     const calculatedBillTotalWithVAT = calculatedTotalAmount + calculatedVatAmount;
    
//     setTotals({
//       totalAmount: calculatedTotalAmount,
//       vatAmount: calculatedVatAmount,
//       billTotalWithVAT: calculatedBillTotalWithVAT,
//     });
//   }, [items, formData.vatRate]);

//   // Form event handlers
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleItemChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedItems = [...items];
//     updatedItems[index] = { 
//       ...updatedItems[index], 
//       [name]: value
//     };
//     setItems(updatedItems);
//   };

//   const handleAddItem = () => {
//     setItems(prev => [...prev, { purpose: '', item: '', quantity: '', amount: '' }]);
//   };

//   const handleRemoveItem = (index) => {
//     if (items.length === 1) {
//       setItems([{ purpose: '', item: '', quantity: '', amount: '' }]);
//     } else {
//       setItems(prev => prev.filter((_, i) => i !== index));
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       selectedSupplierId: '',
//       supplierInvoiceNo: lastInvoiceNumber
//         ? `INV-${String(parseInt(lastInvoiceNumber.replace('INV-', '')) + 1).padStart(3, '0')}`
//         : '',
//       jobNumber: '',
//       invoiceDate: '',
//       vatRate: 0.15,
//       createdBy: currentUser,
//       createdAt: currentDateTime
//     });
//     setItems([{ purpose: '', item: '', quantity: '', amount: '' }]);
//     setSelectedSupplier(null);
//     setError('');
//   };

//   const isFormValid = () => {
//     if (!formData.selectedSupplierId) return false;
//     if (!formData.supplierInvoiceNo.trim()) return false;
//     if (!formData.jobNumber.trim()) return false;
//     if (!formData.invoiceDate) return false;
//     if (!formData.vatRate || isNaN(parseFloat(formData.vatRate))) return false;
  
//     if (!items.length) return false;
//     for (const item of items) {
//       if (!item.item.trim() || !item.quantity || !item.amount) return false;
//     }
  
//     return true;
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');
  
//     try {
//       if (!isFormValid()) {
//         throw new Error('Please fill in all required fields');
//       }
  
//       const assignmentData = {
//         selectedSupplierId: Number(formData.selectedSupplierId),
//         supplierInvoiceNo: formData.supplierInvoiceNo.trim(),
//         jobNumber: formData.jobNumber.trim(),
//         invoiceDate: formData.invoiceDate,
//         vatRate: Number(formData.vatRate),
//         totalAmount: Number(totals.totalAmount.toFixed(2)),
//         vatAmount: Number(totals.vatAmount.toFixed(2)),
//         billTotalWithVAT: Number(totals.billTotalWithVAT.toFixed(2)),
//         items: items.map(item => ({
//           purpose: item.purpose || '',
//           item: item.item.trim(),
//           quantity: Number(item.quantity),
//           amount: Number(item.amount)
//         }))
//       };
  
//       console.log('Sending assignmentData:', assignmentData);
  
//       const response = await fetch('http://localhost:5000/api/supplier-assignments', {
//         method: 'POST',
//         headers: getAuthHeaders(),
//         body: JSON.stringify(assignmentData)
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to create assignment');
//       }
  
//       setSuccessMessage('Supplier assigned successfully!');
//       setTimeout(() => {
//         setSuccessMessage('');
//         resetForm();
//       }, 5000);
  
//     } catch (err) {
//       console.error('Assignment failed:', err);
//       setError(err.message || 'An error occurred. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-8 h-8 mr-3 text-indigo-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//             ASSIGN SUPPLIER
//           </h1>
//           <p className="text-gray-600 mt-2">Created by: {currentUser} at {currentDateTime}</p>
//         </div>

//         {/* Messages */}
//         {error && (
//           <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//             {error}
//           </div>
//         )}

//         {successMessage && (
//           <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//             {successMessage}
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <Card>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <TextInput
//                 label="Supplier"
//                 as="select"
//                 name="selectedSupplierId"
//                 value={formData.selectedSupplierId}
//                 onChange={handleFormChange}
//                 required
//               >
//                 <option key="default" value="">--Select Supplier--</option>
//                 {supplierList.map((supplier) => (
//                   <option key={supplier._id} value={supplier._id}>
//                     {supplier.name}
//                   </option>
//                 ))}
//               </TextInput>
//               <label htmlFor="supplierId">Supplier ID:</label>
// <input
//   type="text"
//   id="supplierId"
//   name="supplierId"
//   value={formData.selectedSupplierId || ''}
//   onChange={(e) => setFormData({ ...formData, selectedSupplierId: e.target.value })}
//   placeholder="Enter Supplier ID"
// />

//               <TextInput
//                 label="Job Number"
//                 name="jobNumber"
//                 value={formData.jobNumber}
//                 onChange={handleFormChange}
//                 required
//               />

//               <TextInput
//                 label="Supplier Invoice No"
//                 name="supplierInvoiceNo"
//                 value={formData.supplierInvoiceNo}
//                 onChange={handleFormChange}
//                 required
//                 readOnly={lastInvoiceNumber !== null}
//               />

//               <TextInput
//                 label="Invoice Date"
//                 type="date"
//                 name="invoiceDate"
//                 value={formData.invoiceDate}
//                 onChange={handleFormChange}
//                 required
//               />
//             </div>

//             {selectedSupplier && (
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                 <h3 className="font-semibold text-gray-700 mb-2">Supplier Details:</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-gray-600"><span className="font-medium">Name:</span> {selectedSupplier.name}</p>
//                     <p className="text-gray-600"><span className="font-medium">Address:</span> {selectedSupplier.address}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600"><span className="font-medium">Phone:</span> {selectedSupplier.phone}</p>
//                     <p className="text-gray-600"><span className="font-medium">Email:</span> {selectedSupplier.email}</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </Card>

//           {/* VAT Rate */}
//           <Card>
//             <div className="flex items-center space-x-4">
//               <label className="text-sm font-medium text-gray-700">
//                 VAT Rate
//               </label>
//               <input
//                 type="range"
//                 min="0"
//                 max="0.5"
//                 step="0.01"
//                 name="vatRate"
//                 value={formData.vatRate}
//                 onChange={handleFormChange}
//                 className="flex-1"
//               />
//               <span className="text-lg font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg">
//                 {(formData.vatRate * 100).toFixed(0)}%
//               </span>
//             </div>
//           </Card>

//           {/* Items */}
//           <Card title="Items">
//             {items.map((item, index) => (
//               <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
//                 <TextInput
//                   label="Purpose"
//                   name="purpose"
//                   value={item.purpose}
//                   onChange={(e) => handleItemChange(index, e)}
//                 />
//                 <TextInput
//                   label="Item"
//                   name="item"
//                   value={item.item}
//                   onChange={(e) => handleItemChange(index, e)}
//                   required
//                 />
//                 <TextInput
//                   label="Quantity"
//                   type="number"
//                   name="quantity"
//                   value={item.quantity}
//                   onChange={(e) => handleItemChange(index, e)}
//                   min="0"
//                   step="0.01"
//                 />
//                 <TextInput
//                   label="Amount"
//                   type="number"
//                   name="amount"
//                   value={item.amount}
//                   onChange={(e) => handleItemChange(index, e)}
//                   required
//                   min="0"
//                   step="0.01"
//                 />
//                 <div className="flex items-end">
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveItem(index)}
//                     className="px-3 py-2.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
//                     disabled={items.length === 1}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
            
//             <button
//               type="button"
//               onClick={handleAddItem}
//               className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//             >
//               Add Item
//             </button>
//           </Card>

//           {/* Totals */}
//           <Card>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Total Amount</label>
//                 <input
//                   type="text"
//                   value={`$${totals.totalAmount.toFixed(2)}`}
//                   readOnly
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">VAT Amount</label>
//                 <input
//                   type="text"
//                   value={`$${totals.vatAmount.toFixed(2)}`}
//                   readOnly
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Total with VAT</label>
//                 <input
//                   type="text"
//                   value={`$${totals.billTotalWithVAT.toFixed(2)}`}
//                   readOnly
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Form Actions */}
//           <div className="flex space-x-4">
//             <button
//               type="button"
//               onClick={resetForm}
//               className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting || !isFormValid()}
//               className={`flex-1 px-6 py-3 bg-green-600 text-white rounded-lg transition-colors ${
//                 isSubmitting || !isFormValid() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
//               }`}
//             >
//               {isSubmitting ? 'Saving...' : 'Save'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // Card Component
// const Card = ({ title, children }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     {title && (
//       <div className="bg-gray-50 px-4 py-3 border-b">
//         <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//       </div>
//     )}
//     <div className="p-4">{children}</div>
//   </div>
// );

// // TextInput Component
// const TextInput = ({
//   label,
//   type = 'text',
//   name,
//   value,
//   onChange,
//   required = false,
//   readOnly = false,
//   as,
//   children,
//   ...props
// }) => {
//   const baseClassName = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
  
//   return (
//     <div>
//       {label && (
//         <label className="block text-sm font-medium text-gray-700">
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>
//       )}
//       {as === 'select' ? (
//         <select
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={`${baseClassName} ${readOnly ? 'bg-gray-50' : ''}`}
//           required={required}
//           {...props}
//         >
//           {children}
//         </select>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={`${baseClassName} ${readOnly ? 'bg-gray-50' : ''}`}
//           required={required}
//           readOnly={readOnly}
//           {...props}
//         />
//       )}
//     </div>
//   );
// };

// export default AssignSupplier;


import React, { useState, useEffect } from 'react';

function AssignSupplier() {
  const currentUser = 'VatsalUmrania'; // Current user's login
  const currentDateTime = '2025-06-14 09:23:57'; // Current UTC datetime

  // Get authentication headers
  const getAuthHeaders = () => {
    // Using in-memory storage instead of localStorage for compatibility
    const token = 'dummy-token'; // Replace with actual token management
    if (!token) throw new Error('Authentication token missing');
    return { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  // Main form state
  const [formData, setFormData] = useState({
    selectedSupplierId: '',
    supplierInvoiceNo: '',
    jobNumber: '',
    invoiceDate: '',
    dueDate: '', // Added missing field
    paymentTerms: '', // Added missing field
    currency: 'USD', // Added missing field
    vatRate: 0.15,
    discount: 0, // Added missing field
    discountType: 'percentage', // Added missing field
    notes: '', // Added missing field
    status: 'pending', // Added missing field
    createdBy: currentUser,
    createdAt: currentDateTime,
    updatedBy: currentUser, // Added missing field
    updatedAt: currentDateTime // Added missing field
  });

  // Other state variables
  const [supplierList, setSupplierList] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [items, setItems] = useState([{ 
    purpose: '', 
    item: '', 
    description: '', // Added missing field
    category: '', // Added missing field
    quantity: '', 
    unit: '', // Added missing field
    unitPrice: '', // Changed from 'amount' to 'unitPrice' for clarity
    amount: '',
    taxRate: 0.15 // Added missing field
  }]);
  const [totals, setTotals] = useState({
    subtotal: 0, // Added missing field
    totalAmount: 0,
    discountAmount: 0, // Added missing field
    vatAmount: 0,
    billTotalWithVAT: 0,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [lastInvoiceNumber, setLastInvoiceNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Changed to false for demo

  // Mock data for demo
  useEffect(() => {
    // Mock suppliers data
    setSupplierList([
      { _id: '1', name: 'ABC Suppliers Ltd', address: '123 Main St', phone: '+1-555-0123', email: 'contact@abc.com' },
      { _id: '2', name: 'XYZ Trading Co', address: '456 Oak Ave', phone: '+1-555-0456', email: 'info@xyz.com' },
      { _id: '3', name: 'Global Materials Inc', address: '789 Pine Rd', phone: '+1-555-0789', email: 'sales@global.com' }
    ]);
    
    // Mock last invoice number
    setLastInvoiceNumber('INV-001');
    setFormData(prev => ({
      ...prev,
      supplierInvoiceNo: 'INV-002'
    }));
  }, []);

  // Update selected supplier when selection changes
  useEffect(() => {
    if (formData.selectedSupplierId) {
      const supplier = supplierList.find(s => s._id === formData.selectedSupplierId);
      setSelectedSupplier(supplier);
    } else {
      setSelectedSupplier(null);
    }
  }, [formData.selectedSupplierId, supplierList]);

  // Calculate totals when items, VAT rate, or discount changes
  useEffect(() => {
    let calculatedSubtotal = 0;
    items.forEach((item) => {
      if (item.quantity && item.unitPrice) {
        const itemTotal = parseFloat(item.quantity) * parseFloat(item.unitPrice);
        calculatedSubtotal += itemTotal;
      }
    });
    
    // Calculate discount
    let discountAmount = 0;
    if (formData.discount > 0) {
      if (formData.discountType === 'percentage') {
        discountAmount = calculatedSubtotal * (formData.discount / 100);
      } else {
        discountAmount = formData.discount;
      }
    }
    
    const totalAmount = calculatedSubtotal - discountAmount;
    const calculatedVatAmount = totalAmount * formData.vatRate;
    const calculatedBillTotalWithVAT = totalAmount + calculatedVatAmount;
    
    setTotals({
      subtotal: calculatedSubtotal,
      totalAmount: totalAmount,
      discountAmount: discountAmount,
      vatAmount: calculatedVatAmount,
      billTotalWithVAT: calculatedBillTotalWithVAT,
    });
  }, [items, formData.vatRate, formData.discount, formData.discountType]);

  // Form event handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index] = { 
      ...updatedItems[index], 
      [name]: value
    };
    
    // Calculate amount when quantity or unit price changes
    if (name === 'quantity' || name === 'unitPrice') {
      const quantity = name === 'quantity' ? parseFloat(value) || 0 : parseFloat(updatedItems[index].quantity) || 0;
      const unitPrice = name === 'unitPrice' ? parseFloat(value) || 0 : parseFloat(updatedItems[index].unitPrice) || 0;
      updatedItems[index].amount = (quantity * unitPrice).toFixed(2);
    }
    
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems(prev => [...prev, { 
      purpose: '', 
      item: '', 
      description: '',
      category: '',
      quantity: '', 
      unit: '',
      unitPrice: '',
      amount: '',
      taxRate: 0.15
    }]);
  };

  const handleRemoveItem = (index) => {
    if (items.length === 1) {
      setItems([{ 
        purpose: '', 
        item: '', 
        description: '',
        category: '',
        quantity: '', 
        unit: '',
        unitPrice: '',
        amount: '',
        taxRate: 0.15
      }]);
    } else {
      setItems(prev => prev.filter((_, i) => i !== index));
    }
  };

  const resetForm = () => {
    setFormData({
      selectedSupplierId: '',
      supplierInvoiceNo: lastInvoiceNumber
        ? `INV-${String(parseInt(lastInvoiceNumber.replace('INV-', '')) + 1).padStart(3, '0')}`
        : '',
      jobNumber: '',
      invoiceDate: '',
      dueDate: '',
      paymentTerms: '',
      currency: 'USD',
      vatRate: 0.15,
      discount: 0,
      discountType: 'percentage',
      notes: '',
      status: 'pending',
      createdBy: currentUser,
      createdAt: currentDateTime,
      updatedBy: currentUser,
      updatedAt: currentDateTime
    });
    setItems([{ 
      purpose: '', 
      item: '', 
      description: '',
      category: '',
      quantity: '', 
      unit: '',
      unitPrice: '',
      amount: '',
      taxRate: 0.15
    }]);
    setSelectedSupplier(null);
    setError('');
  };

  const isFormValid = () => {
    if (!formData.selectedSupplierId) return false;
    if (!formData.supplierInvoiceNo.trim()) return false;
    if (!formData.jobNumber.trim()) return false;
    if (!formData.invoiceDate) return false;
    if (!formData.vatRate || isNaN(parseFloat(formData.vatRate))) return false;
  
    if (!items.length) return false;
    for (const item of items) {
      if (!item.item.trim() || !item.quantity || !item.unitPrice) return false;
    }
  
    return true;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');
  
    try {
      if (!isFormValid()) {
        throw new Error('Please fill in all required fields');
      }
  
      const assignmentData = {
        selectedSupplierId: Number(formData.selectedSupplierId),
        supplierInvoiceNo: formData.supplierInvoiceNo.trim(),
        jobNumber: formData.jobNumber.trim(),
        invoiceDate: formData.invoiceDate,
        dueDate: formData.dueDate,
        paymentTerms: formData.paymentTerms,
        currency: formData.currency,
        vatRate: Number(formData.vatRate),
        discount: Number(formData.discount),
        discountType: formData.discountType,
        notes: formData.notes,
        status: formData.status,
        subtotal: Number(totals.subtotal.toFixed(2)),
        totalAmount: Number(totals.totalAmount.toFixed(2)),
        discountAmount: Number(totals.discountAmount.toFixed(2)),
        vatAmount: Number(totals.vatAmount.toFixed(2)),
        billTotalWithVAT: Number(totals.billTotalWithVAT.toFixed(2)),
        createdBy: formData.createdBy,
        createdAt: formData.createdAt,
        updatedBy: formData.updatedBy,
        updatedAt: formData.updatedAt,
        items: items.map(item => ({
          purpose: item.purpose || '',
          item: item.item.trim(),
          description: item.description || '',
          category: item.category || '',
          quantity: Number(item.quantity),
          unit: item.unit || '',
          unitPrice: Number(item.unitPrice),
          amount: Number(item.amount),
          taxRate: Number(item.taxRate)
        }))
      };
  
      console.log('Sending assignmentData:', assignmentData);
  
      // Mock API call for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      setSuccessMessage('Supplier assigned successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        resetForm();
      }, 5000);
  
    } catch (err) {
      console.error('Assignment failed:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mr-3 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            ASSIGN SUPPLIER
          </h1>
          <p className="text-gray-600 mt-2">Created by: {currentUser} at {currentDateTime}</p>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <div className="space-y-8">
          {/* Basic Information */}
          <Card title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TextInput
                label="Supplier"
                as="select"
                name="selectedSupplierId"
                value={formData.selectedSupplierId}
                onChange={handleFormChange}
                required
              >
                <option key="default" value="">--Select Supplier--</option>
                {supplierList.map((supplier) => (
                  <option key={supplier._id} value={supplier._id}>
                    {supplier.name}
                  </option>
                ))}
              </TextInput>

              <TextInput
                label="Job Number"
                name="jobNumber"
                value={formData.jobNumber}
                onChange={handleFormChange}
                required
              />

              <TextInput
                label="Supplier Invoice No"
                name="supplierInvoiceNo"
                value={formData.supplierInvoiceNo}
                onChange={handleFormChange}
                required
                readOnly={lastInvoiceNumber !== null}
              />

              <TextInput
                label="Invoice Date"
                type="date"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleFormChange}
                required
              />

              <TextInput
                label="Due Date"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleFormChange}
              />

              <TextInput
                label="Payment Terms"
                as="select"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleFormChange}
              >
                <option value="">--Select Terms--</option>
                <option value="net-30">Net 30</option>
                <option value="net-15">Net 15</option>
                <option value="net-7">Net 7</option>
                <option value="due-on-receipt">Due on Receipt</option>
                <option value="cod">Cash on Delivery</option>
              </TextInput>

              <TextInput
                label="Currency"
                as="select"
                name="currency"
                value={formData.currency}
                onChange={handleFormChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </TextInput>

              <TextInput
                label="Status"
                as="select"
                name="status"
                value={formData.status}
                onChange={handleFormChange}
              >
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="paid">Paid</option>
              </TextInput>
            </div>

            {selectedSupplier && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2">Supplier Details:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600"><span className="font-medium">Name:</span> {selectedSupplier.name}</p>
                    <p className="text-gray-600"><span className="font-medium">Address:</span> {selectedSupplier.address}</p>
                  </div>
                  <div>
                    <p className="text-gray-600"><span className="font-medium">Phone:</span> {selectedSupplier.phone}</p>
                    <p className="text-gray-600"><span className="font-medium">Email:</span> {selectedSupplier.email}</p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Tax and Discount Settings */}
          <Card title="Tax & Discount Settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    VAT Rate
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.5"
                    step="0.01"
                    name="vatRate"
                    value={formData.vatRate}
                    onChange={handleFormChange}
                    className="flex-1"
                  />
                  <span className="text-lg font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg">
                    {(formData.vatRate * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="Discount"
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleFormChange}
                  min="0"
                  step="0.01"
                />
                <TextInput
                  label="Discount Type"
                  as="select"
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleFormChange}
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount</option>
                </TextInput>
              </div>
            </div>
          </Card>

          {/* Items */}
          <Card title="Items">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Purpose</th>
                    <th className="text-left p-2">Item *</th>
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Category</th>
                    <th className="text-left p-2">Qty *</th>
                    <th className="text-left p-2">Unit</th>
                    <th className="text-left p-2">Unit Price *</th>
                    <th className="text-left p-2">Amount</th>
                    <th className="text-left p-2">Tax Rate</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <input
                          type="text"
                          name="purpose"
                          value={item.purpose}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          placeholder="Purpose"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="item"
                          value={item.item}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          placeholder="Item name"
                          required
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="description"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          placeholder="Description"
                        />
                      </td>
                      <td className="p-2">
                        <select
                          name="category"
                          value={item.category}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                        >
                          <option value="">--Select--</option>
                          <option value="materials">Materials</option>
                          <option value="labor">Labor</option>
                          <option value="equipment">Equipment</option>
                          <option value="transport">Transport</option>
                          <option value="services">Services</option>
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          min="0"
                          step="0.01"
                          placeholder="0"
                          required
                        />
                      </td>
                      <td className="p-2">
                        <select
                          name="unit"
                          value={item.unit}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                        >
                          <option value="">--Unit--</option>
                          <option value="pcs">Pieces</option>
                          <option value="kg">Kilograms</option>
                          <option value="hrs">Hours</option>
                          <option value="days">Days</option>
                          <option value="m">Meters</option>
                          <option value="sqm">Square Meters</option>
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          name="unitPrice"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          required
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={item.amount ? `$${parseFloat(item.amount).toFixed(2)}` : '$0.00'}
                          readOnly
                          className="w-full px-2 py-1 border rounded bg-gray-50"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          name="taxRate"
                          value={item.taxRate}
                          onChange={(e) => handleItemChange(index, e)}
                          className="w-full px-2 py-1 border rounded"
                          min="0"
                          max="1"
                          step="0.01"
                          placeholder="0.15"
                        />
                      </td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                          className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors text-sm"
                          disabled={items.length === 1}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button
              type="button"
              onClick={handleAddItem}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Add Item
            </button>
          </Card>

          {/* Notes */}
          <Card title="Additional Information">
            <TextInput
              label="Notes"
              as="textarea"
              name="notes"
              value={formData.notes}
              onChange={handleFormChange}
              rows="4"
              placeholder="Enter any additional notes or comments..."
            />
          </Card>

          {/* Totals */}
          <Card title="Summary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Subtotal</label>
                <input
                  type="text"
                  value={`$${totals.subtotal.toFixed(2)}`}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount</label>
                <input
                  type="text"
                  value={`$${totals.discountAmount.toFixed(2)}`}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                <input
                  type="text"
                  value={`$${totals.totalAmount.toFixed(2)}`}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">VAT Amount</label>
                <input
                  type="text"
                  value={`$${totals.vatAmount.toFixed(2)}`}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 font-bold">Total with VAT</label>
                <input
                  type="text"
                  value={`$${totals.billTotalWithVAT.toFixed(2)}`}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-green-50 font-bold text-green-800"
                />
              </div>
            </div>
          </Card>

          {/* Form Actions */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || !isFormValid()}
              className={`flex-1 px-6 py-3 bg-green-600 text-white rounded-lg transition-colors ${
                isSubmitting || !isFormValid() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
              }`}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card Component
const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {title && (
      <div className="bg-gray-50 px-4 py-3 border-b">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    )}
    <div className="p-4">{children}</div>
  </div>
);

// TextInput Component
const TextInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  readOnly = false,
  as,
  children,
  rows,
  ...props
}) => {
  const baseClassName = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {as === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClassName} ${readOnly ? 'bg-gray-50' : ''}`}
          required={required}
          {...props}
        >
          {children}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClassName} ${readOnly ? 'bg-gray-50' : ''}`}
          required={required}
          readOnly={readOnly}
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClassName} ${readOnly ? 'bg-gray-50' : ''}`}
          required={required}
          readOnly={readOnly}
          {...props}
        />
      )}
    </div>
  );
};

export default AssignSupplier;