import { memo, FC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  name: string;
  fullName: string;
  onClick(): void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, name, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          alt={name}
          margin="auto"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray" fontWeight="semibold">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
