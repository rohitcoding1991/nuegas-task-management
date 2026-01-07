import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import classNames from "classnames";

function SettingTabs() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const activeTab = data.findIndex((tab) => tab.path === window.location.pathname);
    if (activeTab !== -1) {
      setValue(activeTab);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    { id: 0, label: "General", path: "/settings/general" },
    { id: 1, label: "Notification", path: "/settings/notification" }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label=""
        selectionFollowsFocus
      >
        {data.map((tab) => (
          <Link key={tab.id} href={tab.path} passHref>
            <Tab
              key={tab.id}
              label={tab.label}
              iconPosition="start"
              className={classNames(
                "!capitalize",
                "!text-sm",
                "PlusJakartaSans500",
                value === tab.id ? "!text-[--Secondary-500]" : "!text-[--Secondary-400]",
                "!border-b",
                "!border-[--Primary-500]"
              )}
            />
          </Link>
        ))}
      </Tabs>
    </Box>
  );
}

export default SettingTabs;
