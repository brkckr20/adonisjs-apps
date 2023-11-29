import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";
import { useQuery } from "react-query";
import { getWorks } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";
import { Zoom } from "react-awesome-reveal";

const Work = () => {
  const { data, isLoading } = useQuery("getWorks", getWorks);
  if (isLoading) {
    return <div>loading</div>;
  }
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
        <TabPanel value="all" className="!px-0">
          <div className="grid grid-cols-3 gap-4">
            {data.map((item: any, i: number) => (
              <Zoom delay={i * 200} key={i}>
                <div className="h-full" key={item.id}>
                  <GridBox height="h-full">
                    <div className="p-6">
                      <img
                        src={`${API_URL}/uploads/work/${item.image3}`}
                        alt=""
                        className="max-h-[175px]"
                      />
                    </div>
                  </GridBox>
                </div>
              </Zoom>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="mobile">Mobile</TabPanel>
        <TabPanel value="web">Web</TabPanel>
        <TabPanel value="desktop">Desktop</TabPanel>
      </Tabs>
    </div>
  );
};

export default Work;
/*

{data.map((item: any, i: number) => (
            <Zoom delay={i * 200} key={i}>
              <div className="" key={item.id}>
                <GridBox>
                  <div className="p-6">
                    <img
                      src={`${API_URL}/uploads/work/${item.image3}`}
                      alt=""
                    />
                  </div>
                </GridBox>
              </div>
            </Zoom>
          ))}
*/
