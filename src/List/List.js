const list = [
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
  
  export default function ListJsx() {
    return (
      <>
        <ul>
        <h1>Here is our list With JSX</h1>
        {list.map(function(itemObj) {
          return <li><a href ={itemObj.url} >React </a></li>
        })}
        </ul>
      </>
    )
  }