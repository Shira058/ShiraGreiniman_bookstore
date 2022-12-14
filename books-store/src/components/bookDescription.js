
export default function BookDescription(props) {
    return (
        <div key={props.id}>
            <h3>{props.name}</h3>
            <br />
            <b>{props.author}</b>
            <b>{props.ratings}</b>
            <br />
            <p>{props.description}</p>
        </div>
    );
}