import { useParams } from 'react-router-dom';
import { BookRunner } from '../lib/runner/runner';
import { availableModules } from '../book';
import { AppText } from '../shared/typography/app-text';
import { P } from '../shared/typography/p';
import { Ul, Li } from '../shared/component/app-list';
import { useRef, useState } from 'react';
import { Module } from '../lib/builder/types';
import { AppButton } from '../shared/component/app-button';

export function GamePage() {
  const { chapterId } = useParams();
  const selectedModule = availableModules.find((x) => x.id === chapterId);

  if (!selectedModule) {
    return (
      <>
        <AppText size="l">{':('} Нажаль гру не знайдено</AppText>
      </>
    );
  }

  return <Scene selectedModule={selectedModule} />;
}

function Scene({ selectedModule }: { selectedModule: Module<string> }) {
  const bookRunner = useRef(new BookRunner(selectedModule));
  const [, setTurnCounter] = useState(0);
  return (
    <>
      <P>
        <AppText>{bookRunner.current.sceneDescription}</AppText>
      </P>
      <Ul>
        {bookRunner.current.choices.map((c) => (
          <Li key={c.id}>
            <AppButton
              type="button"
              onClick={() => {
                bookRunner.current.act(c.id);
                setTurnCounter((v) => v + 1);
              }}
            >
              <AppText>{c.description}</AppText>
            </AppButton>
          </Li>
        ))}
      </Ul>
    </>
  );
}
