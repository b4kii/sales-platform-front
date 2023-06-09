import { useEffect, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useSignupModalStore from "../../hooks/useSignupModalStore";
import zxcvbn from "zxcvbn";
import InputError from "../InputError";


// TODO: Refactor this code
const SignupModal = () => {
  const signupStore = useSignupModalStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const [passwordMeterMessage, setPasswordMeterMessage] =
    useState("");
  const [passwordMeterStyles, setPasswordMeterStyles] = useState("");
  const [passwordScore, setPasswordScore] = useState(0);

  const handlePasswordChange = event => {
    setPassword(event.target.value);
    setPasswordScore(zxcvbn(password).score);
  };

  useEffect(() => {
    if (password === "") {
      setPasswordMeterStyles("");
      setPasswordMeterMessage("");
    } else {
      switch (passwordScore) {
        case 0:
          setPasswordMeterStyles("bg-red-700 w-[20%]");
          setPasswordMeterMessage("Very weak password!");
          break;
        case 1:
          setPasswordMeterStyles("bg-red-400 w-[40%]");
          setPasswordMeterMessage("Weak password!");
          break;
        case 2:
          setPasswordMeterStyles("bg-orange-400 w-[60%]");
          setPasswordMeterMessage("Medium password!");
          break;
        case 3:
          setPasswordMeterStyles("bg-lime-700 w-[80%]");
          setPasswordMeterMessage("Strong password!");
          break;
        case 4:
          setPasswordMeterStyles("bg-lime-400 w-[100%]");
          setPasswordMeterMessage("Very strong password!");
          break;
      }
    }
  }, [passwordScore, password]);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      signupStore.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setIsLoading(false);
    }
  };

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Name",
      onChange: event => setName(event.target.value),
      pattern: "^[A-Za-z0-9]{4,20}$",
      required: true,
      disabled: isLoading,
      value: name,
      error: [
        "Name is required",
        "Must contain only letters and numbers",
        "Should be from 4-20 characters long",
      ],
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: event => setEmail(event.target.value),
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
      disabled: isLoading,
      value: email,
      error: ["Email is required", "Provide valid email format"],
    },
    {
      id: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: handlePasswordChange,
      pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*\s?).{8,}",
      required: true,
      disabled: isLoading,
      value: password,
      error: [
        "Password is required",
        "Should be at least 8 characters long",
        "Contain at least one digit",
        "At least one lowercase letter",
        "At least one uppercase letter",
      ],
    },
    {
      id: 4,
      type: "password",
      name: "rePassword",
      placeholder: "Repeat password",
      onChange: event => setRepeatPassword(event.target.value),
      pattern: password,
      required: true,
      disabled: isLoading,
      value: repeatPassword,
      error: ["Passwords do not match!"],
    },
  ];

  const bodyContent = (
    <div className="flex flex-col items-center gap-8">
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
          <InputError errorsList={input.error}/>
          {input.name === "password" && (
            <>
              <div className="mx-auto h-[10px] w-[90%] rounded-xl bg-white">
                <div
                  className={`h-[10px] rounded-xl transition-[width] duration-500 ${passwordMeterStyles}`}
                ></div>
                <div className="py-2 text-center text-sm font-semibold text-purple-800 dark:text-white">
                  {passwordMeterMessage.length > 0 ? passwordMeterMessage : "Password meter"}
                </div>
              </div>
            </>
          )}
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
      onClose={() => {
        setName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        signupStore.onClose();
      }}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  );
};

export default SignupModal;
