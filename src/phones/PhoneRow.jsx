import { HiEye, HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { useUpdatePhone } from "./useUpdatePhone";

import styled from "styled-components";
import CreatePhoneForm from "./CreatePhoneForm";
import ModalWindow from "../ui/ModalWindow";
import ConfirmDelete from "../ui/ConfirmDelete";
import ViewPhoneDetails from "../ui/ViewPhoneDetails";
import Menus from "../ui/Menus";
import Tag from "../ui/Tag";

import { jobOrderStatus } from "../utilities/constants";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.35fr 0.4fr 0.5fr 0.3fr 0.2fr 0.2fr;
  column-gap: 1.5rem;
  align-items: center;

  padding: 4rem 1.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: auto 3/2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cost = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-900);
  font-weight: 600;
  font-family: "Sono";
`;

function PhoneRow({ phoneDetails = {} }) {
  const {
    id: phoneId,
    image,
    phoneModel,
    imei,
    phoneCondition,
    cost,
    isCompleted,
  } = phoneDetails;

  const { mutate: deletePhone, isLoading: isDeleting } = useUpdatePhone(
    "delete",
    "Phone successfully deleted"
  );

  const { mutate: createPhone } = useUpdatePhone(
    "create",
    "Phone successfully created"
  );

  function handleDuplicate() {
    createPhone({
      image,
      phoneModel: `Copy of ${phoneModel}`,
      imei,
      phoneCondition,
      cost,
    });
  }

  const statusToTagName = (status) => {
    for (const key in jobOrderStatus) {
      if (jobOrderStatus[key].includes(status)) {
        return key === "true" ? "green" : "red";
      }
    }

    return "grey";
  };

  return (
    <TableRow>
      <div className="flex justify-center">
        <Img src={image} />
      </div>
      <p>{phoneModel}</p>
      <p>{imei}</p>
      <div className="flex wrap overflow-y-hidden max-h-40">
        { phoneCondition }
      </div>
      <Cost>{cost}</Cost>

      <Tag type={statusToTagName[isCompleted]}>
        {isCompleted === true ? "completed" : "ongoing"}
      </Tag>

      <ModalWindow>
        <Menus.Menu>
          <Menus.Toggle id={phoneId} />

          <Menus.List id={phoneId}>
            <Menus.Button onClick={handleDuplicate} icon={<HiSquare2Stack />}>
              Duplicate
            </Menus.Button>

            <ModalWindow.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </ModalWindow.Open>

            <ModalWindow.Open opens="view-details">
              <Menus.Button icon={<HiEye />}>View details</Menus.Button>
            </ModalWindow.Open>

            <ModalWindow.Open opens="delete">
              <Menus.Button icon={<MdDeleteForever />}>Delete</Menus.Button>
            </ModalWindow.Open>
          </Menus.List>
        </Menus.Menu>

        <ModalWindow.Window name="view-details">
          <ViewPhoneDetails phoneDetails={phoneDetails} />
        </ModalWindow.Window>

        <ModalWindow.Window name="edit">
          <CreatePhoneForm phoneToEdit={phoneDetails} />
        </ModalWindow.Window>

        <ModalWindow.Window name="delete">
          <ConfirmDelete
            resourceName={phoneModel}
            disabled={isDeleting}
            onConfirm={() => deletePhone(phoneId)}
          />
        </ModalWindow.Window>
      </ModalWindow>
    </TableRow>
  );
}

export default PhoneRow;
