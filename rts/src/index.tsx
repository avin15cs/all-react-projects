import ReactDOM from 'react-dom';
// import UserSearch2 from './state/UserSearch2';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      {/* <EventComponent2 /> */}
      {/* <h1>Hi There!</h1> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
