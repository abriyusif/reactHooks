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
  export default function ListWithProps() {
    return (
      <>
        <ul>
          <h1>Here is our list with props</h1>
          {list.map(function (item) {
            return ((
              <Item item={item}
              />
            ))
          })
          }
        </ul>
      </>
    )
  }
  const Item = ({ item }) => {
    return (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    )
  }