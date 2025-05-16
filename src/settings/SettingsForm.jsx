import { RiUploadCloud2Fill } from "react-icons/ri";
import { useCreateSettings } from "./useCreateSettings";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useSettings } from "./useSettings";
import { useEditSettings } from "./useEditSettings";
import { useDeleteSettings } from "./useDeleteSettings";

import styled from "styled-components";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import FileInput from "../ui/FileInput";
import Button from "../ui/Button";
import PrimaryColorOptions from "./PrimaryColorOptions";
import SecondaryColorOptions from "./SecondaryColorOptions";
import ModalWindow from "../ui/ModalWindow";
import ConfirmDelete from "../ui/ConfirmDelete";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledSettingsForm = styled.form`
  height: 100%;
  padding: 2em;
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: var(--shadow-md);

  display: flex;
  align-items: center;
  gap: 2em;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1em;
  }
`;

const ImageInputWrapper = styled.div`
  width: 55rem;
  height: 30rem;
  border: 2px solid var(--color-grey-400);
  border-style: dotted;
  border-radius: 8px;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;

  & svg {
    font-size: 4rem;
  }

  img {
    width: 8rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const EditIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover::after {
    content: "Edit";
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-grey-700);
    color: var(--color-grey-50);
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;

function SettingsForm() {
  const location = useLocation();
  const settingsToEdit = location.state?.settings ?? {};

  const { settings } = useSettings();

  const { id: settingsId, company_logo } = settings ?? {};

  const isEditSession =
    settingsToEdit && Object.keys(settingsToEdit).length > 0;

  const { createSettings, isCreating } = useCreateSettings();

  const navigate = useNavigate();

  const { id: editId, ...editValues } = settingsToEdit;

  const { deleteSettings } = useDeleteSettings();

  const { register, handleSubmit, watch, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { editSettings, isEditing } = useEditSettings();

  const isUpdating = isCreating || isEditing;

  function onSubmit(data) {
    const company_logo =
      typeof data.company_logo === "string"
        ? data.company_logo
        : data.company_logo[0];

    if (isEditSession)
      editSettings(
        {
          newSettingsData: {
            ...data,
            company_logo,
            primary_color: watch("primary_color"),
            secondary_color: watch("secondary_color"),
          },
          id: editId,
        },
        {
          onSuccess: () => reset(),
        }
      );
    else
      createSettings(
        {
          ...data,
          company_logo,
          primary_color: watch("primary_color"),
          secondary_color: watch("secondary_color"),
        },
        {
          onSuccess: () => {
            reset();
            navigate("/dashboard");
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Wrapper>
      <StyledSettingsForm onSubmit={handleSubmit(onSubmit, onError)}>
        <ImageInputWrapper>
          <h1>Upload Company Logo & Name</h1>

          {settings && Object.keys(settingsToEdit).length > 0 ? (
            <img src={company_logo} alt="A sample logo of a company" />
          ) : (
            <RiUploadCloud2Fill />
          )}

          <p>Please choose a file to upload</p>
          <FileInput
            id="company_logo"
            name="company_logo"
            {...register("company_logo")}
            accept="image/*"
          />
        </ImageInputWrapper>

        <FormGroup>
          <FormRow label="Company Name" error={errors?.company_name?.message}>
            <Input
              id="company_name"
              name="company_name"
              disabled={isUpdating}
              {...register("company_name", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            label="Company Alternative Name"
            error={errors?.alternative_name?.message}
          >
            <Input
              id="alternative_name"
              name="altenative_name"
              disabled={isUpdating}
              {...register("alternative_name", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <PrimaryColorOptions register={register} watch={watch} />
          <SecondaryColorOptions register={register} watch={watch} />

          <ButtonGroup>
            <Button type="reset" disabled={isUpdating} variation="secondary">
              Reset
            </Button>
            <Button type="submit" disabled={isUpdating} variation="primary">
              {isEditSession && Object.keys(settingsToEdit).length > 0
                ? "Confirm Edit"
                : "Upload settings"}
            </Button>
          </ButtonGroup>
        </FormGroup>
      </StyledSettingsForm>

      {settings && Object.keys(settings).length > 0 && (
        <ModalWindow>
          <ModalWindow.Open opens="delete">
            <Button variation="danger" size="medium">
              Delete Settings ?
            </Button>
          </ModalWindow.Open>

          <ModalWindow.Window name="delete">
            <ConfirmDelete
              onConfirm={() => {
                deleteSettings(settingsId, {
                  onSuccess: () => {
                    navigate("/dashboard", { state: {} });
                  },
                });
              }}
            />
          </ModalWindow.Window>
        </ModalWindow>
      )}
    </Wrapper>
  );
}

export default SettingsForm;
