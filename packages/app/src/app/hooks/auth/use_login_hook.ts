"use client";
import { useState } from "react";

import axios, { AxiosResponse } from "axios";
enum REQUEST_PORT {
  __LOGIN_PORT = "http://localhost:3001/auth/login",
  __NEXT_SERVER_PORT = "http://localhost:3000",
  __REGISTER_PORT = "http://localhost:3001/register",
  __LETTER_SERVER_PORT = "http://localhost:3002",
}

const ValidateId = (id: string): boolean => {
  const regex = /^[a-zA-Z0-9]{5,12}$/;
  return regex.test(id);
};

export interface Player {
  id: string;
  password: string;
}

/**
 * * Function : useLoginHooks
 * 작성자 : @jaemin1005 / 2024-07-?
 * 편집자 : @naviadev / 2024-07-28
 * Issue : WIB-27
 * @function useLoginHooks
 * @description
 */

const LoginAxios = async (user: Player): Promise<boolean> => {
  try {
    const response: AxiosResponse = await axios.post(
      REQUEST_PORT.__LOGIN_PORT,
      user,
      {
        withCredentials: true, // 요청에 쿠키를 포함하여 서버가 클라이언트를 인증
      }
    );

    const data = response.data;

    // 성공 여부를 반환
    return data.success;
  } catch (error) {
    console.error("An error occurred during login:", error);
    return false;
  }
};

const useLoginHooks = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = async (): Promise<boolean> => {
    //* 공백이 있으면 안됨
    if (id.trim() === "" || password.trim() === "") {
      return false;
    }
    //* 유효하지 않는 이메일 형식
    if (!ValidateId(id)) {
      return false;
    }
    const success = await LoginAxios({ id: id, password: password });
    if (success) {
      setIsLoggedIn(true);
      // router.push(ROUTE_PATH.__LETTER_VIEW);
      return true;
    } else {
      console.error("로그인 실패");
      return false;
    }
  };
  //* React Hook 반환.
  return {
    id,
    password,
    isLoggedIn,
    setId,
    setPassword,
    handleLogin,
  };
};

export default useLoginHooks;
