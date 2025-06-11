import styled from "styled-components";
import Tag from "./Tag";
import { formatTimestamp } from '../helpers/formatTime';
import { statusToTagName, displayPhoneDiagnosticStatus } from '../utilities/helpers';

const StyledPhoneDetails = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

const ImageAndStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 1.4rem;
  }
`;

const Image = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 1em;

  img {
    width: 100%;
  }
`;
const Details = styled.div`
  width: 100%;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;

  span {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 0.5em;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 4px;
    font-size: 1.4rem;
  }
`;

function ViewPhoneDetails({
  phoneDetails = {},
  phoneToEdit = {},
  customerToEdit = {},
  isEditSession,
}) {
  const {
    created_at,
    image,
    phoneModel,
    imei,
    phoneCondition,
    simtray,
    simcard,
    memorycard,
    spen,
    charger,
    brokenScreen,
    bulgedBattery,
    brokenChargingpin,
    status,
    customers
  } = phoneDetails;

  return (
    <a className="flex flex-col gap-10 items-center bg-white rounded-lg md:flex-row ">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-2/4 md:rounded-none md:rounded-s-lg" src={ image } alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Tag 
          className="mb-5"
          type={statusToTagName(status)}>
          { status }
        </Tag>
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">{ phoneModel }</h2>
        <p className="text-base">IMEI: { imei }</p>
        <p className="text-base">Created on: {formatTimestamp(created_at)}</p>
        <p 
          className="my-10 font-normal text-gray-700 dark:text-gray-400">
          { phoneCondition }
        </p>

        <div>
          <p>SIM Tray: { displayPhoneDiagnosticStatus(simtray) }</p>
          <p>SIM Card: { displayPhoneDiagnosticStatus(simcard) }</p>
          <p>Memory Card: { displayPhoneDiagnosticStatus(memorycard) }</p>
          <p>SPEN: { displayPhoneDiagnosticStatus(spen) }</p>
          <p>Charger: { displayPhoneDiagnosticStatus(charger) }</p>
          <p>Broken Screen: { displayPhoneDiagnosticStatus(brokenScreen) }</p>
          <p>Bulged Battery: { displayPhoneDiagnosticStatus(bulgedBattery) }</p>
          <p>Broken Charging Pin: { displayPhoneDiagnosticStatus(brokenChargingpin) }</p>
        </div>

        <div className="py-2 my-5">
          <p className="font-bold">{customers?.name}</p>
          <p>{customers?.phoneNumber}</p>
          <p>{customers?.address}</p>
        </div>
      </div>
    </a>
  )
}

export default ViewPhoneDetails;
