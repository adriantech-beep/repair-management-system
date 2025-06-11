import { jobOrderStatus } from "./constants";

const statusToTagName = ( status ) => {
  for (const key in jobOrderStatus) {
    if (jobOrderStatus[key].includes(status)) {
      return key === 'true' ? 'green' : 'red';
    }
  }

  return 'grey';
};

const displayPhoneDiagnosticStatus = (status) => {
  return status ? "✅" : "❌";
}

export { statusToTagName, displayPhoneDiagnosticStatus }