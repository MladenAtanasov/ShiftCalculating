export const HomeItem = ({
    date,
    start,
    end,
    money
}) =>{
    return (
        <tr>
          <td>{date}</td>
          <td>{start}</td>
          <td>{end}</td>
          <td>{money}</td>
        </tr>
    );
}