import { createContext, ReactNode, useState } from "react";

type LoginContextType = {
  isLoginBannerOpen: boolean;
  openLoginBanner: () => void;
  closeLoginBanner: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoginBannerOpen: false,
  openLoginBanner: () => {},
  closeLoginBanner: () => {},
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginBannerOpen, setIsLoginBannerOpen] = useState(false);

  const openLoginBanner = () => {
    setIsLoginBannerOpen(true);
  };

  const closeLoginBanner = () => {
    setIsLoginBannerOpen(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoginBannerOpen,
        openLoginBanner,
        closeLoginBanner,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};