import type { NextPage } from "next";
import { Home } from "@/features/home";
import { useUser } from "@/hooks/useUser";

const App: NextPage = () => {
  const { user } = useUser();
  console.info(user);
  return <Home />;
};

export default App;
