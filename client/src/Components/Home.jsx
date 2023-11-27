import { Table } from "react-bootstrap";
import { HomeItem } from "./HomeItem";

export const Home = (shifts) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Strat</th>
                    <th>End</th>
                    <th>Money</th>
                </tr>
            </thead>
            <tbody>
                {shifts.shifts.map((x) => <HomeItem key={x._id} {...x}/>)}
            </tbody>
        </Table>
    );
};
