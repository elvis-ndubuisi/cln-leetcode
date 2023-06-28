"use client";
import problemSets from "@/utils/mocks/problemSets";
import React from "react";

type ProblemTableProps = {};

const ProblemTable: React.FC<ProblemTableProps> = () => {
  return (
    <>
      <tbody className="text-white">
        {problemSets.map((problem, pIdx) => {
          return (
            <tr
              key={pIdx}
              className={`${pIdx % 2 === 1 ? "bg-dark-layer-1" : ""}`}
            >
              <th className=""></th>
            </tr>
          );
        })}
      </tbody>
      <div>modal</div>
    </>
  );
};
export default ProblemTable;
