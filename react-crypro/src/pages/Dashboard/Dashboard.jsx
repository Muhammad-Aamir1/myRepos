import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap="6"
        >
          <GridItem
            colSpan={{
              base: "1",
              lg: "2",
            }}
          >
            <Portfolio />
          </GridItem>{" "}
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>{" "}
          <GridItem colSpan={1}>
            <Transactions />
          </GridItem>{" "}
          <GridItem colSpan={1}>
            <InfoCard
              inverted={true}
              ImgUrl="/images/dot.svg"
              Tagtext="Loan"
              text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            />
          </GridItem>{" "}
          <GridItem colSpan={1}>
            <InfoCard
              inverted={false}
              Tagtext="Contact"
              text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              ImgUrl="/images/grid.svg"
            />
          </GridItem>
        </Grid>{" "}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
