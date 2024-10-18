import { useFormContext } from "react-hook-form";

export default function FormSubmitButton({ text }: { text: string }) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="my-5 w-full py-2 px-4 bg-primary max-w-[300px] text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
}
