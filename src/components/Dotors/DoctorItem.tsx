import style from "./DoctorItem.module.css";

interface Doctor {
  name: string;
  age: string;
  specialization: string;
  timeSlot: string;
  description: string;
}

const DoctorItem: React.FC<Doctor> = (props) => {
  return (
    <div className={style.DoctorItem}>
      <h2>{props.name}</h2>
      <p>{props.specialization}</p>
    </div>
  );
};

export default DoctorItem;
