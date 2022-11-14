import RowCard from "./RowCard";

const RowContainer = ({ allData }) => {
  console.log(allData);
  return (
    <ul className="row-container">
      {allData.map((data, i) => (
        <li key={i}>
          <RowCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export default RowContainer;
