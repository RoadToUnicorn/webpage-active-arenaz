import { useEffect, useRef } from "react";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function TermsModal({ open, setOpen }: Props) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    // Close modal when clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                overlayRef.current &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [setOpen]);

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 !z-50"
                    ref={overlayRef}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 max-h-[80vh] min-w-[320px] overflow-y-auto"
                        ref={modalRef}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-6 text-2xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold text-center">
                            TERMS AND CONDITIONS
                        </h2>
                        <div className="mt-4 space-y-4 text-sm text-gray-700">
                            <p>
                                <strong className="text-base">
                                    1. Introduction
                                </strong>
                                <br />
                                Welcome to{" "}
                                <a
                                    href="https://www.activearenaz.com/"
                                    className="text-blue-500"
                                >
                                    https://www.activearenaz.com/
                                </a>{" "}
                                (the "Website") and/or the ActiveArenaz (“the
                                App”). This Website/App is owned and operated by
                                Active Areanz (Pvt) Ltd. ("Company," "we," "us,"
                                or "our"). By accessing or using our
                                Website/App, you agree to comply with and be
                                bound by these Terms and Conditions ("Terms").
                                These Terms and Conditions govern your use of
                                our platform, which connects users with venues
                                for booking purposes. By accessing or using the
                                App, you agree to comply with and be bound by
                                these Terms.
                            </p>
                            <p>
                                <strong className="text-base">
                                    2. Definitions
                                </strong>
                                <br />
                                <ul className="list-disc pl-4">
                                    <li>
                                        "User" refers to any individual or
                                        entity using the App.
                                    </li>
                                    <li>
                                        "Venue" refers to any location listed
                                        for booking.
                                    </li>
                                    <li>
                                        "Booking" refers to the act of reserving
                                        a venue through the App.
                                    </li>
                                    <li>
                                        "Service" refers to the platform
                                        provided by the App for users and
                                        venues.
                                    </li>
                                    <li>
                                        "Company" refers to Active Arenaz (Pvt)
                                        Ltd.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    3. Eligibility
                                </strong>
                                <br />
                                You must be at least 18 years old and have the
                                legal capacity to enter into a binding agreement
                                to use the App. By using the App, you represent
                                and warrant that you meet these requirements.
                            </p>
                            <p>
                                <strong className="text-base">
                                    4. Account Registration
                                </strong>
                                <br />
                                To access certain features, users and venues
                                must create an account. You agree to provide
                                accurate and complete information and to update
                                it as necessary. You are responsible for
                                maintaining the confidentiality of your account
                                credentials.
                            </p>
                            <p>
                                <strong className="text-base">
                                    5. Privacy Policy
                                </strong>
                                <br />
                                This Privacy Policy describes how Active Arenaz
                                (Pvt) Ltd. ("we," "us," or "our") collects,
                                uses, and protects your personal information
                                when you use our Website. By using our Website,
                                you consent to the data practices described in
                                this Privacy Policy.
                                <ul className="list-disc pl-4">
                                    <li>
                                        Information We Collect: We may collect
                                        personal information such as your name,
                                        email address, phone number, and payment
                                        details when you register, make a
                                        purchase, or contact us.
                                    </li>
                                    <li>
                                        How We Use Your Information: We use your
                                        information to provide services, process
                                        payments, respond to inquiries, and
                                        improve our Website. We may also use
                                        your information for marketing purposes
                                        with your consent.
                                    </li>
                                    <li>
                                        Sharing Your Information: We do not sell
                                        your personal information. We may share
                                        your information with third-party
                                        service providers who assist us in
                                        operating our business.
                                    </li>
                                    <li>
                                        Security: We implement reasonable
                                        security measures to protect your
                                        personal information. However, no system
                                        is completely secure, and we cannot
                                        guarantee the absolute security of your
                                        data.
                                    </li>
                                    <li>
                                        Cookies: Our Website uses cookies to
                                        enhance your browsing experience. You
                                        can disable cookies through your browser
                                        settings.
                                    </li>
                                    <li>
                                        Your Rights: You have the right to
                                        access, update, or delete your personal
                                        information. To exercise these rights,
                                        please contact us using the information
                                        provided below.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    6. Intellectual Property
                                </strong>
                                <br />
                                All content on this Website and App, including
                                text, graphics, logos, and images, is the
                                property of Active Arenaz (Pvt) Ltd. or its
                                content suppliers and is protected by
                                intellectual property laws. Unauthorized use of
                                any content is prohibited.
                            </p>
                            <p>
                                <strong className="text-base">
                                    7. Booking Process and Payments
                                </strong>
                                <br />
                                <ul className="list-disc pl-4">
                                    <li>
                                        {" "}
                                        Users can browse and book venues through
                                        the App.
                                    </li>

                                    <li>
                                        Bookings are confirmed only upon
                                        successful payment, where applicable.
                                    </li>
                                    <li>
                                        Cancellation and refund policies vary by
                                        venue and are detailed in individual
                                        listings.
                                    </li>
                                    <li>
                                        The App may charge a service fee, which
                                        will be disclosed before payment.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    8. User and Venue Responsibilities
                                </strong>
                                <br />
                                <ul className="list-disc pl-4">
                                    <li>
                                        Users must adhere to venue rules and
                                        policies.
                                    </li>
                                    <li>
                                        Venues must provide accurate
                                        descriptions, pricing, and availability.
                                    </li>
                                    <li>
                                        Both users and venues must act in good
                                        faith and avoid fraudulent activity.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    9. Cancellations and Refunds
                                </strong>
                                <br />
                                <ul className="list-disc pl-4">
                                    <li>
                                        {" "}
                                        Cancellation policies are set by venues
                                        and displayed in each listing.
                                    </li>
                                    <li>
                                        Refund eligibility depends on the
                                        venue’s cancellation policy.
                                    </li>
                                    <li>
                                        The App reserves the right to mediate
                                        disputes but does not guarantee refunds.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    10. Prohibited Activities
                                </strong>
                                <br />
                                Users and venues are prohibited from:
                                <ul className="list-disc pl-4">
                                    <li>
                                        Providing false or misleading
                                        information.
                                    </li>
                                    <li>
                                        Using the App for illegal activities.
                                    </li>
                                    <li>
                                        Attempting to bypass the App’s payment
                                        system.
                                    </li>
                                    <li>Harassing or harming other users.</li>
                                </ul>
                            </p>
                            <p>
                                <strong className="text-base">
                                    11. Limitation of Liability
                                </strong>
                                <br />
                                The App acts only as a facilitator and is not
                                responsible for the quality, safety, legality,
                                or availability of venues. We disclaim all
                                liability for disputes, damages, or losses
                                arising from bookings made through the App.
                            </p>
                            <p>
                                <strong className="text-base">
                                    12. Third-Party Links
                                </strong>
                                <br />
                                Our Website may contain links to third-party
                                websites for your convenience. We do not endorse
                                and are not responsible for the content or
                                practices of these external sites.
                            </p>
                            <p>
                                <strong className="text-base">
                                    13. Termination
                                </strong>
                                <br />
                                We reserve the right to suspend or terminate
                                your account at our discretion, with or without
                                notice, if you violate these Terms.
                            </p>
                            <p>
                                <strong className="text-base">
                                    14. Modifications to Terms
                                </strong>
                                <br />
                                We may update these Terms from time to time.
                                Continued use of the App after changes
                                constitutes acceptance of the revised Terms.
                            </p>
                            <p>
                                <strong className="text-base">
                                    15. Governing Law
                                </strong>
                                <br />
                                These Terms are governed by the laws of
                                Pakistan. Any disputes shall be resolved in the
                                courts of Pakistan.
                            </p>
                            <p>
                                <strong className="text-base">
                                    16. Contact Information
                                </strong>
                                <br />
                                For any questions regarding these Terms, please
                                contact us at:
                                <br />
                                <br />
                                Active Arenaz (Pvt) Ltd. 1848, St 61,
                                <br />
                                Phase 3 Bahria Town Islamabad, Pakistan
                                <br />
                                info@activearenaz.com
                                <br />
                                +92-314-5505160
                            </p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
