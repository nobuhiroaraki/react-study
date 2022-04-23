import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const Home: FC = memo(() => {
  return (
    <>
      <Header />
      <p>HOMEページ</p>
    </>
  );
});
