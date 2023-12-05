import './App.css'
import { availableModules } from './book'
import { AppLink } from './shared/component/app-link'
import { Li, Ul } from './shared/component/app-list'
import { AppText } from './shared/typography/app-text'
import { H } from './shared/typography/h'
import { P } from './shared/typography/p'

function App() {
  return (
    <>
      <H>
        <AppText>Вітаю у Чарівній Казці</AppText>
      </H>
      <P>
        <AppText>Оберіть казку з переліку</AppText>
      </P>
      <Ul>
        {availableModules.map((m) => (
          <Li key={m.id}>
            <AppLink href={`/${m.id}`}>
              <AppText>{m.name}</AppText>
            </AppLink>
          </Li>
        ))}
      </Ul>
    </>
  )
}

export default App
