import type { NextPage } from "next";
import Head from "next/head";
import Showcase from "../components/Showcase";
import ListItem from "../components/ListItem";
import Grid from "../layout/Grid";
import List from "../components/List";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/SidebarItem";

import { productsData } from "../data/example";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="Home">
        <Sidebar>
          <SidebarItem text="Categories">
            <List>
              <ListItem>Storage</ListItem>
              <ListItem>Processors</ListItem>
              <ListItem>Monitors</ListItem>
              <ListItem>Keyboards</ListItem>
              <ListItem>Mouses</ListItem>
              <ListItem>Motherboards</ListItem>
              <ListItem>Power Supplies</ListItem>
              <ListItem>Memory</ListItem>
              <ListItem>Accesories</ListItem>
              <ListItem>Trackpads</ListItem>
              <ListItem>Cases</ListItem>
              <ListItem>Tables</ListItem>
              <ListItem>Chairs</ListItem>
              <ListItem>Sound</ListItem>
            </List>
          </SidebarItem>
        </Sidebar>

        <Grid>
          <Showcase title="Best Seller" products={productsData} />
          <Showcase title="Top Trending" products={productsData} />
          <Showcase title="Most Viewed" products={productsData} />
          <Showcase title="New Arrivals" products={productsData} />
          <Showcase title="Editor's Choice" products={productsData} />
        </Grid>
      </div>
    </>
  );
};

export default Home;
