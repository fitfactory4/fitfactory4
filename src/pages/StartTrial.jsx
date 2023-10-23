import startTrialImage from "../images/start-trial-image.png";
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
import { useEffect } from "react";

export const StartTrial = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [submit, setSubmit] = useState(false);
  const [isPlaceHolderActive, setIsPlaceHolderActive] = useState(true);

  const [trainerPrice, setTrainerPrice] = useState(0);
  const [trialPrice, setTrialPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [dateError, setDateError] = useState(false);
  const [nameRequiredError, setNameRequiredError] = useState(false);
  const [numberRequiredError, setNumberRequiredError] = useState(false);

  const [isCalendarActive, setIsCalendarActive] = useState(false);

  const selectOptions = {
    traners: [
      {
        value: "No Trainer",
        price: " (0$)",
      },
      {
        value: "Trainer 1",
        price: " (30$)",
      },
      {
        value: "Trainer 2",
        price: " (40$)",
      },
      {
        value: "Trainer 3",
        price: " (50$)",
      },
    ],

    trial: [
      {
        value: "Trial 1",
        price: " (50$)",
      },
      {
        value: "Trial 2",
        price: " (60$)",
      },
      {
        value: "Trial 3",
        price: " (70$)",
      },
      {
        value: "Trial 4",
        price: " (80$)",
      },
    ],
  };

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
    if ((fullName !== "") & (phoneNumber !== null)) {
      setSubmit(true);
    }
  };

  const handleUserNameChange = (name) => {
    setFullName(name.target.value);
    setNameRequiredError(false);
    if ((phoneNumber !== "") & (selectedDate !== null)) {
      setSubmit(true);
    }
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number.target.value);
    setNumberRequiredError(false);
    if ((fullName !== "") & (selectedDate !== null)) {
      setSubmit(true);
    }
  };

  const onClick = () => {
    selectedDate === null ? setDateError(true) : setDateError(false);
    fullName === "" ? setNameRequiredError(true) : setNameRequiredError(false);
    phoneNumber === ""
      ? setNumberRequiredError(true)
      : setNumberRequiredError(false);
  };

  const setPlaceHolder = () => {
    setIsPlaceHolderActive(false);
  };

  useEffect(() => {
    var dateDay = document.querySelector(".react-datepicker__day");

    if (dateDay !== null) {
      dateDay.onClick = setPlaceHolder(false);
    }

    setTotalPrice(Number(trainerPrice) + Number(trialPrice));
  });

  const handleTrainerChange = () => {
    let selectTrainer = document.getElementById("select-trainer").value;
    let trainerPrice = selectTrainer.split("(")[1].replace("$)", "");

    setTrainerPrice(trainerPrice);
  };

  const handleTrialChange = () => {
    let selectTrial = document.getElementById("select-trial").value;
    let trialPrice = selectTrial.split("(")[1].replace("$)", "");

    setTrialPrice(trialPrice);
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
            action="https://formsubmit.co/00a206a35d4e3ef32ca5ec473880300d"
            method="POST"
          >
            <div className="trial-flex">
              <div className="trial-flex-card trial-flex-card-1">
                <input
                  id="username-input"
                  type="text"
                  name="Username"
                  onChange={handleUserNameChange}
                  placeholder="* Full Name"
                  minLength={7}
                  maxLength={45}
                  required
                />
                <UserIcon />
                {nameRequiredError && (
                  <div className="name-error">Name is required</div>
                )}
                <input
                  id="phoneNumber-input"
                  type="text"
                  name="Phone Number"
                  onChange={handlePhoneNumberChange}
                  placeholder="* Your Number"
                  minLength={9}
                  className="phoneNumber-input-wrapper"
                  required
                />
                <Phone />
                {numberRequiredError && (
                  <div className="number-error">Number is required</div>
                )}
              </div>
              <div className="trial-flex-card trial-flex-card-2">
                <label htmlFor="datepicker" className="datepicker-placeholder">
                  {isPlaceHolderActive && (
                    <p className="datepicker-p">* Start Date</p>
                  )}
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
                  <div className="date-error">Date is required</div>
                )}
              </div>
              <div className="trial-container">
                <div className="trial-select-flex trial-selector-1">
                  <select
                    id="select-trainer"
                    onChange={handleTrainerChange}
                    className="trial-trainer-selector"
                    name="Trainer"
                    required
                  >
                    <option value="">Please Select An Option</option>
                    {selectOptions.traners.map((trainer, index) => (
                      <option key={index} value={trainer.value + trainer.price}>
                        {trainer.value + trainer.price}
                      </option>
                    ))}
                  </select>
                  <SelectIcon />
                </div>
                <div className="trial-select-flex">
                  <select
                    id="select-trial"
                    onChange={handleTrialChange}
                    className="trial-trainer-selector"
                    name="Package"
                    required
                  >
                    <option value="">Please Select Trial</option>
                    {selectOptions.trial.map((trial, index) => (
                      <option key={index} value={trial.value + trial.price}>
                        {trial.value + trial.price}
                      </option>
                    ))}
                  </select>
                  <SelectIcon />
                </div>
              </div>
              <div className="trial-btn-container">
                {!submit ? (
                  <p
                    onClick={onClick}
                    className="trial-btn trial-btn-1 trial-btn-p"
                  >
                    SUBMIT
                  </p>
                ) : (
                  <button type="submit" className="trial-btn trial-btn-1">
                    SUBMIT
                  </button>
                )}

                <a href="#" className="trial-btn trial-btn-2">
                  TOTAL : {totalPrice} $
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
