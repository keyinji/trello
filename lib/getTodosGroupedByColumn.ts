import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_PUBLIC_TODOS!
  );

  const todos = data.documents;

  const columns = todos.reduce((acc: any, todo: any) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });

    return acc;
  }, new Map<TypedColumn, Column>());

  const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];

  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        todos: [],
      });
    }
  }

  const sortedColumns = Array.from(columns.entries()).sort(
    (a: any, b: any) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
  );

  
  const board: Board = {
    columns: new Map(sortedColumns as [TypedColumn, Column][]),
  }

  return board
};
