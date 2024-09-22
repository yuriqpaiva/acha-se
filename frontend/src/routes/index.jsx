import { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import CadastroItem from '../pages/CadastroItem';
import Devolution from '../pages/Devolution';
import DetalhesItem from '../pages/DetalhesItem';
import { MainLayout } from '../layouts/main';
import ObjectCategoryView from '../components/ObjectCategoryView';
import { objectCategories } from '../constants/objects-categories';
import Devolvidos from '../pages/Devolvidos';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (signed === 'invalid') {
      navigate('/login');
    }
  }, [signed]);

  return <Item />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route exact path="/" element={<MainLayout />}>
            <Route exact path="/" element={<Private Item={Home} />} />
            <Route
              exact
              path="/cadastro-item"
              element={<Private Item={CadastroItem} />}
            />
            <Route
              exact
              path="/devolution/:objectId"
              element={<Private Item={Devolution} />}
            />
            <Route
              exact
              path="/item/:objectId"
              element={<Private Item={DetalhesItem} />}
            />
            {objectCategories.map((c) => (
              <Route
                exact
                key={c.key}
                path={c.route}
                element={
                  <Private Item={() => <ObjectCategoryView category={c} />} />
                }
              />
            ))}
            <Route path="/devolvidos" element={<Private Item={Devolvidos} />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
