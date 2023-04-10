import { createSlice } from "@reduxjs/toolkit";



const initialState = {
 tasks: [
    {
        id: 1,
        state: 'pendiente',
        description: 'Comprar leche',
        due_date: "2023-04-11T09:02:25.028Z",
      },
      {
        id: 2,
        state: 'concretado',
        description: 'Pagar la factura de la luz',
        due_date: "2023-04-11T09:02:25.028Z",
      },
      {
        id: 3,
        state: 'pendiente',
        description: 'Llamar al médico para programar cita',
        due_date: "2023-04-11T09:02:25.028Z",
      },
      {
        id: 4,
        state: 'concretado',
        description: 'Hacer ejercicio por 30 minutos',
        due_date: "2023-04-11T09:02:25.028Z",
      }
 ]
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask : (state, action) => {
        state.tasks.unshift(action.payload)
    },
    deleteTask : (state, action) => {
        const id = action.payload
        const tasksDeleted = state.tasks.filter(task => task.id !== id)
        state.tasks = tasksDeleted
    },
    toggleStateTask : (state, action) => {
        const id  = action.payload
        const tasksToggled = state.tasks.map(task => task.id === id ? {...task, state : task.state === 'concretado' ? 'pendiente' : 'concretado'} : task)
        state.tasks = tasksToggled
    
    }

  },
});

export const {
  addTask,
  deleteTask,
  toggleStateTask
} = tasksSlice.actions;


export default tasksSlice.reducer;
