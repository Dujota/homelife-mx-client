import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { X, Upload } from "lucide-react";
import InputField from "../fields/dynamic-input-field";

const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  file: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ContactAgentForm component
interface ContactAgentFormProps {
  agentName: string;
  agentImage: string;
  onClose: () => void;
}

const ContactAgentForm: React.FC<ContactAgentFormProps> = ({
  agentName,
  agentImage,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Image
            src={agentImage}
            alt={agentName}
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <h2 className="text-xl font-semibold">{agentName}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-silver cursor-pointer bg-transparent"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <InputField
        label="Name"
        name="name"
        type="text"
        placeholder="Ex. John Doe"
        control={control}
        error={errors.name?.message}
      />
      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Ex. +01 234567887"
        control={control}
        error={errors.phone?.message}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Ex. mail@email.com"
        control={control}
        error={errors.email?.message}
      />
      {/* <FileUploadField control={control} /> */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactAgentForm;
