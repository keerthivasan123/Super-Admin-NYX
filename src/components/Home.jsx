import React from "react";
import Layout from "./Layout";
import { Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import StatisticsChartWidget from "./charts/StatsCharts";
import OverviewChart from "./charts/OverView";
import SalesChart from "./charts/SalesChart";
import RevenueChart from "./charts/Revenue";
import TargetChart from "./charts/Target";
import { Map, DollarSign } from "react-feather";

function Home() {
  return (
    <Layout>
      <div class="row page-title align-items-center">
        <div class="col-sm-4 col-xl-6">
          <h4 class="mb-1 mt-0">Dashboard</h4>
        </div>
      </div>
      <React.Fragment>
        <Row>
          <Col md={6} xl={3}>
            <StatisticsChartWidget
              description="Today Revenue"
              title="Rs 2100"
              data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
              trend={{
                textClass: "text-success",
                icon: "uil uil-arrow-up",
                value: "10.21%",
              }}
            ></StatisticsChartWidget>
          </Col>

          <Col md={6} xl={3}>
            <StatisticsChartWidget
              description="No. of Users"
              title="1065"
              colors={["#f77e53"]}
              data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
              trend={{
                textClass: "text-danger",
                icon: "uil uil-arrow-down",
                value: "5.05%",
              }}
            ></StatisticsChartWidget>
          </Col>

          <Col md={6} xl={3}>
            <StatisticsChartWidget
              description="No. of Admins "
              title="11"
              colors={["#43d39e"]}
              data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
              trend={{
                textClass: "text-success",
                icon: "uil uil-arrow-up",
                value: "25.16%",
              }}
            ></StatisticsChartWidget>
          </Col>

          <Col md={6} xl={3}>
            <StatisticsChartWidget
              description="No. of Bookings Done"
              title="750"
              colors={["#ffbe0b"]}
              data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
              trend={{
                textClass: "text-danger",
                icon: "uil uil-arrow-down",
                value: "5.05%",
              }}
            ></StatisticsChartWidget>
          </Col>
        </Row>
        <Row>
          <Col xl={3}>
            <OverviewChart
              items={[
                {
                  title: "121,000",
                  description: "Total Revenue",
                  icon: DollarSign,
                },
                {
                  title: "21,000",
                  description: "Total places booked",
                  icon: Map,
                },
                {
                  title: "$21.5",
                  description: "Revenue Per Place",
                  icon: DollarSign,
                },
              ]}
            ></OverviewChart>
          </Col>

          <Col xl={6}>
            <RevenueChart />
          </Col>
          <Col xl={3}>
            <TargetChart />
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <SalesChart />
          </Col>
          <Col sm={7}>
            <Card>
              <CardBody className="pb-0">
                <h5 className="card-title mt-0 mb-0 header-title">
                  Recent Orders
                </h5>

                <Table hover responsive className="mt-4">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Place Name</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#98754</td>
                      <td>Kodaikanal Resort</td>
                      <td>Otto B</td>
                      <td>$79.49</td>
                      <td>
                        <span className="badge badge-soft-success py-1">
                          Delieverd
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#98753</td>
                      <td>Beach resort Ecr</td>
                      <td>Mark P</td>
                      <td>$125.49</td>
                      <td>
                        <span className="badge badge-soft-danger py-1">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#98752</td>
                      <td>EVP park</td>
                      <td>Dave B</td>
                      <td>$35.49</td>
                      <td>
                        <span className="badge badge-soft-success py-1">
                          Delivered
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#98751</td>
                      <td>Mint Factory</td>
                      <td>Shreyu N</td>
                      <td>$49.49</td>
                      <td>
                        <span className="badge badge-soft-success py-1">
                          Delivered
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#98750</td>
                      <td>Boat House</td>
                      <td>Rik N</td>
                      <td>$69.49</td>
                      <td>
                        <span className="badge badge-soft-danger py-1">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    </Layout>
  );
}

export default Home;
