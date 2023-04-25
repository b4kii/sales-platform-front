import {useState} from 'react';
import Input from "../Input";
import Modal from '../Modal';
import useLoginModalStore from '../../hooks/useLoginModalStore';

const LoginModal = () => {
  const loginStore = useLoginModalStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      loginStore.onClose();
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  const bodyContent = (
    <div className="flex flex-col gap-8 items-center">
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
    </div>
  )

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