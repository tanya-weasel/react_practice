const ReceiveObj = ({Object1}) => (
    <div className="container-fluid text-center">
        <h2>Name : {Object1.name}</h2>
        <h2>Age : {Object1.age}</h2>
        <h2>Profession : {Object1.profession}</h2>
        <h2>City : {Object1.address.city}</h2>
        <h2>State : {Object1.address.state}</h2>
        <h2>Country : {Object1.address.country}</h2>
    </div>
);

export default ReceiveObj;