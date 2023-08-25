import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageBase from './pages/PageBase';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat';
import Page404 from './pages/Page404';

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;