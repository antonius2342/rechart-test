import React from 'react';

type DynamicTableProps = {
  data: { x: string; y: number }[];
  setData: (data: { x: string; y: number }[]) => void;
}

function DynamicTable ({ data, setData }: DynamicTableProps)  {
  const addRow = () => setData([...data, { x: '', y: 0 }]);

  const deleteRow = (rowIndex: number) => {
    if (data.length > 1) {
      const newData = data.filter((_, index) => index !== rowIndex);
      setData(newData);
    }
  };

  const updateCell = (rowIndex: number, key: 'x' | 'y', value: string | number) => {
    const newData = [...data];
    newData[rowIndex] = { ...newData[rowIndex], [key]: value };
    setData(newData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">X</th>
            <th className="border border-gray-300 p-2">Y </th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={row.x}
                  onChange={(e) => updateCell(rowIndex, 'x', e.target.value)}
                  className="w-full border-none focus:ring-0"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={row.y}
                  onChange={(e) => updateCell(rowIndex, 'y', Number(e.target.value))}
                  className="w-full border-none focus:ring-0"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => deleteRow(rowIndex)}
                  className="text-red-500"
                >
                  Deletea
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;
