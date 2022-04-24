import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/layout/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
      {[...Array(100)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            name="ニックネーム"
            fullName="フルネーム"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
