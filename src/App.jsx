import { useState } from 'react';
import Navbar from './components/Navbar';
import PollDetails from './components/PollDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      
      <Navbar />
      <main className="p-4">
        <PollDetails />
      </main>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-blue-600">
//         Hello Tailwind CSS!
//       </h1>
//     </div>
//   )
// }

// export default App