import AccessList from './components/AccessList';
import AccessFromCreate from './components/AccessFormCreate';
import AccessFromEdit from './components/AccessFormEdit';

const resource = {
    list: AccessList,
    create: AccessFromCreate,
    edit: AccessFromEdit,
};

export default resource;
