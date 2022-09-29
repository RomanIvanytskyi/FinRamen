import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
export default function Transactions() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  return (
      <div>
        Recently created
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Transaction 1
          </AccordionHeader>
          <AccordionBody>Type: income Description: payment</AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Transaction 2
          </AccordionHeader>
          <AccordionBody>Type: cost Description: Buy some food</AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Transaction 4
          </AccordionHeader>
          <AccordionBody>Type: income Description: payment</AccordionBody>
        </Accordion>
      </div>
  );
}
