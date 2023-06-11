const academy = [
    {id:1, name: 'Js', description:'Basic js concepts'},
    {id:2, name: 'AdvanceJs', description:'Advance js concepts'},
    {id:3, name: 'Node', description:'Basic node concepts'},
    {id:4, name: 'Js', description:'Basic js concepts'},
    {id:5, name: 'Js', description:'Basic js concepts'},

]

const Academies = () => {
    return(
        <div>
            
            <h3>Academies</h3>
            {
                academy.map((item) => {
                    return(
                        <div key={item.id} className="">
                            <div className="card">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        </div>
                        </div>

                    )
                })
            }
        </div>
    
    
        )
}

export default Academies;