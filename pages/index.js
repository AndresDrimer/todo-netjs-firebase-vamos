import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Navbar />
      <Auth />
      <AddTodo />
      <TodoList />
    </Container>
  );
}
