import {useState} from 'react';
import Input from "../Input";
import Modal from '../Modal';
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
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  const bodyContent = (
    <div className="flex flex-col gap-8 items-center">
      <Input 
        placeholder="Name"
        type="text"
        onChange={(event) => {
          setName(event.target.value)
        }}
        value={name}
        disabled={isLoading}
      />
      <Input 
        placeholder="Email"
        type="text"
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        value={email}
        disabled={isLoading}
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        value={password}
        disabled={isLoading}
      />
      <Input 
        placeholder="Repeat password"
        type="password"
        onChange={(event) => {
          setRepeatPassword(event.target.value)
        }}
        value={repeatPassword}
        disabled={isLoading}
      />
    </div>
  )

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