import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gap={6}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >
        <GridItem colSpan={{base:1, lg:2,}}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgurl="/yellow.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagtext="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgurl="/purple.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagtext="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
