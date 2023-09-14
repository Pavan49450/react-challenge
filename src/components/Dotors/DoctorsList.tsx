import DoctorItem from "./DoctorItem";
import style from "./DoctorItem.module.css";
interface Doctor {
  name: string;
  age: string;
  specialization: string;
  timeSlot: string;
  description: string;
}

interface DoctorsListProps {
  Dlist: Doctor[];
}

const DoctorsList: React.FC<DoctorsListProps> = ({ Dlist }) => {
  // Your component logic
  return (
    <div className={style.doctors}>
      {Dlist.map((doctor) => (
        <DoctorItem
          key={Math.random()}
          name={doctor.name}
          age={doctor.age}
          description={doctor.description}
          specialization={doctor.specialization}
          timeSlot={doctor.timeSlot}
        />
      ))}
    </div>
  );
};

export default DoctorsList;
