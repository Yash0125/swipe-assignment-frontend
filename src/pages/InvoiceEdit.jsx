import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useInvoiceListData } from "../redux/hooks";
import { Button, Table, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateEditInvoices } from "../redux/invoicesSlice";
import { BiArrowBack } from "react-icons/bi";
import InvoiceEditableLine from "../components/InvoiceEditableLine";

const InvoiceEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let selectedInvoices;
  if (location.state !== null) {
    selectedInvoices = location?.state?.ids;
  }

  const { getSelectedInvoices } = useInvoiceListData();
  const [invoices, setinvoices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedInvoices.length > 0) {
      getSelectedInvoices(selectedInvoices).then((data) => {
        console.log(data);
        setinvoices(data);
      });
    } else {
      alert("No invoices selected");
      navigate("/");
    }
    // eslint-disable-next-line 
  }, []);

  const handleUpdate = () => {
    dispatch(updateEditInvoices(invoices));
    alert("Updated successfully 🥳");
    navigate("/");
  };

  return (
    <Container fluid className="p-3">
      <div className="d-flex align-items-center">
        <BiArrowBack size={18} />
        <div className="fw-bold mt-1 mx-2 cursor-pointer">
          <Link to="/">
            <h5>Go Back</h5>
          </Link>
        </div>
      </div>
      <h1>Edit your invoices</h1>
      <Table
        bordered
        striped
        hover
        responsive
        size="lg"
        style={{ padding: "10px", borderRadius: "5px" }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} rowSpan={2}>
              Invoice NO
            </th>
            <th style={{ textAlign: "center" }} rowSpan={2}>
              Date Of Issue
            </th>
            <th style={{ textAlign: "center" }} colSpan={3}>
              Bill To
            </th>
            <th style={{ textAlign: "center" }} colSpan={3}>
              Bill From
            </th>
            <th rowSpan={2}>Tax</th>
            <th rowSpan={2}>Discount</th>
            <th rowSpan={2}>Total</th>
            <th rowSpan={2}>Items</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice, idx) => (
            <InvoiceEditableLine
              invoice={invoice}
              setinvoices={setinvoices}
              invoices={invoices}
              key={idx}
            />
          ))}
        </tbody>
      </Table>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Button
          variant="success"
          style={{ width: "70px" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </div>
    </Container>
  );
};

export default InvoiceEdit;
