import { ServicesConstants } from './services-constants';

export const changeServiceDescription = (id: string, description: string) => ({
  type: ServicesConstants.ChangeDescription,
  payload: {
    id,
    description,
  },
});
