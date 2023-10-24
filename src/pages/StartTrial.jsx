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
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../services";

export const StartTrial = () => {
  const { langs, language } = useContext(LanguageContext);

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
        value: langs[language].startTrial.select1.option2,
        price: " (0$)",
      },
      {
        value: langs[language].startTrial.select1.option3,
        price: " (30$)",
      },
      {
        value: langs[language].startTrial.select1.option3,
        price: " (40$)",
      },
      {
        value: langs[language].startTrial.select1.option4,
        price: " (50$)",
      },
    ],

    trial: [
      {
        value: langs[language].startTrial.select2.option2,
        price: " (50$)",
      },
      {
        value: langs[language].startTrial.select2.option3,
        price: " (60$)",
      },
      {
        value: langs[language].startTrial.select2.option4,
        price: " (70$)",
      },
      {
        value: langs[language].startTrial.select2.option5,
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
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "Contractica R";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }

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
            <div className="line-trial-text"></div>
            {langs[language].startTrial.div}
          </div>
          <h1 className="trial-title">{langs[language].startTrial.h1}!</h1>
          <p className="trial-text-main">{langs[language].startTrial.p}.</p>

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
                  placeholder={
                    language === "ka" ? "* სრული სახელი" : "* Full Name"
                  }
                  minLength={7}
                  maxLength={45}
                  required
                />
                <UserIcon />
                {nameRequiredError && (
                  <div className="name-error">
                    {langs[language].startTrial.error1}
                  </div>
                )}
                <input
                  id="phoneNumber-input"
                  type="text"
                  name="Phone Number"
                  onChange={handlePhoneNumberChange}
                  placeholder={
                    language === "ka" ? "* მობილურის ნომერი " : "* Your Number"
                  }
                  minLength={9}
                  className="phoneNumber-input-wrapper"
                  required
                />
                <Phone />
                {numberRequiredError && (
                  <div className="number-error">
                    {langs[language].startTrial.error2}
                  </div>
                )}
              </div>
              <div className="trial-flex-card trial-flex-card-2">
                <label htmlFor="datepicker" className="datepicker-placeholder">
                  {isPlaceHolderActive && (
                    <p className="datepicker-p">
                      {langs[language].startTrial.datePlaceHolder}
                    </p>
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
                  <div className="date-error">
                    {langs[language].startTrial.dateError}
                  </div>
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
                    <option value="">
                      {langs[language].startTrial.select1.option1}
                    </option>
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
                    <option value="">
                      {langs[language].startTrial.select2.option1}
                    </option>
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
                    {langs[language].startTrial.btn}
                  </p>
                ) : (
                  <button type="submit" className="trial-btn trial-btn-1">
                    {langs[language].startTrial.btn}
                  </button>
                )}

                <a href="#" className="trial-btn trial-btn-2">
                  {langs[language].startTrial.total} : {totalPrice} $
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
