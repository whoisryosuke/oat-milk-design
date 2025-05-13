import React, { ReactNode, useState } from "react";
import Box from "../Box/Box";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Stack, { StackProps } from "../Stack/Stack";

type TabItem = {
  name: string;
  content: ReactNode;
};

type Props = StackProps & {
  tabs: TabItem[];
};

const Tabs = ({ tabs, ...props }: Props) => {
  const [currentTab, setCurrentTab] = useState(
    tabs.length > 0 ? tabs[0].name : ""
  );
  const selectedTab = tabs.find((tab) => tab.name == currentTab);
  return (
    <Stack vertical {...props}>
      <ButtonGroup
        buttons={tabs.map((tab) => tab.name)}
        currentButton={currentTab}
        setCurrentLabel={setCurrentTab}
      />
      {selectedTab?.content && <Box>{selectedTab?.content}</Box>}
    </Stack>
  );
};

export default Tabs;
