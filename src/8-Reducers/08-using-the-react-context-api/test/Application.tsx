import { useContext, createContext } from "react";
import { IIntroduction } from "../../../1-Introduction/model/IIntroduction";


const UserContext = createContext("mirko");

const Application: React.FC<IIntroduction> = () => {
  const userName = "fabio";
  return (
    <UserContext.Provider value={userName}>
      <Layout />
    </UserContext.Provider>
  );
};
const Layout: React.FC<IIntroduction> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
const Header: React.FC = () => {
  return (
    <header>
      <UserInfo />
    </header>
  );
};
const UserInfo = () => {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
};

export default Application;
