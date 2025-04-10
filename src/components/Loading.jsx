import { Spinner } from "@chakra-ui/react";

const Loading = ({ size = "md" }) => {
  return <Spinner size={size} speed="0.65s" color="gray.200" />;
};

export default Loading;
