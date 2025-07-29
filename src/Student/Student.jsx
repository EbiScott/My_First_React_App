

function Student(props){

    return(
        <div>
            <p>Name: { props.name }</p>
            <p>Age: { props.age }</p>
            <p>A Student? { props.isStudent }</p>
        </div>
    )

};



export default Student;