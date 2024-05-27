import { useFormContext } from "react-hook-form";

export default function FormSubmitButton({ text }: { text: string }) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <button type="submit" disabled={isSubmitting}>
      {text}
    </button>
  );
}
