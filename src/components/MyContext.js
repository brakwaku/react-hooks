const MyContext = ({ result }) => {
    return (
        <div className="app-wrapper">
          <h1>Trees I have heard about</h1>
          {result.map((item) => (
              <p key={item.id}>{item.type}</p>
          ))}
      </div>
    )
}

export default MyContext
