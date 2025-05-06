import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        const newError = {
            name: name.length < 2,
            email: !/\S+@\S+\.\S+/.test(email),
            subject: subject.length < 2,
            message: message.length < 10,
        };

        setError(newError);
        if (Object.values(newError).some((err) => err)) {
            return;
        }
        // Handle form submission logic here
    };

    return (
        <div className="z-10">
            <form
                noValidate
                className="mt-4 lg:mt-6 flex flex-col gap-4 lg:gap-6"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.input}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    {error.name && (
                        <span className="text-red-500 text-sm">
                            Name must be at least 2 characters long.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {error.email && (
                        <span className="text-red-500 text-sm">
                            Please enter a valid email address.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Subject"
                        className={styles.input}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {error.subject && (
                        <span className="text-red-500 text-sm">
                            Subject must be at least 2 characters long.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <textarea
                        placeholder="Your message . . ."
                        rows={4}
                        style={{ resize: "none" }}
                        maxLength={500}
                        minLength={10}
                        className={styles.textarea}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    {error.message && (
                        <span className="text-red-500 text-sm">
                            Message must be at least 10 characters long.
                        </span>
                    )}
                </div>

                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const styles = {
    input: "w-full h-12 lg:h-14 px-4 lg:px-6 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50",
    textarea:
        "w-full h-24 lg:h-32 py-2 px-4 lg:px-6 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50",
    button: "w-full h-12 lg:h-14 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50",
};
