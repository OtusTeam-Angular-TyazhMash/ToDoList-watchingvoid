export interface Todo {
    id?: number; // Это поле может быть необязательным, если создается новый элемент
    title: string;
    description: string;
    status: string; // Вы можете использовать перечисление (enum) для более строгого контроля значений
    completed?: boolean; // Это поле может быть необязательным
  }
  