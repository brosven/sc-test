import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TreeView, TreeItem } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { useAppSelector } from '../../stores/root-store/root-store-hooks';
import { TaskType } from '../../stores/tasks-store/tasks-types';
import { ServiceType } from '../../stores/services-store/services-types';
import { selectServices, selectTasks } from '../../stores/root-store/root-store-selectors';
import './Tree.css';

export const Tree = () => {
  const services: ServiceType[] = useAppSelector(selectServices);
  const tasks: TaskType[] = useAppSelector(selectTasks);

  return (
    <TreeView
      aria-label="categories tree"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
      sx={{ height: '100%', minWidth: '300px', maxWidth: 'fit-content', overflowX: 'hidden' }}
    >
      <TreeItem nodeId="services" label="Сервисы">
        {services.map((service) => (
          <TreeItem key={service.id} nodeId={service.id} label={service.mainInfo.name}>
            <Link to={`services/${service.id}`} className="TreeLink">
              <TreeItem nodeId={service.id + 'info'} label="Информация о сервисе" />
            </Link>
            <TreeItem nodeId={service.id + 'tasks'} label="Задачи">
              {tasks
                .filter((task) => task.mainInfo.customer === service.mainInfo.name)
                .map((task) => (
                  <Link to={`tasks/${task.id}`} key={task.id} className="TreeLink">
                    <TreeItem
                      key={task.id + service.mainInfo.name}
                      nodeId={task.id + service.mainInfo.name}
                      label={task.mainInfo.title}
                    />
                  </Link>
                ))}
            </TreeItem>
          </TreeItem>
        ))}
      </TreeItem>
    </TreeView>
  );
};
