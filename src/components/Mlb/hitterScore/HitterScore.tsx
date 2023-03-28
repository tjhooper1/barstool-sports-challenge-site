import HitterInfo from "./HitterInfo";

export default function HitterScore() {
  return (
    <div className="m-2 flex flex-col overflow-x-auto overflow-y-hidden divide-y">
      <h1 className="font-bold p-2">Blue Jays Hitting</h1>
      <table className="divide-y">
        <thead>
          <tr>
            <th className="text-sm text-left pr-24">Hitters</th>
            <th className="text-sm text-center px-2">AB</th>
            <th className="text-sm text-center px-2">R</th>
            <th className="text-sm text-center px-2">H</th>
            <th className="text-sm text-center px-2">RBI</th>
            <th className="text-sm text-center px-2">BB</th>
            <th className="text-sm text-center px-2">K</th>
            <th className="text-sm text-center px-2">AVG</th>
            <th className="text-sm text-center px-2">OBP</th>
            <th className="text-sm text-center px-2">SLG</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="even:bg-gray-200">
            <td className="">V. Guerrero Jr.</td>
            <td className="text-center">4</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">0</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">.206</td>
            <td className="text-center">.273</td>
            <td className="text-center">.345</td>
          </tr>
          <tr className="even:bg-gray-200">
            <td className="">V. Guerrero Jr.</td>
            <td className="text-center">4</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">0</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">.206</td>
            <td className="text-center">.273</td>
            <td className="text-center">.345</td>
          </tr>
          <tr className="even:bg-gray-200">
            <td className="">V. Guerrero Jr.</td>
            <td className="text-center">4</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">0</td>
            <td className="text-center">1</td>
            <td className="text-center">2</td>
            <td className="text-center">.206</td>
            <td className="text-center">.273</td>
            <td className="text-center">.345</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
