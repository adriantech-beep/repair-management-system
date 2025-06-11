import useLogs from "../hooks/useLogs"

export default async function onError( error, customErrorMessage = '' ) {
  const { createLog } = useLogs();

  console.error( error )
  // await createLog( error || error.message || customErrorMessage, 'error' );
  // throw new Error(`Error: ${ error || error.message || customErrorMessage }`)
}
