import PhonesTable from "../phones/PhonesTable";
import Row from "../ui/Row";
import AddPhone from "../phones/AddPhone";
import PhonetableOperation from "../phones/PhonetableOperation";

function Phones() {
  return (
    <div
      className="my-10">
      <Row 
        className="mb-10"
        type="horizontal">
        <PhonetableOperation />
        <AddPhone /> 
      </Row>

      <Row type="vertical">
        <PhonesTable />
      </Row>
    </div>
  );
}

export default Phones;
