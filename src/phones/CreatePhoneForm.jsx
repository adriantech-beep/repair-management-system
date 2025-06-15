import { useForm } from "react-hook-form";
import { useUpdatePhone } from "./useUpdatePhone";
import { useMemo, useState } from "react";
import { getDefaultCheckValues } from "../utilities/defaultCheckValues";

import onError from "../utilities/formError";
import styled from "styled-components";
import ProgressBar from "../ui/ProgressBar";
import ViewPhoneDetails from "../ui/ViewPhoneDetails";
import CustomerSelector from "../customers/CustomerSelector";
import StepButton from "../ui/StepButton";
import PhoneForm from "./PhoneForm";
import Button from "../ui/Button";
import toast from "react-hot-toast";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 1200px;
`;

function CreatePhoneForm({ phoneToEdit = {} }) {
  const [customerID, setCustomerID] = useState(null);

  const [step, setStep] = useState(1);

  const [newPhoneData, setNewPhoneData] = useState(null);

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 3));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const setTechnician = useState("Select technician");

  const { id: editId, ...editValues } = phoneToEdit ?? {};

  const customerToEdit = editValues?.customers ?? {};
  const customerToEditId = editValues?.customers?.id ?? {};

  const isEditSession = Boolean(editId);

  const defaultCheckValues = isEditSession
    ? getDefaultCheckValues(editValues)
    : getDefaultCheckValues();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    setValue,
    control,
    setError,
    clearErrors,
    watch,
  } = useForm({
    defaultValues: isEditSession ? defaultCheckValues || phoneToEdit : {},
    mode: "onChange",
  });

  const checklistFields = useMemo(
    () => [
      "simtray",
      "simcard",
      "memorycard",
      "spen",
      "charger",
      "brokenScreen",
      "bulgedBattery",
      "brokenChargingpin",
      "brokenBackcover",
    ],
    []
  );

  const handleCheckboxChange = (e) => {
    setValue(e.target.name, e.target.checked, {
      shouldValidate: true,
    });

    const values = watch();
    const isAnyChecked = checklistFields.some((field) => values[field]);

    if (!isAnyChecked) {
      setError("checklistGroup", {
        type: "manual",
        message: "At least one checkbox must be selected",
      });
    } else {
      clearErrors("checklistGroup");
    }
  };

  const { mutate: createPhone, isLoading: isCreating } = useUpdatePhone(
    "create",
    "Phone details successfully created"
  );

  const { mutate: editPhone, isLoading: isEditing } = useUpdatePhone(
    "edit",
    "Phone details successfully edited"
  );

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const { phoneModel, imei, phoneCondition, cost, assignee } = data;

    const image = typeof data.image === "string" ? data.image : data.image[0];

    const isAnyChecked = checklistFields.some((field) => data[field]);

    if (!isAnyChecked) {
      setError("checklistGroup", {
        type: "manual",
        message: "At least one checkbox must be selected",
      });
      return;
    }

    clearErrors("checklistGroup");

    if (isEditSession) {
      editPhone(
        {
          newPhoneData: {
            ...{ phoneModel, phoneCondition, imei, cost, assignee },
            image,
            customer_id: isEditSession ? customerToEditId : customerID,
          },
          id: editId,
        },
        {
          onSuccess: ([updatedPhone]) => {
            setNewPhoneData(updatedPhone);
            nextStep();
          },
          onError: (error) => {
            toast.error(`Failed to edit phone: ${error}`);
          },
        }
      );
    } else {
      createPhone(
        { ...data, image: image, customer_id: customerID },
        {
          onSuccess: (jobOrder) => {
            setNewPhoneData(jobOrder);
            reset();
            nextStep();
          },
          onError: (error) => {
            toast.error("Failed to create phone:", error);
          },
        }
      );
    }
  }

  return (
    <StyledFormContainer>
      <ProgressBar
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        isEditSession={isEditSession}
      />
      {step === 1 && (
        <CustomerSelector
          setCustomerID={setCustomerID}
          customerToEdit={customerToEdit}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <PhoneForm
          onSubmit={onSubmit}
          onError={onError}
          errors={errors}
          isWorking={isWorking}
          handleSubmit={handleSubmit}
          control={control}
          register={register}
          isEditSession={isEditSession}
          handleCheckboxChange={handleCheckboxChange}
          setTechnician={setTechnician}
          isCreating={isCreating}
          isValid={isValid}
          isSubmitting={isSubmitting}
          clearErrors={clearErrors}
        />
      )}

      {step === 3 && (
        <ViewPhoneDetails
          phoneDetails={newPhoneData}
          phoneToEdit={phoneToEdit}
          customerToEdit={customerToEdit}
          isEditSession={isEditSession}
        />
      )}

      {isEditSession && (
        <StepButton nextStep={nextStep} prevStep={prevStep} step={step} />
      )}

      {step === 3 && !isEditSession && (
        <div className="w-full flex justify-end">
          <Button
            type="primary"
            onClick={() => {
              reset();
              setNewPhoneData(null);
              setCustomerID(null);
              setStep(1);
            }}
          >
            New Job Order
          </Button>
          <Button type="secondary">Close</Button>
        </div>
      )}
    </StyledFormContainer>
  );
}

export default CreatePhoneForm;
