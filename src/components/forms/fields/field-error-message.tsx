export default function FieldErrorMessage({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) {
  // @ts-ignore
  return <p className="text-red-500">{errorMessage}</p>;
}
