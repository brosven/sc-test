import { Tree } from '../../components/Tree/Tree';
import { Outlet } from 'react-router-dom';
import './Root.css';

export const Root = () => {
  return (
    <div className="wrapper">
      <Tree />
      <Outlet />
    </div>
  );
};
