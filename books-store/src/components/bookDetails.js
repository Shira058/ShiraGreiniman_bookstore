
export default function BookDetails(props) {
    return  (
        <div key={props.id}>
        <h5>Product Details:</h5>
         <table>
            <tr>
                <td>
                <b>Publisher:</b>
                </td>
                <td>
                <p>{props.publisher}</p>
                </td>
            </tr>
            <tr>
                <td>
                <b> Language:</b>
                </td>
                <td>
                <p>{props.language}</p>
                </td>
            </tr>
            <tr>
                <td>
                <b>Baperback</b>
                </td>
                <td>
                <p>{props.paperback}</p>
                </td>
            </tr>
        </table>
        </div>
    );
}