import { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModalStore from "../../hooks/useLoginModalStore";
import axios from "axios";

const LoginModal = () => {
  const loginStore = useLoginModalStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://localhost:7004/api/account/login";

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, { login: email, password });
      console.log(res.data);
      loginStore.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputs = [
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: event => setEmail(event.target.value),
      required: true,
      disabled: isLoading,
      value: email,
      error: ["Email is required"],
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: event => setPassword(event.target.value),
      required: true,
      disabled: isLoading,
      value: password,
      error: ["Password is required"],
    },
  ];

  const bodyContent = (
    <div className="flex flex-col items-center gap-8">
      {inputs.map(input => {
        return (
          <div
            className="relative flex w-full flex-col gap-4"
            key={input.id}
          >
            <Input
              placeholder={input.placeholder}
              type={input.type}
              onChange={input.onChange}
              // value={input.value}
              disabled={input.disabled}
              required={input.required}
              className="relative z-10"
            />
          </div>
        );
      })}
      {/* <Input
        placeholder="Email"
        type="email"
        onChange={event => {
          setEmail(event.target.value);
        }}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={event => {
          setPassword(event.target.value);
        }}
        value={password}
        disabled={isLoading}
      /> */}
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginStore.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginStore.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;