import { Container, VStack, Box, Text, Input, Button, HStack, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaPlusSquare } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([{ content: newPost, id: Date.now() }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <FaHome />
          <Text fontSize="xl" fontWeight="bold">PostBoard</Text>
        </HStack>
        <HStack spacing={4}>
          <FaPlusSquare />
        </HStack>
      </Flex>

      <VStack spacing={4} mt={4} p={4}>
        <Box w="100%">
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button mt={2} colorScheme="blue" onClick={handlePostSubmit}>Post</Button>
        </Box>

        <VStack spacing={4} w="100%">
          {posts.map((post) => (
            <Box key={post.id} w="100%" p={4} borderWidth="1px" borderRadius="md">
              <Text>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;