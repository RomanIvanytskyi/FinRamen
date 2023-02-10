
import { useState } from "react";
export default function Balance() {
  const [open, setOpen] = useState(0);
  const balance = 0;
  return (
    <div>
      <div open={open === 1}>{balance}</div>
    </div>
  );
}
