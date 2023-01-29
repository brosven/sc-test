import { useParams } from 'react-router-dom';
import { TaskType } from '../../stores/tasks-store/tasks-types';
import { useAppSelector } from '../../stores/root-store/root-store-hooks';
import { TabsDesk } from '../../components/TabsDesk/TabsDesk';
import { TabsType } from '../../components/TabsDesk/TabsDeskTypes';
import { selectTasks } from '../../stores/root-store/root-store-selectors';
import { TaskMainInfo } from '../../components/Task/TaskMainInfo/TaskMainInfo';

export const Task = () => {
  const { taskId } = useParams();
  const task: TaskType[] = useAppSelector(selectTasks);
  const currentTask = task.find((el) => el.id === taskId);

  const taskTabs: TabsType[] = [
    {
      header: 'Основная информация',
      body: <TaskMainInfo key={currentTask?.id} task={currentTask as TaskType} />,
    },
  ];

  return currentTask ? <TabsDesk tabs={taskTabs} tabListLabel="Информация о задаче" /> : <h2>Задача не найдена</h2>;
};
