import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const Page404: FC = memo(() => {
  return (
    <>
      <Header />
      <p>404ページ</p>
    </>
  );
});
