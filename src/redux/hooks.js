import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };

  const getSelectedInvoices = async (receivedIds) => {
    const selectedInvoice = [];

    for (const id of receivedIds) {
      const newInvoice = await getOneInvoice(id);
      selectedInvoice.push(newInvoice);
    }

    return selectedInvoice;
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
    getSelectedInvoices
  };
};
