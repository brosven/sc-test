import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { useAppSelector } from '../../stores/root-store/root-store-hooks';
import { TaskType } from '../../stores/tasks-store/tasks-types';
import { ServiceType } from '../../stores/services-store/services-types';
import { selectServices, selectTasks } from '../../stores/root-store/root-store-selectors';
import './Tree.css';

export const Tree = () => {
  const services: ServiceType[] = useAppSelector(selectServices);
  const tasks: TaskType[] = useAppSelector(selectTasks);

  const renderServices = useMemo(
    () =>
      services.map((service) => (
        <TreeItem key={service.id} nodeId={service.id} label={service.mainInfo.name}>
          <Link to={`services/${service.id}`}>
            <TreeItem nodeId={service.id + 'info'} label="Информация о сервисе" />
          </Link>
          <TreeItem nodeId={service.id + 'tasks'} label="Задачи">
            {tasks
              .filter((task) => task.customer === service.mainInfo.name)
              .map((task) => (
                <Link to={`tasks/${task.id}`} key={task.id}>
                  <TreeItem
                    key={task.id + service.mainInfo.name}
                    nodeId={task.id + service.mainInfo.name}
                    label={task.title}
                  />
                </Link>
              ))}
          </TreeItem>
        </TreeItem>
      )),
    [services, tasks],
  );

  return (
    <TreeView
      aria-label="categories tree"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      className="TreeView"
    >
      <TreeItem nodeId="services" label="Сервисы">
        {renderServices}
      </TreeItem>
    </TreeView>
  );
};
