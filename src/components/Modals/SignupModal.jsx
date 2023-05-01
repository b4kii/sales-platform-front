import { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useSignupModalStore from "../../hooks/useSignupModalStore";

const SignupModal = () => {
  const signupStore = useSignupModalStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      signupStore.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Name",
      onChange: event => setName(event.target.value),
      pattern: "^[A-Za-z0-9]{4,10}$",
      required: true,
      disabled: isLoading,
      value: name,
      error:
        "Name must contain only letters and numbers and be from 4-10 characters long",
    },
    {
      id: 2,
      type: "email",
      placeholder: "Email",
      onChange: event => setEmail(event.target.value),
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
      disabled: isLoading,
      value: email,
      error: "Email error",
    },
    {
      id: 3,
      type: "password",
      placeholder: "Password",
      onChange: event => setPassword(event.target.value),
      pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
      required: true,
      disabled: isLoading,
      value: password,
      error: `Password is required, should be at least 8 characters long, contain at least one digit, at least one lowercase letter, at least one uppercase letter, should not contain any spaces`
    },
    {
      id: 4,
      type: "password",
      placeholder: "Repeat password",
      onChange: event => setRepeatPassword(event.target.value),
      pattern: password,
      required: true,
      disabled: isLoading,
      value: repeatPassword,
      error: "Passwords do not match!",
    },
  ];

  const bodyContent = (
    <div className="flex flex-col items-center gap-12">
      {inputs.map(input => (
        <div
          className="relative flex w-full flex-col gap-4"
          key={input.id}
        >
          <Input
            placeholder={input.placeholder}
            type={input.type}
            onChange={input.onChange}
            value={input.value}
            disabled={input.disabled}
            required={input.required}
            pattern={input.pattern}
            className="relative z-10"
          />
          <p className="-z-1 absolute left-1/2 top-[50%] w-full -translate-x-1/2 text-center text-sm text-red-400 transition-[top] duration-300 ease-in-out peer-invalid:peer-data-[focused='true']:top-14">
            <span>{input.error}</span>
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={signupStore.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={signupStore.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  );
};

export default SignupModal;
