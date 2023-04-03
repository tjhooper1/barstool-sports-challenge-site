import { BatterStats } from "../../../types/BatterStats";
import HitterInfo from "./HitterInfo";

interface props {
  hitters: BatterStats[];
}

export default function HitterScore({ hitters }: props) {
  const firstHitter = hitters[0];
  console.log(hitters);
  const {
    first_name,
    last_name,
    at_bats,
    runs,
    hits,
    rbi,
    walks,
    strike_outs,
    avg_string,
    obp_string,
    slg_string,
  } = firstHitter;

  const getFirstInitial = (name: string) => {
    const nameArray = name.split(" ");
    return nameArray[0].charAt(0) + ".";
  };

  return (
    <div className="m-2 flex flex-col overflow-x-auto overflow-y-hidden divide-y border-b-2">
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
            <th className="text-sm text-center px-2">avg_string</th>
            <th className="text-sm text-center px-2">obp_string</th>
            <th className="text-sm text-center px-2">slg_string</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="even:bg-gray-00">
            <td className="">{`${getFirstInitial(
              first_name
            )} ${last_name}`}</td>
            <td className="text-center">{at_bats}</td>
            <td className="text-center">{runs}</td>
            <td className="text-center">{hits}</td>
            <td className="text-center">{rbi}</td>
            <td className="text-center">{walks}</td>
            <td className="text-center">{strike_outs}</td>
            <td className="text-center">{avg_string}</td>
            <td className="text-center">{obp_string}</td>
            <td className="text-center">{slg_string}</td>
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
