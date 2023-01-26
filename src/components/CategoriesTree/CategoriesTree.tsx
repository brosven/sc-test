import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useAppSelector } from '../../stores/root-store-hooks';

import { TaskType } from '../../stores/tasksStore/tasks-types';
import { ServiceType } from '../../stores/servicesStore/services-types';

export const CategoriesTree = () => {
  const services: ServiceType[] = useAppSelector((store) => store.services);
  const tasks: TaskType[] = useAppSelector((store) => store.tasks);
  const newTasks: TaskType[] = tasks.filter((el) => el.status === 'new');
  const closedTasks: TaskType[] = tasks.filter((el) => el.status === 'closed');

  return (
    <TreeView
      aria-label="categories tree"
      defaultExpanded={['categories']}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: '100%', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="categories" label="Категории">
        <TreeItem nodeId="services" label="Сервисы">
          {services.map((service) => (
            <TreeItem key={service.id} nodeId={service.id} label={service.name} />
          ))}
        </TreeItem>
        <TreeItem nodeId="tasks" label="Задачи">
          <TreeItem nodeId="new" label="Новые">
            {newTasks.map((task) => (
              <TreeItem key={task.id} nodeId={task.id} label={`Заказчик: ${task.customer}`} />
            ))}
          </TreeItem>
          <TreeItem nodeId="closed" label="Завершенные">
            {closedTasks.map((task) => (
              <TreeItem key={task.id} nodeId={task.id} label={`Заказчик: ${task.customer}`} />
            ))}
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};
