import { memo, FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose(): void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>ユーザー名</FormLabel>
                <Input value="tmp" isReadOnly />
                <FormLabel>フルネーム</FormLabel>
                <Input value="hogehogfugafuga" isReadOnly />
                <FormLabel>メールアドレス</FormLabel>
                <Input value="piyo@gmail.com" isReadOnly />
                <FormLabel>TEL</FormLabel>
                <Input value="09012345678" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
