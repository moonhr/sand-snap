import React from "react";
// import Link from "next/link";

// import useLoginHooks from "@app/src/app/hooks/auth/use_login_hook";
import { useMinimap } from "@app/src/app/(organism)/minimap/context/minimap_context";
import { useAll } from "@app/src/app/context/all_context";

const LoginForm = () => {
  // const { id, password, setId, setPassword, handleLogin } = useLoginHooks();
  const { isLogin, setIsLogin } = useMinimap();
  const { getToken, setGetToken } = useAll();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await handleLogin();
    //로그인 성공시 getToken상태 true로 전환
    await setGetToken(true);
  };

  //회원가입으로 전환
  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  return (
    <div>
      {/* <form onSubmit={onSubmit}> */}
      <input
        type="text"
        placeholder="Email"
        // value={id}
        // onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Send</button>
      {/* </form> */}
      {/* <Link href="/register">처음이신가요? 회원가입</Link> */}
      <button onClick={handleSignUpClick}>회원가입으로 이동</button>
    </div>
  );
};

export default LoginForm;
