import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUser from "./useUser";

import { useUpdateUser } from "./useUpdateUser";
import { onEvent } from "../../utilities/formError";
import UpdatePasswordForm from "./UpdatePasswordForm";
import ButtonGroupWrapper from "../../ui/ButtonGroupWrapper";

function UpdateUserDataForm({ onCloseModal }) {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: async () => {
          await onEvent({
            type: "profile_updated",
            metadata: { fullName, avatar },
          });

          setAvatar(null);
          e.target.reset();
          onCloseModal?.();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRow label="Email address">
          <Input value={email} disabled />
        </FormRow>

        <FormRow label="Full name">
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
            disabled={isUpdating}
          />
        </FormRow>

        <FormRow label="Avatar image">
          <FileInput
            id="avatar"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
        </FormRow>
        <ButtonGroupWrapper>
          <Button
            type="reset"
            variation="secondary"
            disabled={isUpdating}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button variation="primary" disabled={isUpdating}>
            Update account
          </Button>
        </ButtonGroupWrapper>
      </Form>

      <UpdatePasswordForm />
    </>
  );
}

export default UpdateUserDataForm;
