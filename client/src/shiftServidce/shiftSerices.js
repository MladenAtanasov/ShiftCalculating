export const GetAll = async () => {
    const response = await fetch("http://localhost:3030/jsonstore/shifts").then((res) => res.json());
    return Object.values(response);
};
