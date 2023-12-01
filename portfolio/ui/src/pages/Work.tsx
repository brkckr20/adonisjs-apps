import { useState } from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";
import { useQuery } from "react-query";
import { getWorks } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Work = () => {
  const { data, isLoading } = useQuery("getWorks", getWorks);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  if (isLoading) {
    return <div>loading</div>;
  }

  const filteredData = data.filter((item: any) => {
    if (selectedTab === "all") {
      return true;
    } else {
      return item.category === selectedTab;
    }
  });

  return (
    <div className="">
      <h1 className="text-4xl text-white mb-4">Projects</h1>
      <Tabs
        aria-label="tabs"
        defaultValue={"all"}
        sx={{ bgcolor: "transparent" }}
      >
        <TabList disableUnderline>
          {["all", "mobile", "web", "desktop"].map((item) => (
            <Tab
              key={item}
              disableIndicator
              value={item}
              onClick={() => setSelectedTab(item)}
            >
              {capitalizeFirstLetter(item)}
            </Tab>
          ))}
        </TabList>
        {["all", "mobile", "web", "desktop"].map((tabValue) => (
          <TabPanel key={tabValue} value={tabValue} className="!px-0">
            <div className="grid grid-cols-4 gap-4">
              {filteredData
                .filter((item: any) =>
                  tabValue === "all" ? true : item.category === tabValue
                )
                .map((item: any, i: number) => (
                  <Zoom delay={i * 200} key={i}>
                    <div className="h-full" key={item.id}>
                      <Link to={`/works/${item.slug}`}>
                        <GridBox height="h-full">
                          <div className="p-6 ">
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={`${API_URL}/uploads/work/${item.image1}`}
                                alt=""
                                className="hover:scale-110 duration-200"
                                width={250}
                                height={150}
                              />
                            </div>
                            <div>
                              <h2 className="uppercase text-sm text-forty mt-3">
                                {item.category}
                              </h2>
                              <h1 className="text-[20px] text-white mt-3">
                                {item.title}
                              </h1>
                            </div>
                          </div>
                        </GridBox>
                      </Link>
                    </div>
                  </Zoom>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Work;

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
