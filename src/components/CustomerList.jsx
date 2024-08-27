import CustomerDetails from "./CustomerDetails";

const CustomerList = ({ data }) => {
  return (
    <div>
      {data?.length > 0 &&
        data?.map((customer) => {
          return (
            <CustomerDetails key={customer.customerId} customer={customer} />
          );
        })}
    </div>
  );
};
export default CustomerList;
