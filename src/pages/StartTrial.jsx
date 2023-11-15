import startTrialImage from "../images/start-trial-image.png";
import {
  Calendar,
  ScrollArrow,
  SelectIcon,
  UserIcon,
  CalendarCancel,
  Phone,
} from "../globalComponents";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../services";

export default function StartTrial() {
  const { langs, language } = useContext(LanguageContext);

  const [date, setDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isYogaTrue, setIsYogaTrue] = useState(false);
  const [isBoxTrue, setIsBoxTrue] = useState(false);
  const [isFitnessTrue, setIsFitnessTrue] = useState(false);

  const [submit, setSubmit] = useState(false);
  const [isPlaceHolderActive, setIsPlaceHolderActive] = useState(true);

  const [trainerPrice, setTrainerPrice] = useState(0);
  const [trialPrice, setTrialPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [dateError, setDateError] = useState(false);
  const [nameRequiredError, setNameRequiredError] = useState(false);
  const [numberRequiredError, setNumberRequiredError] = useState(false);

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

  const showYoga = (yoga) => {
    setIsYogaTrue(!yoga);
  };

  const handleDateChange = () => {
    if ((phoneNumber !== "") & (fullName !== "")) {
      setSubmit(true);
    }
  };

  const handleUserNameChange = (name) => {
    setFullName(name.target.value);
    setNameRequiredError(false);
    if ((phoneNumber !== "") & (date !== "")) {
      setSubmit(true);
    }
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number.target.value);
    setNumberRequiredError(false);
    if ((fullName !== "") & (date !== "")) {
      setSubmit(true);
    }
  };

  const onClick = () => {
    date === "" ? setDateError(true) : setDateError(false);
    fullName === "" ? setNameRequiredError(true) : setNameRequiredError(false);
    phoneNumber === ""
      ? setNumberRequiredError(true)
      : setNumberRequiredError(false);
  };

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    const globe = document.querySelector(".globe-svg");
    globe.style.display = "block";
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "FiraGo";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    header.style.display = "block";
    footer.style.display = "block";

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
                <div className="datepicker-placeholder">
                  {isPlaceHolderActive & (date === "") ? (
                    <p className="datepicker-p">
                      {langs[language].startTrial.datePlaceHolder}
                    </p>
                  ) : (
                    ""
                  )}
                  <div onChange={handleDateChange}>
                    <input
                      name="Start Date"
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <p className="date-text">{date !== "" && date}</p>
                  </div>
                  <Calendar />
                </div>
                {(date === "") & dateError ? (
                  <div className="date-error">
                    {langs[language].startTrial.dateError}
                  </div>
                ) : (
                  ""
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
                    {/* <option value="">
                      {langs[language].startTrial.select1.option1}
                    </option>
                    {selectOptions.traners.map((trainer, index) => (
                      <option key={index} value={trainer.value + trainer.price}>
                        {trainer.value + trainer.price}
                      </option>
                    ))} */}
                    <option value="">airchiet treneri</option>
                    <optgroup label="yoga">
                      <option value="giorgi(30$)">giorgi(30$)</option>
                      <option value="ana(50$)">ana(50$)</option>
                    </optgroup>
                    <optgroup label="box">
                      <option value="giorgi(30$)">giorgi(30$)</option>
                      <option value="luka(20$)">luka(20$)</option>
                    </optgroup>
                    <optgroup label="fitness">
                      <option value="giorgi(30$)">giorgi(30$)</option>
                      <option value="ana(40$)">ana(40$)</option>
                    </optgroup>
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
                    className={`trial-btn trial-btn-1 trial-btn-p ${langs[language].startTrial.btnClassName}`}
                  >
                    {langs[language].startTrial.btn}
                  </p>
                ) : (
                  <button
                    type="submit"
                    className={`trial-btn trial-btn-1 ${langs[language].startTrial.btnClassName}`}
                  >
                    {langs[language].startTrial.btn}
                  </button>
                )}

                <a
                  href="#"
                  className={`trial-btn trial-btn-2 ${langs[language].startTrial.totalClassName}`}
                >
                  {langs[language].startTrial.total} {totalPrice} $
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
}
