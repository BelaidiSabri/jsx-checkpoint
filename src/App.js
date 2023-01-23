
import './App.css';
import { ProfilePic } from './component/profile/ProfilePhoto';
import { Fullname } from './component/profile/FullName';
import { Adress } from './component/profile/Adress';
import './component/style/profilePhoto.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <ProfilePic></ProfilePic>
      <Fullname/>
      <Adress/>
      </div>
    </div>
  );
}

export default App;
