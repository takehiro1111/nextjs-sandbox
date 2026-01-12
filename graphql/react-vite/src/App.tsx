import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";

const GET_TODOS = gql`
  query {
    getTodos {
      id
      title
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $title: String!, $completed: Boolean!) {
    updateTodo(id: $id, title: $title, completed: $completed) {
      id
      title
      completed
    }
  }
`;

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type GetTodosResponse = {
  getTodos: Todo[];
};

function App() {
  const { loading, data } = useQuery<GetTodosResponse>(GET_TODOS, {
    fetchPolicy: "network-only",
  });
  const [updateTodo] = useMutation(UPDATE_TODO);

  const todos = data ? data.getTodos : [];

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h1>TO DO List</h1>
        <input type="text" placeholder="TODOを追加してください" />
        <button>追加</button>
        <ul>
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  updateTodo({
                    variables: {
                      id: todo.id,
                      title: todo.title,
                      completed: !todo.completed,
                    },
                    refetchQueries: [{ query: GET_TODOS }],
                  })
                }
              />
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
