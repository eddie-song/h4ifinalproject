import './ID.css'

function ID ({person}) {

    const style = {
        backgroundColor: person.backgroundColor,
        flexDirection: person.direction === 'left' ? 'row' : 'row-reverse',
    };

    return(

        <div style={style} class="container">
            <img id="image" src={person.image_src} alt={person.name}/>

            <div>
                <p><b>Name:</b> {person.name}</p>
                <p><b>Role:</b> {person.role}</p>
            </div>

        </div>

    );
}

export default ID