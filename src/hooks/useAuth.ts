import { useMessage } from "./useMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState<boolean>(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
            return;
          } else {
            showMessage({
              title: "データを取得できませんでした",
              status: "error",
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({
            title: "ユーザーIDが見つかりませんでした",
            status: "warning",
          });
          setLoading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, loading };
};
