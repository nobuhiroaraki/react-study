import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Header } from "../organisms/layout/Header";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //初回実行時のみgetUsersする
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUsers(), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickUser = useCallback(() => onOpen(), []);
  return (
    <>
      <Header />
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="center">
              <UserCard
                imageUrl={`https://source.unsplash.com/random/${user.id}`}
                name={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
