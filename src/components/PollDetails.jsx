import { useState } from 'react';

const PollDetails = () => {
  const [polName, setPolName] = useState('');
  const [polList, setPolList] = useState([
    { id: 1, name: 'AHMEDABAD' },
    { id: 2, name: 'BUSAN' },
    { id: 3, name: 'DAMMAM' },
    { id: 4, name: 'SURABAYA' }
  ]);

  const handleAddPol = (e) => {
    e.preventDefault();
    if (polName.trim()) {
      setPolList([...polList, { id: polList.length + 1, name: polName.trim() }]);
      setPolName('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">POL DETAILS</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Add POL Details Form */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4 bg-gray-800 text-white p-2">Add Pol Details</h3>
          <form onSubmit={handleAddPol}>
            <div className="mb-4">
              <label className="block mb-2">
                Pol Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={polName}
                onChange={(e) => setPolName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Add
            </button>
          </form>
        </div>

        {/* POL List Table */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4 bg-gray-800 text-white p-2">POL LIST</h3>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Sl.No.</th>
                <th className="p-2 text-left">pol Name</th>
                <th className="p-2 text-left">EDIT</th>
              </tr>
            </thead>
            <tbody>
              {polList.map((pol) => (
                <tr key={pol.id} className="border-b">
                  <td className="p-2">{pol.id}</td>
                  <td className="p-2">{pol.name}</td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PollDetails;