import { useParams } from 'react-router-dom';
import { TaskType } from '../../stores/tasksStore/tasks-types';
import { useAppSelector } from '../../stores/root-store-hooks';
import { selectTasks } from '../../stores/root-store-selectors';
import { TabsDesk, TabsType } from '../../components/TabsDesk/TabsDesk';

export const Task = () => {
  const { taskId } = useParams();
  const task: TaskType[] = useAppSelector(selectTasks);
  const currentTask = task.find((el) => el.id === taskId);

  const taskTabs: TabsType[] = [
    {
      header: 'Основная информация',
      body: (
        <>
          <h3>{currentTask?.title}</h3>
          <p>{currentTask?.customer}</p>
          <p>{currentTask?.description}</p>
          <p>{currentTask?.status}</p>
          <p>{currentTask?.comment}</p>
        </>
      ),
    },
  ];

  return currentTask ? <TabsDesk tabs={taskTabs} tabListLabel="Информация о задаче" /> : <h2>Задача не найдена</h2>;
};
