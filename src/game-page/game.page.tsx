import { useParams } from 'react-router-dom';
export function GamePage() {
  const { chapterId } = useParams();
  return <>I AM SUPER PAGE: {chapterId}</>;
}
