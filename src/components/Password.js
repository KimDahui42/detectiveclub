import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Password.css";

const Password = () => {
    const [Box_1, setBox_1] = useState("");
    const [Box_2, setBox_2] = useState("");
    const [Box_3, setBox_3] = useState("");
    const [Box_4, setBox_4] = useState("");
    const [Box_5, setBox_5] = useState("");
    const [Box_6, setBox_6] = useState("");
    let correct = true;
    let history = useHistory();
    const valReset = () => {
        setBox_1("");
        setBox_2("");
        setBox_3("");
        setBox_4("");
        setBox_5("");
        setBox_6("");
    }
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "Box_1") {
            if (value > "9" || value < "0") setBox_1("");
            else setBox_1(value);
        }
        else if (name === "Box_2") {
            if (value > "9" || value < "0") setBox_2('');
            else setBox_2(value);
        }
        else if (name === "Box_3") {
            if (value > "9" || value < "0") setBox_3('');
            else setBox_3(value);
        }
        else if (name === "Box_4") {
            if (value > "9" || value < "0") setBox_4('');
            else setBox_4(value);
        }
        else if (name === "Box_5") {
            if (value > "9" || value < "0") setBox_5('');
            else setBox_5(value);
        }
        else if (name === "Box_6") {
            if (value > "9" || value < "0") setBox_6('');
            else setBox_6(value);
            setBox_6(value);
        }
        
    };

    const onSubmit = (event) => {
        event.preventDefault();
        correct = correct && (Box_1 === "7") && (Box_2 === "5") && (Box_3 === "3") && (Box_4 === "2") && (Box_5 === "5") && (Box_6 === "7")
        if (correct) {
            history.push('/detectiveclub/clubroom')
        }
        else valReset();
    };
    return (
        <section className="container">
        <div className="password__container">
            <h1>비밀번호를 입력하세요</h1>
                <form onSubmit={onSubmit}>
                    <div className="textBoxes">
                        <input name="Box_1" type="text" maxLength="1" required value={Box_1} onChange={onChange} />
                        <input name="Box_2" type="text" maxLength="1" required value={Box_2} onChange={onChange} />
                        <input name="Box_3" type="text" maxLength="1" required value={Box_3} onChange={onChange} />
                        <input name="Box_4" type="text" maxLength="1" required value={Box_4} onChange={onChange} />
                        <input name="Box_5" type="text" maxLength="1" required value={Box_5} onChange={onChange} />
                        <input name="Box_6" type="text" maxLength="1" required value={Box_6} onChange={onChange} />
                    </div>
                    <div className="password__action">
                        <input type="submit" value="Enter" className="password__button"/>
                        <input type="reset" value="reset" className="password__button" onClick={valReset} />
                    </div>
            </form>
            </div>
            </section>
    );
};
export default Password;

