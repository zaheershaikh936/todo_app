import { useSelector } from "react-redux";

const HederConfig = () => {
  console.log("coming in header");
  const isLogin = useSelector((store: any) => store.auth);
  const token: string = isLogin?.jwt;
  return token;
};

export default HederConfig;
