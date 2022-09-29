import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Tooltip
} from "@material-tailwind/react";

export default function AddCosts() {
  const data = [
    {
      label: "Income",
      value: "income",
      desc: (
        <div className="flex w-full items-end gap-4">
          <Tooltip content="Choose income type">
            <Select className="text" label="Choose field">
              <Option>Payment day</Option>
              <Option>Mom`s support</Option>
              <Option>Debt repayment</Option>
              <Option>Entertaiment</Option>
              <Option>Accessories</Option>
            </Select>
          </Tooltip>
        </div>
      ),
    },
    {
      label: "Spend",
      value: "spend",
      desc: (
        <div className="flex w-full items-end gap-4">
                 <Tooltip content="Select a cost category">
          <Select className="text" label="Cost category">
            <Option>Food</Option>
            <Option>Coffee and restaraunts</Option>
            <Option>Internet and other</Option>
            <Option>Entertaiment</Option>
          </Select>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Tabs value="spend" className="addCosts">
      <TabsHeader className="text">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="addCosts">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
