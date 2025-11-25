import ClickMe from './components/ClickMe'
import ToggleButton from './components/ToggleButton'
import ButtonsApp from './components/ButtonsApp'
import Counter from './components/Counter'
import DisplayTab from './components/DisplayTab'
import DisplayTab2 from './components/DisplayTab2'
import RemovableTab from './components/RemovableTab'
import DisplayTabProps from './components/DisplayTabProps'
import UserForm from './components/UserForm'
import DivCreator from './components/DivCreator'

export default function App(){
  return (
    <div>
      <h1>Lab5 React Project</h1>
      <ClickMe />
      <ToggleButton />
      <ButtonsApp />
      <Counter />
      <DisplayTab />
      <DisplayTab2 />
      <RemovableTab />
      <DisplayTabProps data={['red','green','blue']} />
      <UserForm />
      <DivCreator />
    </div>
  )
}
