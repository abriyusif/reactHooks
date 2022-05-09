import './Props/Props.js'
import './App.css';
import Form from './Form/Form.js'
import List from './List/List.js'
import SearchWithProps from './State/LiftingState.js'
import { useEffect, useState} from 'react'
import ListWithKeys from './List/ListWithKeys.js';
import CustomLocalStorage from './CustomHooks/CustomLocalStorage.js';
import ReactForms from './ReactForms/ReactForms.js';
import ReactMultipleInput from './ReactForms/ReactMultipleInput'
import  getAsyncDataStories from './GetAsyncData/GetAsyncData.js';
function App() {
  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchTerm, setSearchTerm] = useState( 
  //   localStorage.getItem('search') || 'React'
  // )
  // //useEffect
  // useEffect(() => {
  //   localStorage.setItem('search', searchTerm)
  // }, [searchTerm])
const [searchTerm, setSearchTerm]=CustomLocalStorage('search', 'react' )
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  useEffect(() => {
    //set the spinner loader
    setIsLoading(true)
    getAsyncDataStories(initialStories)
    .then((result) => {
      setStories(result.data.stories)
      setIsLoading(false)
    })
    // .catch((error) => {console.log(error)})
  }, [])


  // localstorage for caching as a side effect
 
 
  const styleH1={
    color: 'yellow',
}
  return (
    <div className="Header">
      <h1 style={styleH1}>GitHub Search tool</h1>
      <props/>
      <Form/>
      <List/>
      <SearchWithProps onSearch={handleSearch} value={searchTerm} />
      {isLoading ? (<p>Loading .........</p>): (      <ListWithKeys list={searchedStories} />)}
      <ListWithKeys list={searchedStories} />
      <ReactForms />
      <ReactMultipleInput/>
    </div>
  );
}
export default App;

