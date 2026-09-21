import { useEffect, useState } from "react";
import type { Student } from "../../interfaces/Student";

let Standings = () => {
  let LB_API_BASE_URL = import.meta.env.VITE_LB_API_BASE_URL;

  let [list, setList] = useState<Student[]>([]);
  let position: number = 4;

  useEffect(() => {
    fetch(`${LB_API_BASE_URL}/firstPage`)
      .then((response) => response.json())
      .then((data) => setList([...list, ...data]));
  }, []);
  let handleClick = () => {
    fetch(`${LB_API_BASE_URL}/page/${position - 1}-${20}`)
      .then((response) => response.json())
      .then((data) => setList([...list, ...data]));
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl  text-center shadow-md">
        {list.map((s: Student) => (
          <div className="px-6 py-4 flex items-center justify-between border-b border-gray-600">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-500 dark:text-gray-400 w-6">
                {position++}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {s.firstName + " " + s.lastName}
                </h4>
              </div>
            </div>
            <span className="text-xs text-gray-400 dark:text-white">
              <span className="">{s.points} points</span>
            </span>
          </div>
        ))}
        <div className="px-6 py-4 text-center text-white" onClick={handleClick}>
          Show More
        </div>
      </div>
    </>
  );
};

export default Standings;
