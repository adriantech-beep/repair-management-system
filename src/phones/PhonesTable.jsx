import { usePhones } from "./usePhones";

import PhoneRow from "./PhoneRow";
import Menus from "../ui/Menus";
import Table from "../ui/Table";
import Pagination from "../ui/Pagination";
import Loader from "../ui/Loader";

function PhonesTable() {
  const { isLoading, phones, count } = usePhones();

  if (isLoading) return <Loader />;
  return (
    <Menus>
      <Table columns="0.4fr 0.35fr 0.4fr 0.5fr 0.3fr 0.2fr 0.2fr">
        <Table.Header role="row">
          <div>Image</div>
          <div>Phone Model</div>
          <div>IMEI</div>
          <div>Phone Condition</div>
          <div>Cost</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={phones}
          render={(phoneDetails) => (
            <PhoneRow phoneDetails={phoneDetails} key={phoneDetails.id} />
          )}
        />
      </Table>

      <Table.Footer className="mt-auto">
        <Pagination count={count} />
      </Table.Footer>
    </Menus>
  );
}

export default PhonesTable;
