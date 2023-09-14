import DoctorsList from "@/components/Dotors/DoctorsList";

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

const list: Doctor[] = [
  {
    name: "jai Shankar",
    age: "42",
    specialization: "Cardiologist",
    timeSlot: "",
    description: "",
  },
  {
    name: "jai Shankar",
    age: "42",
    specialization: "Cardiologist",
    timeSlot: "",
    description: "",
  },
  {
    name: "jai Shankar",
    age: "42",
    specialization: "Cardiologist",
    timeSlot: "",
    description: "",
  },
  {
    name: "jai Shankar",
    age: "42",
    specialization: "Cardiologist",
    timeSlot: "",
    description: "",
  },
  {
    name: "jai Shankar",
    age: "42",
    specialization: "Cardiologist",
    timeSlot: "",
    description: "",
  },
];

const home = () => {
  return (
    <div className="w-auto">
      <DoctorsList Dlist={list} />
    </div>
  );
};

export default home;
