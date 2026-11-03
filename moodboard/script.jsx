export function MoodBoardItem({ color, image, description}){
return(
  <div className="mood-board-item" style={{
    backgroundColor: color
  }}>
  <img className="mood-board-image"src={image}/>
  <h3 className="mood-board-text">{description}</h3>
  </div>
)
}

export function MoodBoard(){
  const array = [{id:1, color: "#c5a9dc", image: "https://i.pinimg.com/736x/be/10/c8/be10c8e3d6afa251da129f11c01aadae.jpg", description: "Ohyul"}, {
    id:2, color: "#b186d7", image: "https://i.pinimg.com/736x/50/85/0e/50850e32b5e52dc77e91524793fe963c.jpg", description: "Ryul"
  }, {
id:3, color: "#9367c1", image: "https://i.pinimg.com/736x/57/a8/6f/57a86f55bc463fb4fba4699b566fb298.jpg", description: "Seonghyeon"
  }];

  return(
     <div>
  <h1 className="mood-board-heading">Destination Mood Board</h1>
  <div className="mood-board">
  {array.map(user => (
    <MoodBoardItem key={user.key} color={user.color} image={user.image} description={user.description} /> 
  ))}
  </div>
  </div>
  )
}
