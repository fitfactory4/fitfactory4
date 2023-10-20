import startTrialImage from "../images/start-trial-image.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Calendar,
  ScrollArrow,
  SelectIcon,
  UserIcon,
  CalendarCancel,
  Phone,
} from "../globalComponents";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const StartTrial = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [dateError, setDateError] = useState(false);

  const [isCalendarActive, setIsCalendarActive] = useState(false);

  const handleCalendarOpen = () => {
    const openCalendar = document.querySelector(".react-datepicker-popper");
    openCalendar.style.width = "100%";
    openCalendar.style.height = "100vh";
    openCalendar.style.backgroundColor = "#000000b7";
    openCalendar.style.display = "flex";
    openCalendar.style.justifyContent = "center";
    openCalendar.style.alignItems = "center";
    openCalendar.style.zIndex = "2000000";
    setIsCalendarActive(true);
  };

  const handleCalendarClose = () => {
    setIsCalendarActive(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateError(false);
  };

  const schema = yup.object().shape({
    Username: yup.string().required(),
    PhoneNumber: yup.number().positive().integer().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // if (selectedDate === null) {
    //   setDateError(true);
    // } else {
    //   e.target.submit();
    //   setDateError(false);
    // }
  };

  return (
    <main id="start-trial" className="trial">
      <CalendarCancel isActive={isCalendarActive} />
      <div className="trial-top">
        <div className="trial-left">
          <div className="front-trial-text">
            <div className="line-trial-text"></div>BECOME A MEMBER
          </div>
          <h1 className="trial-title">
            START YOUR 5 DAY TRIAL MEMBERSHIP TODAY!
          </h1>
          <p className="trial-text-main">
            Aliquam aliquet pretium sagittis est. Eleifend netus diam sit
            malesuada. Arcu, amet sem gravida sit arcu.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://formsubmit.co/00a206a35d4e3ef32ca5ec473880300d"
            // method="POST"
          >
            <div className="trial-flex">
              <div className="trial-flex-card trial-flex-card-1">
                <input
                  id="username-input"
                  type="text"
                  {...register("Username")}
                  placeholder="* Full Name"
                  maxLength={45}
                />
                <UserIcon />
                <p>{errors.Username?.message}</p>
                <input
                  id="phoneNumber-input"
                  type="text"
                  {...register("PhoneNumber")}
                  placeholder="* Phone Number"
                  maxLength={45}
                  // required
                />
                <Phone />
                <p>{errors.PhoneNumber?.message}</p>
              </div>
              <div className="trial-flex-card trial-flex-card-2">
                <label htmlFor="datepicker" className="datepicker-placeholder">
                  <p className="datepicker-p">* Start Date</p>
                  <Datepicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onCalendarOpen={handleCalendarOpen}
                    onCalendarClose={handleCalendarClose}
                    id="username-input"
                    className="calendar-flex"
                    name="Start Date"
                  />
                  <span className="calendar-icon">
                    <Calendar />
                  </span>
                </label>
                {dateError && (
                  <div className="error-text">Date is required</div>
                )}
              </div>
              <div className="trial-container">
                <div className="trial-select-flex trial-selector-1">
                  <select className="trial-trainer-selector" name="Trainer">
                    <option value="No Trainer">No Trainer</option>
                    <option value="Trainer 1">Trainer 1</option>
                    <option value="Trainer 2">Trainer 2</option>
                    <option value="Trainer 3">Trainer 3</option>
                  </select>
                  <SelectIcon />
                </div>
                <div className="trial-select-flex">
                  <select className="trial-trainer-selector" name="Package">
                    <option value="trial 1">trial 1</option>
                    <option value="trial 2">trial 2</option>
                    <option value="trial 3">trial 3</option>
                    <option value="trial 4">trial 4</option>
                  </select>
                  <SelectIcon />
                </div>
              </div>
              <div className="trial-btn-container">
                <button type="submit" className="trial-btn trial-btn-1">
                  SUBMIT
                </button>
                <a href="#" className="trial-btn trial-btn-2">
                  TOTAL: 110$
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="trial-right">
          <img
            className="trial-mainImg"
            src={startTrialImage}
            alt="trial-image.png"
          />
        </div>
      </div>
      <ScrollArrow />
    </main>
  );
};
