export const stateDateFilter  = (state, action) => {
    if (action.payload.startDate != null) {
      const start = Number(action.payload.startDate.split("-").join(""));

      const end = Number(action.payload.endDate.split("-").join(""));

      // eslint-disable-next-line array-callback-return
      const activitiesFilter = state.activities.filter((activities) => {
        const dateActivity = Number(
          activities.createdAt.split("T")[0].split("-").join("")
        );

        if (dateActivity >= start && dateActivity <= end) {
          return activities;
        }
      });
      state.activitiesFilter = activitiesFilter;
    } else {
      state.activitiesFilter = state.activities;
    }
  }

export const stateActivitiesFilter =  (state, action) => {
  const value = action.payload
  const allActivities = [...state.activities]
  let activitiesToFilter = value === 'todos' && allActivities
  const handleFilter = (query, toFilter) => state.activities.filter(a => a[query] === toFilter)
  if (value === 'correos') activitiesToFilter = handleFilter('method', 'Correo-E')
  if (value === 'llamadas') activitiesToFilter = handleFilter('method', 'Llamada')
  if (value === 'concretados') activitiesToFilter = handleFilter('state', 'Concretado')
  if (value === 'pendientes') activitiesToFilter = handleFilter('state', 'Pendiente')
  state.activitiesFilter = activitiesToFilter
} 