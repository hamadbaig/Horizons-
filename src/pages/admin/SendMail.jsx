import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"

const SendMail = () => {
    const [emailData, setEmailData] = useState({
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
        const res = await axios.post("/api/newsletter/send-mail", emailData)
        
          toast.success(res.data.message)

        } catch (e) {
            
     toast.error(e.response.data.message)

        }
       
       
    };

    return (
        <section className="">
            <div className="container">
                <h1 className="">Envoyer un Mail</h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="">
                        <label className="">
                            <span className="">Ce mail sera envoyé à tous les membres inscrits à la Newsletter</span>
                        </label>
                       
                    </div>
                    <div className="">
                        <label className="">
                            <span className="">Objet</span>
                        </label>
                        <Input
                            name="subject"
                            type="text"
                            onChange={handleChange}
                            value={emailData.subject}
                            className=""
                        />
                    </div>
                    <div className="">
                        <label className="">
                            <span className="">Message</span>
                        </label>
                        <Textarea
                            name="message"
                            onChange={handleChange}
                            value={emailData.message}
                            className=""
                        />
                    </div>
                    <Button type="submit" className="">Envoyer</Button>
                </form>
            </div>
        </section>
        )
};

export default SendMail;
