import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";

const Work = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-white mb-4">Projects</h1>
      <Tabs
        aria-label="tabs"
        defaultValue={"all"}
        sx={{ bgcolor: "transparent" }}
      >
        <TabList disableUnderline>
          <Tab disableIndicator value="all">
            All
          </Tab>
          <Tab disableIndicator value="mobile">
            Mobile
          </Tab>
          <Tab disableIndicator value="web">
            Web
          </Tab>
          <Tab disableIndicator value="desktop">
            Desktop
          </Tab>
        </TabList>
        <TabPanel value="all">All</TabPanel>
        <TabPanel value="mobile">Mobile</TabPanel>
        <TabPanel value="web">Web</TabPanel>
        <TabPanel value="desktop">Desktop</TabPanel>
      </Tabs>
    </div>
  );
};

export default Work;
