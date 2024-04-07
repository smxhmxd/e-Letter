import { useState } from 'react';
import { Tab, Tabs } from "@nextui-org/react";
import useSettingsFilter from "@/shared/hooks/useSettingsFilter";

const SettingsTab = () => {
  const { activeItem, setActiveItem } = useSettingsFilter();
  const [selectedKey, setSelectedKey] = useState(activeItem);

  const handleSelectionChange = (key: string | number) => {
    // Assuming setActiveItem updates the active item based on the key
    setActiveItem(key as string); // Ensure key is a string if needed
    setSelectedKey(key as string); // Update selected key in the local state
  };

  return (
    <Tabs
      variant={"underlined"}
      aria-label="Tabs variants"
      selectedKey={selectedKey}
      onSelectionChange={handleSelectionChange}
    >
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize Profile" title="Customize Profile" />
    </Tabs>
  );
};

export default SettingsTab;
