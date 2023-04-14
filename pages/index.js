import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    
      <Container
        w="85%"
        mt="40px"
        mb="40px"
        borderWidth="1px"
        borderRadius="3xl"
        boxShadow="dark-lg"
      >
        <Navbar />
        <Auth />
        <AddTodo />
        <TodoList />
      </Container>
   
  );
}
