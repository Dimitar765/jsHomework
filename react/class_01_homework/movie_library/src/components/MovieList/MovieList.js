import './movieList.css'

const MovieList = () => {
    const movies = [
        {id:1, name: 'Forrest Gump'},
        {id:2, name: '2001: A Space Odyssey'},
        {id:3, name: 'Pulp Fiction'},
        {id:4, name: 'Ex Machina'},
        {id:5, name: 'Fight Club'},
        {id:6, name: 'Intersellar'},
        {id:7, name: 'Seven'},
        {id:8, name: 'Matrix'},
        {id:9, name: 'Midnight in Paris'},
        {id:10, name: 'Avatar'},


    ]

    const users = 'Pero';
    return (
        <div className="movieContainer">
            <h3>Welcome {users}</h3>

            <ul>
            <h4>{users} top 10 MovieList</h4>
           {
            movies.map((movie) => {
                return (
                    <li key={movie.id}>{movie.name}</li>
                )
            })
           }

        </ul>
        </div>
        

    ) 
}
            export default MovieList;