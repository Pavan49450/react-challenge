import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { useRouter } from "next/router";
import { loginActions } from "@/store/login-slice";
import {
  setDoctors,
  filterDoctors,
  selectDoctors,
} from "../../store/doctors-slice";

const DoctorSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredDoctors = useSelector(selectDoctors);

  useEffect(() => {
    // Simulate fetching initial list of doctors from an API
    const initialDoctors = [
      { id: 1, name: "Dr. John Smith" },
      { id: 2, name: "Dr. Jane Doe" },
      { id: 3, name: "Dr. Alice Johnson" },
      // Add more doctors as needed
    ];
    dispatch(setDoctors(initialDoctors));
  }, [dispatch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    dispatch(filterDoctors(searchValue));
  };

  return (
    <div>
      <h1>Doctor Search</h1>
      <input
        type="text"
        placeholder="Search for doctors"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSearch;
