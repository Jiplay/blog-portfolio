import React from "react";
import Image from "next/image";
import { Card } from 'react-bootstrap';
import style from "./style/style.module.css";

type Props = {
    contactData: { CV: string, Text: string, Email: string, LinkedIn: string },
}

function AuthorContactTab({contactData}: Props) {

    return (
        <div>
            <Card.Title>{contactData.Text} </Card.Title>
            <div className="py-28 flex flex-col lg:flex-row items-center">
                <h1 className="text-4xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                    Contact : {contactData.Email}
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                    <a
                        href={contactData.CV}
                        download="Julien.pdf"
                        className={style.linkButton}
                        style={{textDecoration: 'none'}}
                    >
                        Download my resume
                    </a>
                    <div className='mt-3'>
                        <a href={contactData.LinkedIn}>
                            <Image
                                src="/assets/icons/linkedin.png"
                                alt={`LinkedIn`}
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                    <div className='mt-3 ml-3'>
                        <a href='https://github.com/Jiplay'>
                            <Image
                                src="/assets/icons/github.png"
                                alt={`Github`}
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
)
    ;
}

export default AuthorContactTab;