export interface TodoListItemModel {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoListModel {
  items: TodoListItemModel[] | null;
}
