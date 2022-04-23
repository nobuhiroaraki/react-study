import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const UserManagement: FC = memo(() => {
  return (
    <>
      <Header />
      <p>ユーザー管理ページ</p>
    </>
  );
});
