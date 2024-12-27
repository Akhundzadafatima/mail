import React, { useState } from "react";
import "./App.css";
import { db } from "./configuration";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
    if (!message) {
      setError("Mesajınızı yazın.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!error && message) {
      try {
        await addDoc(collection(db, "messages"), {
          message,
          timestamp: serverTimestamp(),
        });

        const templateParams = {
          to_email: "ismayilovaaysel880@gmail.com",
          from_email: "axundzadefatime82@gmail.com",
          message: message,
        };

        emailjs
          .send(
            "service_7czcwm7",
            "template_ofh62r7",
            templateParams,
            "6gXFX3YmdmqA1U0z0"
          )
          .then((response) => {
            console.log("E-posta başarıyla gönderildi:", response);
            alert("Mesajınız başarıyla gönderildi!");
          })
          .catch((error) => {
            console.error("E-posta gönderme hatası:", error);
          });

        setMessage("");
        setTouched(false);
        setError("");
      } catch (err) {
        console.error("Veri gönderme hatası:", err);
        alert(
          "Data göndərərkən xəta baş verdi."
        );
      }
    } else {
      alert("Boş mesaj göndərilə bilməz.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-[#252525] mt-32">
      <h1 className="font-dancing font-bold text-[42px]">Only an email from Fatima to Aysel</h1>
      <div className="flex flex-col items-center justify-center gap-8 rounded-[10px] py-10 mt-2 bg-[#252525] w-[50%] h-[50vh]">
        <textarea
          placeholder="Mesajınızı yazın..."
          className="w-[70%] h-[17vh] outline-none rounded-[6px] text-[20px] p-3"
          value={message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        {/* {touched && error && <p className="text-[#ffd21fd0] text-[24px] mt-2">{error}</p>} */}
        <button
          className="bg-[#252525] w-[70%] h-[50px] rounded-[6px] border-[2px]  border-white text-white hover:bg-[#484848e4] transition-all duration-300 delay-100"
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </div>
    </div>
  );
}

export default App;
