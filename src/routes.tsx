import { createHashRouter } from 'react-router-dom';
import App from './App';
import { Layout } from './Layout';
import { GamePage } from './game-page/game.page';

export const appRouter = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <App />,
        index: true,
      },
      {
        element: <GamePage />,
        path: '/:chapterId',
      },
    ],
  },
]);
