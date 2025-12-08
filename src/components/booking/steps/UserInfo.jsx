import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function UserInfo() {
  const { register, formState: { errors } } = useFormContext();

  // Helper to get nested error without lodash
  const getError = (path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], errors);
  };

  const FormFeilds = ({ name, type, label, placeholder, required = false }) => {
    const fieldError = getError(name); // <-- FIXED

    return (
      <div className="w-full">
        <label htmlFor={name} className="block mb-1">
          {label} {required && <span className="text-red-600">*</span>}
        </label>

        <Input
          type={type}
          className="postcode w-full flex-1"
          placeholder={placeholder}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
        />

        {fieldError && (
          <p className="text-red-500 text-sm mt-1">{fieldError.message}</p>
        )}
      </div>
    );
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">Step 5: Your Information</h2>

      <main>
        <div className="flex gap-4 w-[800px]">
          <FormFeilds
            name="customer.firstName"
            type="text"
            label="First Name"
            placeholder="John"
            required
          />
          <FormFeilds
            name="customer.lastName"
            type="text"
            label="Last Name"
            placeholder="Doe"
          />
        </div>

        <div className="flex gap-4 w-[800px] mt-4">
          <FormFeilds
            name="customer.email"
            type="email"
            label="Email"
            placeholder="john@gmail.com"
            required
          />
          <FormFeilds
            name="customer.phone"
            type="number"
            label="Phone Number"
            placeholder="+1234567890"
            required
          />
        </div>
      </main>
    </section>
  );
}
