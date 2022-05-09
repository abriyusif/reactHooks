export default function ListWithKeys({list}) {
    return (
      <>
        <ul>
        <h1>Here is our list With Keys with asynchronous data </h1>
        {list.map(function(itemObj) {
          return <li key={itemObj.objectID}>
        <span>
          <a href={itemObj.url}>{itemObj.title} </a>
          </span>
          <span>{itemObj.author}</span>
          <span>{itemObj.num_comments}</span>
          <span>{itemObj.points}</span>
                 </li>
        })}
        </ul>
      </>
    )
  }