import React from "react";
import {
  Row,
  Col,
  Card, 
  CardBody,
  Input,
} from "reactstrap"; 
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import "./booking.css";
import swal from "sweetalert";

function Bookings() {
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;

  function deletefn(e) {
    swal({
      title: "Are you sure?",
      text: "You want to Delete the User?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        swal("Deleted!", "User Deleted Successfully", "success");
      }
    });
  }

  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }) => (
    <React.Fragment>
      <label className="d-inline mr-1">Show</label>
      <Input
        type="select"
        name="select"
        id="no-entries"
        className="custom-select custom-select-sm d-inline col-2"
        defaultValue={currSizePerPage}
        onChange={(e) => onSizePerPageChange(e.target.value)}
      >
        {options.map((option, idx) => {
          return <option key={idx}>{option.text}</option>;
        })}
      </Input>
      <label className="d-inline ml-1">entries</label>
    </React.Fragment>
  );

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerClasses: "custom-id-cell",
    },
    {
      dataField: "place",
      text: "Place",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      // headerStyle: { width: "10%" },
    },
    {
      dataField: "fromDate",
      text: "From Date",
      sort: true,
    },
    {
      dataField: "toDate",
      text: "To Date",
      sort: true,
    },
    // {
    //   dataField: "status",
    //   text: "Payment Status",
    //   sort: true,
    // },
    {
      dataField: "actions",
      text: "Actions",
      sort: false,
      formatter: (cellContent, row) => (
        <div className="d-flex">
          <Link to="/view-booking">
            {" "}
            <button className="btn btn-primary mr-3">View</button>
          </Link>
        </div>
      ),
    },
  ];

  const records = [
    {
      id: 1,

      place: "Kodaikanal Resort",
      price: "Rs. 40000",
      fromDate: "12/05/2020",
      toDate: "25/05/2020",
    },
    {
      id: 2,

      place: "Panama Beech House",
      price: "Rs 500000",
      fromDate: "25/05/2020",
      toDate: "31/05/2020",
    },
    {
      id: 3,

      place: "Goa Beach Resort ",
      price: "Rs.40000",
      fromDate: "31/05/2020",
      toDate: "20/06/2020",
    },
  ];

  return (
      <Card className="m-3">
        <CardBody>
          <h3 className="header-title mt-0 mb-1">Bookings</h3>
          <p className="sub-header"></p>

          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={records}
            columns={columns}
            search
            exportCSV={{ onlyExportFiltered: true, exportAll: false }}
          >
            {(props) => (
              <React.Fragment>
                <Row>
                  <Col>
                    <SearchBar {...props.searchProps} />
                  </Col>
                  <Col className="text-right">
                    <ExportCSVButton
                      {...props.csvProps}
                      className="btn btn-primary"
                    >
                      Export CSV
                    </ExportCSVButton>
                  </Col>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  style={{tableLayout: "auto"}}
                  bordered={false}
                  defaultSorted={defaultSorted}
                  condensed={true}
                  pagination={paginationFactory({
                    sizePerPage: 5,
                    sizePerPageRenderer: sizePerPageRenderer,
                    sizePerPageList: [
                      { text: "5", value: 5 },
                      { text: "10", value: 10 },
                      { text: "25", value: 25 },
                      { text: "All", value: records.length },
                    ],
                  })}
                  wrapperClasses="table-responsive table "
                />
              </React.Fragment>
            )}
          </ToolkitProvider>
        </CardBody>
      </Card>
  );
}

export default Bookings;
