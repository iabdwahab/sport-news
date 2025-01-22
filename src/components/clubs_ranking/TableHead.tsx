function TableHead() {
  const data = ['GP', 'W', 'D', 'L', 'F', 'A', 'GD'];

  return (
    <thead>
      <tr>
        <th className="p-4 text-left">Club</th>
        {data.map((item, index) => (
          <th key={index} className="p-4 text-center">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHead;
