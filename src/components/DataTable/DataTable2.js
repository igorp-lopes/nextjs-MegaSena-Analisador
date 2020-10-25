import React from 'react';

export default function DataTable2() {
  return (
    <div className=" right col s6">
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Item Name</th>
            <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Griezmann</td>
            <td>Petit Gateau</td>
            <td>$1.50</td>
          </tr>
          <tr>
            <td>Miguel</td>
            <td>Chocolate</td>
            <td>$0.40</td>
          </tr>
          <tr>
            <td>Victor</td>
            <td>Marhsmellow</td>
            <td>$1.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
