export default function Content({title,person,description}){
    return(
        <div id="content-container">
          <div id="title">{title}</div>
          <div id="description">
            <h1>{person}</h1>
            <p>{description}</p>
          </div>
        </div>
    )
}