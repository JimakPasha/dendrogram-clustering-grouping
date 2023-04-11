import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StartPage, DendrogramPage, ErrorPage } from '../pages';
import { useSelector } from 'react-redux';

export const Router = () => {
  const { tree } = useSelector((state) => state.tree);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        {tree && <Route path="/dendrogram" component={DendrogramPage} />}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
