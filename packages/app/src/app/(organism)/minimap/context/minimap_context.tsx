"use client";
import React, { createContext, useState, useContext } from "react";

type MinimapContextType = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const MinimapContext = createContext<MinimapContextType | undefined>(undefined);

export const MinimapProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //로그인, 회원가입 전환 상태
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <MinimapContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </MinimapContext.Provider>
  );
};

export const useMinimap = () => {
  const context = useContext(MinimapContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
