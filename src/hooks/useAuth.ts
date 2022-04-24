import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigate("/home");
          return;
        } else {
          alert("データを取得できませんでした");
        }
      })
      .catch(() => alert("ユーザーが見つかりませんでした"))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { login, loading };
};
