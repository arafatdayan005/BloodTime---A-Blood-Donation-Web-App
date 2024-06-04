import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface UserData {
  name: string;
  email: string;
  password: string;
  bio?: string;
  location?: string;
  age?: number;
  bloodType?: string;
  lastDonationDate?: string;
}

interface StepperContextType {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export function UseContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    bio: "",
    location: "",
    age: undefined,
    bloodType: "",
    lastDonationDate: "",
  });

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error(
      "useStepperContext must be used within a UseContextProvider"
    );
  }
  return context;
}
