"use client";

import IconButton from "./IconButton";
import { usePathname } from "next/navigation";
import { FaBolt, FaShareAlt } from "react-icons/fa";

const ActionSideBar: React.FC = () => {
  const path = usePathname();
  return (
    <aside className="flex flex-col gap-2 absolute bottom-6 right-6">
      {path === "/problems" && (
        <>
          <IconButton>
            <FaBolt size={20} color="white" />
          </IconButton>
          <IconButton>
            <FaShareAlt size={20} color="white" />
          </IconButton>
        </>
      )}
      <IconButton>
        <FaBolt size={20} color="white" />
      </IconButton>
    </aside>
  );
};
export default ActionSideBar;
