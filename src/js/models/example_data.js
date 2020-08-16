import { newProjectInstance } from './project_factory';

const fakeData = {
  defaultProject: {
    id: 0,
    title: 'Miscellaneous Tasks',
    todos: [
      {
        title: 'Basic Task',
        description: 'This is a basic task',
        dueDate: '2020-08-15',
        priority: 'medium',
        checklist: [],
        notes: 'Take of these things while doing this task.',
        projectId: 0,
        todoId: 0,
      },
    ],
  },
  otherProjects: [
    {
      id: 1,
      title: 'Main Project',
      todos: [
        {
          title: 'Walk Cat',
          description: 'Take the cat out for a walk',
          dueDate: '2020-08-15',
          priority: 'high',
          checklist: [],
          notes: 'Cat is known to have killed neighbourhood dogs. Don\'t\nLet her roam free.',
          projectId: 1,
          todoId: 0,
        },
        {
          title: 'Todo List',
          description: 'Make a todo list app in Javascript',
          dueDate: '2020-08-21',
          priority: 'medium',
          checklist: [],
          notes: 'Do the design first, and then work on the models etc.',
          projectId: 1,
          todoId: 1,
        },
      ],
    },
  ],
};

const defaultData = {
  defaultProject: newProjectInstance('Miscellaneous Tasks', 0),
  otherProjects: [],
};

export { defaultData as default, fakeData };
