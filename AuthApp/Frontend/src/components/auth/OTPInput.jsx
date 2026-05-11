import React, { useRef } from 'react'

function OTPInput({otp = new Array([]), setOtp}) {

    const inpRef = useRef([]);

    const handleChange = (value, index) =>{
        if(!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5){
            inpRef.current[index + 1].focus();
        }

    }
    const handleKeyDown = (e, index) => {
        if(e.key == 'Backspace' && !otp[index] > 0 && index > 0){
            inpRef.current[index - 1].focus();
        }
    }
    


  return (
    <div>
        {otp.map((digit, index) => (
            <input key={index} maxLength={1} value={digit} ref={(ele) => (inpRef.current[index] = ele)} onChange={(e) => handleChange(e.target.value, index)} onKeyDown={(e) => handleKeyDown(e, index)} type="text" name="" id="" style={{
                width: "50px", 
                height: "50px",
                textAlign: "center",
                fontSize: "30px"
            }} />
        ))}
    </div>
  )
}

export default OTPInput