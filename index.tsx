import React, { useState } from 'react';

// Type definitions
interface Teacher {
    name: string;
    email: string;
    mobile: string;
    contactTiming: string;
}

interface Student {
    name: string;
}

interface InCharges {
    teacher: Teacher | Teacher[];
    student: Student[];
}

interface Registration {
    rules: string;
    link: string;
}

interface SubEvent {
    name: string;
    venue: string;
    date: string;
    time: string;
    classesEligible: string;
    duration: string;
    participants: string;
    rules: string[];
    judgementCriteria: string[];
    incharges: InCharges;
    registration: Registration;
}

interface Event {
    eventName: string;
    subEvents: SubEvent[];
}

// ADD YOUR EVENT DATA HERE
const Events: Event[] = [

    {
        eventName: "NAVRAS",
        subEvents: [
            {
                name: "Symphony",
                venue: "Auditorium",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "6 minutes + 3 minutes (Stage setup)",
                participants: "A team of 6 students",
                rules: [
                    "The students can sing a self-composed or improvised song in English.",
                    "No additional songs or mashups are allowed.",
                    "Teams should announce the name of the song and the artist prior to the performance",
                    "Students must choose live instruments only. No pre-recorded tracks or autotune is allowed.",
                    "Only western musical instruments are to be chosen.",
                    "The lyrics of the song must contain language appropriate for schools.",
                    "The drum kit, keyboard stands will be provided by the host school.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Vocal Performance",
                    "Instrumental Skills",
                    "Stage Presence and Coordination",
                    "Creativity in Arrangement",
                    "Overall Impact and Audience Engagement"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Vicky Thapa",
                        email: "vickyt.csn@cambridgeschool.edu.in",
                        mobile: "9149177846",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Suryansh Vedi" },
                        { name: "Manan Soni" }
                    ]
                },
                registration: {
                    rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/sahitZNqHFSCtue57"
                }
            },
            {
                name: "Nrityanjali (Fusion Dance)",
                venue: "Auditorium",
                date: "Wednesday, November 19, 2025",
                time: "11:00 a.m.",
                classesEligible: "III, IV & V",
                duration: "3-4 minutes",
                participants: "A team of 12-15 students (Participation from each class is compulsory)",
                rules: [
                    "The participants must perform a fusion of folk and western dance of any one state.",
                    "The selection of the song should be according to the theme. Songs with appropriate lyrics should be chosen. Film songs are not allowed.",
                    "Costumes should be selected and worn as per the chosen dance form. Participants must maintain decorum with their costumes and dance moves.",
                    "Props or usage of any digital background is not allowed.",
                    "A pen drive with the specific song should be submitted at the time of arrival to the teacher in-charge.",
                    "The name of the school should be clearly mentioned on the pen drive to avoid confusion.",
                    "Points will be deducted for exceeding the time limit.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Technique of the dance form chosen",
                    "Choreography, rhythm, group synchronization",
                    "Costumes & Facial Expressions",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Ms. Debapriya Dutta",
                            email: "debapriyad.csn@cambridgeschool.edu.in",
                            mobile: "7703864002",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Mr. Irshad Ahmad",
                            email: "irshada.csn@cambridgeschool.edu.in",
                            mobile: "9718239096",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Saanvi Bhatia" },
                        { name: "Anushka Shekhar" }
                    ]
                },
                registration: {
                    rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/dB8F45DLNrek3sv67"
                }
            },
            {
                name: "Sur Sangam (Music - a Universal Language)",
                venue: "Dance Room",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "III, IV & V",
                duration: "6 Minutes (Performance - 4 mins, Stage set up - 2 mins)",
                participants: "A team of 10-12 students",
                rules: [
                    "The composition should be a fusion of Indian Classical/Light and Western Music.",
                    "It has to be based on Indian Classical Ragas/ Light Music combined with Western Lyrics/ Western Instruments.",
                    "Bollywood/Film Music is not allowed for the presentation. However, for Fusion, self composed Western / Indian Lyrics can be introduced.",
                    "Traditional Bandish/Thumris can be used.",
                    "Both Indian and Western Instruments are allowed.",
                    "The participating team will be required to carry their own instruments; no instrument will be provided by the host school.",
                    "Recorded or Background music like Karaoke Tracks is not permissible. No props will be allowed on stage. However, beats and rhythms on synthesizer/keyboard can be used.",
                    "Participants should be dressed in plain Kurta Pyjama of any colour.",
                    "Any 2 instruments can be used for the performance.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Composition",
                    "Arrangement",
                    "Melody and Rhythm",
                    "Voice Synchronization",
                    "Adherence to Time Duration (Marks will be deducted for increasing the time limit)"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Mr. Rahul Chaudhary",
                            email: "rahulc.csn@cambridgeschool.edu.in",
                            mobile: "7982811624",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Mr. Shafi Azad",
                            email: "shafiazad.csn@cambridgeschool.edu.in",
                            mobile: "9654098327",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Angad Sharma" },
                        { name: "Yoovika Jain" }
                    ]
                },
                registration: {
                    rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/qzpSE3o5DUSpXjQ76"
                }
            },
            {
                name: "Kitchen Geniuses",
                venue: "AV Room",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "IV & V",
                duration: "45 minutes",
                participants: "A team of 2 students (1 from each class)",
                rules: [
                    "A team of two participants will prepare a healthy and nutritious platter keeping the theme in mind.",
                    "The participants are allowed to bring pre-chopped ingredients for the event.",
                    "The dish should be given an appropriate name and presented neatly. The team must display a placard showing the name of the dish along with the ingredients used.",
                    "The participants are expected to have a thorough knowledge of the recipe in terms of its nutritional value, ingredients used and method of preparation.",
                    "The participants should carry a table cloth.",
                    "All required materials and tools should be brought by the participants.",
                    "The participants should be dressed as little chefs keeping basic hygiene in mind. (Chef uniform, gloves, apron etc.)",
                    "The preparation and the presentation should be done by the participants at the designated venue.",
                    "All the participants must ensure neatness of their respective work station during the event.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Neatness and Presentation",
                    "Creativity",
                    "Nutritional value of the dish prepared",
                    "Knowledge about the ingredients",
                    "Taste of the dish prepared"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Ms. Divya Wadhwa",
                            email: "divyaw.csn@cambridgeschool.edu.in",
                            mobile: "9891210668",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Anjana Arora",
                            email: "anjanaa.csn@cambridgeschool.edu.in",
                            mobile: "9310088873",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Preksha Bhatnagar" },
                        { name: "Navya Kaur Lall" }
                    ]
                },
                registration: {
                    rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/EjN5ntHr33yVE4SB6"
                }
            },
            {
                name: "ELAN: The Pulse Within (Western Dance Competition)",
                venue: "Auditorium",
                date: "Thursday, November 20, 2025",
                time: "11:00 a.m.",
                classesEligible: "VI-IX",
                duration: "3-5 Minutes",
                participants: "A team of 6-8 Students",
                rules: [
                    "Each team will present a dance performance on pre-recorded music.",
                    "The performance should align with the recommended theme and Western dance styles.",
                    "All the music files must be mailed in advance in .mp3 format to the teacher incharge.",
                    "Indecent attire or use of inappropriate steps and songs will lead to disqualification.",
                    "The host school will provide no changing facility.",
                    "Bollywood songs/music are not allowed.",
                    "The participants are not allowed to carry phones.",
                    "Teams who wish to make use of props are permitted to do so.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Choreography",
                    "Costume",
                    "Creativity and Expression",
                    "Synchronization",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Drishti Agrawal",
                        email: "drishtia.csn@cambridgeschool.edu.in",
                        mobile: "8299449660",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Kunjal Kalra" },
                        { name: "Aashna Sharma" }
                    ]
                },
                registration: {
                    rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration desk on the day of the event.",
                    link: "https://forms.gle/Y7SmWZ4zfLD2hhvP9"
                }
            },
            {
                name: "नुक्कड़ नाटक (एक सामंजस्यपूर्ण राष्ट्र)",
                venue: "Stilted Area",
                date: "Thursday, November 20, 2025",
                time: "9:15 a.m.",
                classesEligible: "IV - V",
                duration: "10 minutes",
                participants: "A team of 8-10 students",
                rules: [
                    "Each team will enact a Nukkad Natak in Hindi, based on the theme- एक सामंजस्यपूर्ण राष्ट्र",
                    "Use of fire/water is strictly prohibited on the performing stage.",
                    "Participants should adhere to the time limit.",
                    "Props will be arranged by the teams themselves.",
                    "Adult intervention is strictly prohibited.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Dialogue Delivery",
                    "Expression, voice modulation and posture",
                    "Relevance to the theme",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Harish Verma",
                        email: "harishv.csn@cambridgeschool.edu.in",
                        mobile: "8800172212",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Paromita Barua" },
                        { name: "Parth Shukla" }
                    ]
                },
                registration: {
                    rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/vPUEhxMZUbKRRB5aA"
                }
            }
        ]
    },
    {
        eventName: "WORDWEAVE",
        subEvents: [
            {
                name: "TED Talk",
                venue: "Seminar Room",
                date: "Wednesday, November 19, 2025",
                time: "9:45 a.m.",
                classesEligible: "IX-XII",
                duration: "4-5 minutes",
                participants: "1 student",
                rules: [
                    "Each participant will deliver a five-minutes talk on the theme - Global Diversity : Problems and Possibilities in the Modern World",
                    "Personal stories, research, or real-life examples should be used to bring ideas to life and connect with the audience.",
                    "Participants should share their own original and inspiring perspective.",
                    "Plagiarism will lead to disqualification.",
                    "The talk must always remain respectful, age-appropriate, and free from political references.",
                    "Time management is important: a signal will be given at the end of four minutes, and marks will be deducted if the talk is too short or too long."
                ],
                judgementCriteria: [
                    "Clarity of the message",
                    "Relevance and depth of insight",
                    "Confidence and delivery",
                    "Structure and engagement"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Ms. Aparajita",
                            email: "aparajita.csn@cambridgeschool.edu.in",
                            mobile: "9971600368",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Sanya Verma",
                            email: "sanyav.csn@cambridgeschool.edu.in",
                            mobile: "9818634813",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Deepika Rawat" },
                        { name: "Aarush Verma" }
                    ]
                },
                registration: {
                    rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/H4yxgbTzDV7SRjAE8"
                }
            },
            {
                name: "बातों - बातों में (हिन्दी पॉडकास्ट)",
                venue: "Seminar Room",
                date: "Wednesday, November 19, 2025",
                time: "11:00 a.m.",
                classesEligible: "VIII-IX",
                duration: "4-5 minutes",
                participants: "A team of 2 students",
                rules: [
                    "प्रत्येक विद्यालय के दो प्रतिभागी दिए गए विषयों में से किसी एक विषय पर पॉडकास्ट प्रस्तुत करें।",
                    "पॉडकास्ट मौलिक, तथ्यात्मक व सृजनात्मक होना चाहिए।",
                    "पॉडकास्ट की भाषा-शैली सरल और संवेदनात्मक होनी चाहिए।",
                    "पॉडकास्ट विषय से संबंधित होना चाहिए।",
                    "वेशभूषा पॉडकास्ट के अनुसार होनी चाहिए।",
                    "समय-सीमा का ध्यान रखना अनिवार्य है।"
                ],
                judgementCriteria: [
                    "विषयवस्तु",
                    "मौलिकता",
                    "आत्मविश्वास",
                    "उच्चारण-शुद्धता",
                    "समग्र प्रस्तुति"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Ms. Richa Sharma",
                            email: "richas.csn@cambridgeschool.edu.in",
                            mobile: "9990497227",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Vimal Tyagi",
                            email: "vimalt.csn@cambridgeschool.edu.in",
                            mobile: "9911905228",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Sara Thakur" },
                        { name: "Mokshi Khari" }
                    ]
                },
                registration: {
                    rules: "दिए गए लिंक के माध्यम से 'पहले आओ – पहले पाओ' के आधार पर अधिकतम 10 प्रविष्टियों को ही पंजीकृत किया जाएगा। वर्ग का नाम और अंक प्रतिभागियों से पूर्व विद्यालय के पंजीकरण स्थल पर दिए जाएँगे।",
                    link: "https://forms.gle/WEnHg3S8CA4PHnFg8"
                }
            },
            {
                name: "Flights of Poetic Fantasy (Poetry Writing Competition)",
                venue: "Room no. 7 and 8",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "VI-VIII",
                duration: "60 minutes",
                participants: "A team of 2 students",
                rules: [
                    "Participants will be given 60 minutes for writing a poem on the theme- 'Peace and Harmony'.",
                    "A list of 20 words will be provided to the participants at the beginning of the event. They will use at least 10 words out of the given list and compose a poem, with a suitable title.",
                    "The participants are required to write between 20 - 25 lines.",
                    "The 10 words used from the list given must be underlined.",
                    "The write-up should be in a neat handwriting.",
                    "Students must write their school code and their name on the top of the sheet.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Theme",
                    "Content",
                    "Expression",
                    "Manner of using the given words",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Ms Souparni Paul",
                        email: "souparnip.csn@cambridgeschool.edu.in",
                        mobile: "9643142095",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Stuti Sharma" },
                        { name: "Anandita Kapur" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/UtmwbW3j8n6Mb65i6"
                }
            },
            {
                name: "संस्कृत श्लोक गायन",
                venue: "Dance Room",
                date: "Wednesday, November 19, 2025",
                time: "11:00 a.m.",
                classesEligible: "VI-VIII",
                duration: "4-5 minutes",
                participants: "A team of 8-10 students",
                rules: [
                    "अध्यापक/अध्यापिका अपनी रुचि के अनुसार श्लोक चयन कर अपनी प्रस्तुत देने के लिए स्वतंत्र है।",
                    "लय, स्वर,ताल, आत्मविश्वास , उच्चारण व समय सीमा निर्णायक बिंदु होंगे।",
                    "प्रतिभागी किसी भी भारतीय वाद्य-यंत्र का प्रयोग करने के लिए स्वतंत्र है।",
                    "छात्र प्रस्तुति के अनुरूप वेश-भूषा धारण कर सकते हैं।",
                    "श्लोक किसी यू ट्यूब आदि से न लिया गया हो।",
                    "जीवंत प्रस्तुति के लिए आवश्यकतानुरूप दृश्य श्रव्य सामग्री का प्रयोग अपेक्षित है।",
                    "निर्णायक मंडल का निर्णय ही अंतिम और सर्वमान्य होगा।"
                ],
                judgementCriteria: [
                    "संवादात्मक प्रस्तुति",
                    "सहायक सामग्री",
                    "श्लोक स्मृति",
                    "आत्मविश्वास",
                    "लयात्मक प्रस्तुति",
                    "वेशभूषा"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Ms. Neelam Sharma",
                            email: "neelams.csn@cambridgeschool.edu.in",
                            mobile: "9868814556",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Vimal Tyagi",
                            email: "vimalt.csn@cambridgeschool.edu.in",
                            mobile: "9911905228",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Navya Sharma" },
                        { name: "Gungun Mittal" }
                    ]
                },
                registration: {
                    rules: "छात्रों का पंजीकरण कराकर संस्कृत ज्ञान गंगा में छात्रों को अवगाहन करने का अवसर प्रदान कर हमें अनुगृहीत करें।",
                    link: "https://forms.gle/vY4SR7zeCYjvT6R9A"
                }
            }
        ]
    },
    {
        eventName: "NAVRANG",
        subEvents: [
            {
                name: "Reimagine and Recreate (Chitrashala Jr. A)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "III",
                duration: "2 hours",
                participants: "A team of 2 students",
                rules: [
                    "A team of two (2) participants will create the artwork.",
                    "Medium: Mixed Media",
                    "A3 white sheets will be provided by the host school and other relevant stationery material should be brought by the students.",
                    "Use of sharp props or materials is not allowed.",
                    "Participants must carry child friendly scissors.",
                    "The artworks created during competition will be collected and kept by the host school.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Creativity and originality",
                    "Relevance to theme",
                    "Neatness",
                    "Aesthetic appeal and overall presentation"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Mr. Vijay Kumar",
                            email: "vijayk.csn@cambridgeschool.edu.in",
                            mobile: "9968259189",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Viditi Khare",
                            email: "viditik.csn@cambridgeschool.edu.in",
                            mobile: "8828766290",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Paawni Gupta" },
                        { name: "Ritisha Raturi" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
                }
            },
            {
                name: "Paper Montage (Chitrashala Jr. B)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "IV",
                duration: "2 hours",
                participants: "2 individual students",
                rules: [
                    "Two individual participants will create a paper montage.",
                    "Medium: Paper Collage",
                    "A3 white sheets will be provided by the host school.",
                    "Other relevant material should be brought by the students.",
                    "Usage of child friendly scissors is advised.",
                    "Usage of ready-made cut outs is not allowed.",
                    "The artworks created during competition will be collected and kept by the host school.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Creativity and originality",
                    "Relevance to theme",
                    "Neatness",
                    "Aesthetic appeal and overall presentation"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Mr. Vijay Kumar",
                            email: "vijayk.csn@cambridgeschool.edu.in",
                            mobile: "9968259189",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Viditi Khare",
                            email: "viditik.csn@cambridgeschool.edu.in",
                            mobile: "8828766290",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Tanmaya Saini" },
                        { name: "Esha Das" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
                }
            },
            {
                name: "Canvas Painting (Chitrashala Jr. C)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "V",
                duration: "2 hours",
                participants: "2 individual students",
                rules: [
                    "Two (2) individual participants will create canvas paintings.",
                    "Medium: Acrylic Colours",
                    "A3 size canvas sheets will be provided by the host school.",
                    "Other materials, colours, brushes, spray etc. should be brought by the students.",
                    "Usage of ready-made materials is not allowed.",
                    "The artworks created during competition will be collected and kept by the host school.",
                    "The decision of the judges will be final."
                ],
                judgementCriteria: [
                    "Creativity and originality",
                    "Relevance to theme",
                    "Neatness",
                    "Aesthetic appeal and overall presentation"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Mr. Vijay Kumar",
                            email: "vijayk.csn@cambridgeschool.edu.in",
                            mobile: "9968259189",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Viditi Khare",
                            email: "viditik.csn@cambridgeschool.edu.in",
                            mobile: "8828766290",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Saanvi Darbari" },
                        { name: "Veda Bansal" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
                }
            },
            {
                name: "Indian Renaissance Impact (Aesthetic Moves Sr. A)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "VI-VIII",
                duration: "2 hours",
                participants: "2 individual participants",
                rules: [
                    "2 individual participants are expected to create the painting",
                    "Medium: Any water-based mediums like Water colour/ Poster Colour are allowed",
                    "A3 size sheets will be provided by the host school.",
                    "Other relevant stationery material should be brought by the students.",
                    "The artworks created during competition will be collected and kept by the host school."
                ],
                judgementCriteria: [
                    "Originality",
                    "Creativity",
                    "Colour Scheme",
                    "Relevance to the Theme",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Bappi Singha",
                        email: "bappis.csn@cambridgeschool.edu.in",
                        mobile: "9476350403",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Prabha Jain" },
                        { name: "Dhruvi Paliwal" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/pPNvAaehx8XEtWqz6"
                }
            },
            {
                name: "Statuette (Aesthetic Moves Sr. B)",
                venue: "Room no. 16 and 17",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "VI-VIII",
                duration: "2 hours",
                participants: "A team of 2 participants",
                rules: [
                    "A team of two (2) participants",
                    "Medium: Clay",
                    "A board will be provided by the host school to create the Statuette",
                    "Other relevant material like clay & spray etc should be brought by the students"
                ],
                judgementCriteria: [
                    "Originality",
                    "Creativity",
                    "Colour Scheme",
                    "Relevance to the Theme",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Bappi Singha",
                        email: "bappis.csn@cambridgeschool.edu.in",
                        mobile: "9476350403",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Aldrich Boro" },
                        { name: "Ansh Raj Johri" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/pPNvAaehx8XEtWqz6"
                }
            },
            {
                name: "Impressionist Landscape (Aesthetic Moves Sr. C)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "IX-X",
                duration: "2 hours",
                participants: "2 individual participants",
                rules: [
                    "Two (2) individual participants will create a knife painting on canvas",
                    "Medium: Acrylic paints are allowed",
                    "16\" X 20\" canvas sheets will be provided by the host school.",
                    "Other relevant painting material should be brought by the students.",
                    "The artworks created during competition will be collected and kept by the host school."
                ],
                judgementCriteria: [
                    "Originality",
                    "Creativity",
                    "Colour Scheme",
                    "Relevance to the Theme",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Bappi Singha",
                        email: "bappis.csn@cambridgeschool.edu.in",
                        mobile: "9476350403",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Aaditya Kumar Chaurasia" },
                        { name: "Mohd. Ayan" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/pPNvAaehx8XEtWqz6"
                }
            },
            {
                name: "Aesthetical Expression (Aesthetic Moves Sr. D)",
                venue: "School Ground",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m. - 11:30 a.m.",
                classesEligible: "XI-XII",
                duration: "2 hours",
                participants: "A team of 2 participants",
                rules: [
                    "A team of two (2) participants",
                    "Medium: Students may use any medium.",
                    "A canvas sheet of 2ft X 2.5ft will be provided by the host school.",
                    "The relevant painting material like paint, brush, spray etc. should be brought by the students."
                ],
                judgementCriteria: [
                    "Originality",
                    "Creativity",
                    "Colour Scheme",
                    "Relevance to the Theme",
                    "Overall Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Bappi Singha",
                        email: "bappis.csn@cambridgeschool.edu.in",
                        mobile: "9476350403",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Avni Chaturvedi" },
                        { name: "Nistha Pachauri" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/pPNvAaehx8XEtWqz6"
                }
            }
        ]
    },
    {
        eventName: "TECHNOLYMPICS",
        subEvents: [
            {
                name: "GameCraft",
                venue: "IRP Lab",
                date: "Wednesday, November 19, 2025",
                time: "10:00 a.m.",
                classesEligible: "IV-VI",
                duration: "1 hour",
                participants: "1 student",
                rules: [
                    "Participants will have to create a game on a topic provided to them on the spot using Scratch 3.0 Offline Editor.",
                    "The game controls must be kept simple & intuitive. If possible educational elements may be incorporated into the game, such as mathematical challenges, spelling quizzes, or science related questions.",
                    "The participants must save the game file in .sb3 format on the desktop with their team name.",
                    "They must carry their headphones / earplugs as per their requirement.",
                    "The members of the team will showcase their game to the judges and respond to questions related to the source code during the presentation.",
                    "The decision of the judges will be binding."
                ],
                judgementCriteria: [
                    "Creativity & Originality",
                    "Gameplay /Engagement",
                    "Visual Design",
                    "Educational Value",
                    "Difficulty Level",
                    "Overall Experience"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Vinoo Mehta",
                        email: "vinoom.csn@cambridgeschool.edu.in",
                        mobile: "9810855550",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Japeen Kaur" },
                        { name: "Tanvee Ghai" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/StuvutrWQVWrdxfh9"
                }
            },
            {
                name: "Webolution",
                venue: "Multimedia Lab",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "1 hour",
                participants: "A team of 2 students",
                rules: [
                    "Participants will have to design a website on a topic provided on the spot.",
                    "Websites must be developed using HTML, CSS, and JavaScript.",
                    "VS Code software will be provided",
                    "Images, videos and other media will be provided by the host school.",
                    "Website must include at least 4 web pages (e.g., Home, About, Contact).",
                    "Navigation should be clear and functional.",
                    "Pages must be responsive and displayed properly on different screen sizes.",
                    "Participants must try to create interactive web pages (forms, buttons, or simple animations).",
                    "Any attempt to bypass website restrictions or access unauthorized content will result in disqualification.",
                    "The decision of the judges will be final and binding"
                ],
                judgementCriteria: [
                    "Design & Creativity",
                    "Functionality & Navigation",
                    "Code Quality & Best Practices",
                    "Originality & Theme Relevance"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Sandhya Puri",
                        email: "sandhyap.csn@cambridgeschool.edu.in",
                        mobile: "9818122267",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Kshitij Gupta" },
                        { name: "Shreyas Nair" }
                    ]
                },
                registration: {
                    rules: "A maximum of 10 entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/oz2yGNRKFSkqxqcYA"
                }
            },
            {
                name: "CrypteX",
                venue: "Online (Discord)",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "24 hours",
                participants: "1 student",
                rules: [
                    "Cryptic hunt will be live for 24 hours from 9:30 am November 19 to 9:30 am November 20.",
                    "You have to share your Discord ID to the team and link for the discord will be shared via confirmation mail sent to your school and also via the WhatsApp group.",
                    "Images to begin your challenges will be shared on our Discord Server.",
                    "Hints will also be provided on our Discord Server.",
                    "Google is your only companion.",
                    "Anything and everything may be a clue to aid your progress to complete the challenges.",
                    "Participants will have to decrypt images via clues obtained from Google and use decrypted data to obtain details regarding the next challenge.",
                    "The top 3 teams to complete the most challenges in the fastest time will be the winners."
                ],
                judgementCriteria: [
                    "The participant who completes the final CHALLENGE after completing all the levels before others will be the winner"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Shivani Narang",
                        email: "shivanin.csn@cambridgeschool.edu.in",
                        mobile: "9818832899",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Satish Garg" },
                        { name: "Rishan Sharma" }
                    ]
                },
                registration: {
                    rules: "A discord server link will be provided by email to the school teacher incharge once the registration is confirmed.",
                    link: "https://forms.gle/YCmg6FCPSDfUMcAd8"
                }
            },
            {
                name: "ChemCraft 3D",
                venue: "Atal Tinkering Lab",
                date: "Wednesday, November 19, 2025",
                time: "9:45 a.m.",
                classesEligible: "X-XII",
                duration: "1 hour (preparation time) + 2 minutes (presentation)",
                participants: "A team of 2 students",
                rules: [
                    "Each team must design a 3D model in Blender of an assigned molecule and submit the .blend file along with a 2–3-page report (PDF). The report should cover geometry, bond types, polarity/symmetry, uses, and applications.",
                    "The molecule to be designed will be revealed on the spot.",
                    "Participants must bring their own laptops and chargers with Blender pre-installed and working.",
                    "Using Internet during the event is not allowed.",
                    "The time limit provided is 1 hour for both model designing and report writing.",
                    "Each team must give a presentation to showcase and explain their design.",
                    "The host school will not be responsible for the safety of any gadgets or materials brought by the participants",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Scientific Accuracy",
                    "Creativity And Visualisation",
                    "Quality Of Report",
                    "Presentation"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Arpita Paul",
                        email: "arpitap.csn@cambridgeschool.edu.in",
                        mobile: "9810032729",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Devanshi Chauhan" },
                        { name: "Aryav Thakur" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/WhTVh3jPKwKg9r587"
                }
            },
            {
                name: "Vista View",
                venue: "Designated Walls",
                date: "Wednesday, November 19, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "3 hours",
                participants: "A team of 5 students",
                rules: [
                    "Participants are required to create a 3D Wall installation using waste materials.",
                    "The theme for the installation is 'Waste to Art for Sustainable Creation'.",
                    "Teams must bring their own waste materials, paints, and adhesive materials.",
                    "Suggestive waste materials: cardboard, discarded boxes, egg trays, plastic bottles, used pens and pencils, caps, e-waste, bubble wrap, clay,rope, jute, natural fibres, fabric scraps, newspaper, branches of trees, discarded metals, etc.",
                    "Sharp and hazardous materials should not be used in the installation.",
                    "Acrylic paints and spray paints can be used.",
                    "Suggestive adhesives: Epoxy, POP, synthetic adhesive, etc.",
                    "The art must be created within the wall mounted framed plywood board of area 4 ft × 3 ft.",
                    "Each team will get 3 hours to create their 3D wall art.",
                    "The 3D wall art will be retained by the host school.",
                    "The host school will not be responsible for the safety of materials brought by participants.",
                    "The decision of the judges will be final and binding on all participants."
                ],
                judgementCriteria: [
                    "Thematic Relevance",
                    "Creativity and Imagination",
                    "Originality and Innovativeness",
                    "Spatial Awareness"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Susmita Dey",
                        email: "susmitad.csn@cambridgeschool.edu.in",
                        mobile: "9953706461",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Manya Shukla" },
                        { name: "Harsimran Kaur Chawla" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/uR55HQSbNumMRY526"
                }
            },
            {
                name: "Rube It Up!",
                venue: "Room no. 100",
                date: "Thursday, November 20, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "30 minutes + 5 minutes (set-up)",
                participants: "A team of 2 students",
                rules: [
                    "Each team must design and build a Rube Goldberg Machine — a chain-reaction invention that performs a simple task in an overly complicated and creative way.",
                    "The final task is to knock down a stack of paper cups within 1 minute.",
                    "Teams must bring their own paper cups.",
                    "Machine size must not exceed 1m × 1m × 1m and should be stable, safe, and suitable for indoor use.",
                    "The machine must be triggered by one simple human action and then run entirely on its own.",
                    "Materials allowed include household items (cardboard, bottles, marbles, balls, strings, magnets, rubber bands, etc.), mechanical parts, and safe battery-operated electronics.",
                    "Materials strictly prohibited include open flames, explosives, hazardous chemicals, pressurized gases, projectiles, live creatures, sharp weapons, or anything unsafe indoors.",
                    "Each team will be given 30 minutes for assembling and 5 minutes final setup time before their demonstration.",
                    "Each team will get two attempts; if both fail, partially completed steps will still be considered for judgement",
                    "Each team must give a short oral presentation (max 5 minutes) explaining their design and working.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Creativity and Originality",
                    "Complexity",
                    "Engineering skills",
                    "Presentation and explanation"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Nitu Dixit",
                        email: "nitud.csn@cambridgeschool.edu.in",
                        mobile: "9818634574",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Anahita Singh" },
                        { name: "Reyaansh Pandey" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration desk on the day of the event",
                    link: "https://forms.gle/i2SQTMLGK39yQ3yB6"
                }
            },
            {
                name: "EcoInnovators",
                venue: "AV Room",
                date: "Thursday, November 20, 2025",
                time: "9:30 a.m.",
                classesEligible: "VI-XI",
                duration: "5 minutes per team",
                participants: "A team of 2 students",
                rules: [
                    "Participants are required to create an original, practical model that addresses a real-life ecological or environmental problem.",
                    "The model must be based on 'Innovation for a Greener and Sustainable Future'",
                    "Only sustainable, biodegradable, or recycled materials are to be used.",
                    "The model must fit within the maximum display size of 4 ft × 2 ft. If the participant is using charts, they too must fit in the designated space.",
                    "Each team will get 5 minutes to present their model to the judges during the event.",
                    "Plug points will be provided, if required.",
                    "The host school will not be responsible for the safety of materials brought by participants.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Thematic Relevance",
                    "Creativity and Innovation",
                    "Scientific Principle",
                    "Sustainability Performance"
                ],
                incharges: {
                    teacher: {
                        name: "Dr. Isha Anand",
                        email: "isha.csn@cambridgeschool.edu.in",
                        mobile: "+91 98995 42285",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Sanvi Singh" },
                        { name: "Swapna Sahoo" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration desk on the day of the event",
                    link: "https://forms.gle/VkHbceZZrPw3nz5q9"
                }
            },
            {
                name: "Reel Harmony",
                venue: "Multimedia Lab",
                date: "Thursday, November 20, 2025",
                time: "9:30 a.m.",
                classesEligible: "VII-VIII",
                duration: "1 hour",
                participants: "A team of 2 students",
                rules: [
                    "Participants will create a short animated story on the topic given on the spot based on the main theme of Image",
                    "The final video must be in .mp4 format, include soft background music, not exceed 3 minutes in length and may include subtitles.",
                    "The host school will provide Computers, OpenShot software for editing and a set of images and audio files for use.",
                    "Participants must carry their own headphones for editing and audio mixing.",
                    "Each team will narrate their story live before the judges.",
                    "The host school will not be responsible for the safety of any gadgets or materials brought by participants.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Relevance to the theme",
                    "Creativity & originality",
                    "Technical execution (editing, audio-visual sync, subtitles if used)",
                    "Quality of narration"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Vinoo Mehta",
                        email: "vinoom.csn@cambridgeschool.edu.in",
                        mobile: "9810855550",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Avni Chaturvedi" },
                        { name: "Navya Barua" }
                    ]
                },
                registration: {
                    rules: "Participation is limited to the first 10 teams to register",
                    link: "https://forms.gle/Do2iPgwhqJRdQ8pE7"
                }
            },
            {
                name: "GameSpark",
                venue: "Room no. 18",
                date: "Thursday, November 20, 2025",
                time: "9:15 a.m.",
                classesEligible: "IX-XII",
                duration: "10 minutes per team",
                participants: "A team of 2 students",
                rules: [
                    "Participants must present their game pre-developed on the theme, \"Duality – Two opposite forces coexist, and you must balance them\", using any version of Unreal Engine or Unity.",
                    "Free assets from the internet may be used, provided proper credits are given. Failure to acknowledge sources will result in disqualification.",
                    "All work must be original and created exclusively by the participants.",
                    "Each team will present their game to the judges within a time slot of 10 minutes.",
                    "Students must bring their own laptops to present the game to the Judges.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Originality",
                    "Functionality",
                    "Creativity",
                    "User Experience"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Shivani Narang",
                        email: "shivanin.csn@cambridgeschool.edu.in",
                        mobile: "9818832899",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Shaurya Pathak" },
                        { name: "Ojas Goel" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration desk on the day of the event",
                    link: "https://forms.gle/gxL3kqXmxEjCANtU7"
                }
            },
            {
                name: "Top Coders",
                venue: "IRP Lab",
                date: "Thursday, November 20, 2025",
                time: "9:30 a.m.",
                classesEligible: "IX-XII",
                duration: "1 hour",
                participants: "A team of 2 students",
                rules: [
                    "Teams will be tasked to solve given programming problems in the time duration provided.",
                    "The programming language for the event will be Python 3.13.",
                    "Only the software and tools provided by the host school may be used.",
                    "The use of the internet, mobile phones, or external storage devices is strictly prohibited.",
                    "Code plagiarism or copying from others will lead to immediate disqualification.",
                    "Teams must save their programs with their team name.",
                    "Any form of unfair means or malpractice will result in disqualification.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Problem-Solving Ability",
                    "Code Accuracy & Functionality",
                    "Efficiency of Code",
                    "Creativity & Innovation"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Sandhya Puri",
                        email: "sandhyap.csn@cambridgeschool.edu.in",
                        mobile: "9818122267",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Ishant Aggarwal" },
                        { name: "Yashika Gupta" }
                    ]
                },
                registration: {
                    rules: "A maximum of 10 entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration desk on the day of the event",
                    link: "https://forms.gle/5gr6zsz6gBUeqrEH9"
                }
            },
            {
                name: "IQrypt (Science & Technology Quiz)",
                venue: "Room no. 85 (Prelims), Auditorium (Finals)",
                date: "Thursday, November 20, 2025",
                time: "Prelim Round: 9:00 a.m. - 9:30 a.m., Final Round: 9:45 a.m. - 10:45 a.m.",
                classesEligible: "IX-XII",
                duration: "Prelims: 30 Mins and Final round: 1 hour",
                participants: "A team of 2 students",
                rules: [
                    "Preliminary Round: This will be a pen-and-paper round.",
                    "Both team members will collaboratively solve a written test within a given time limit.",
                    "The top 6 scoring teams will qualify for the Final Round.",
                    "Final Round: The finals will consist of 5 rounds of questions.",
                    "Questions will cover a diverse range of topics from science and technology.",
                    "Teams will be ranked based on their final score.",
                    "The scoring scheme will be revealed on the spot."
                ],
                judgementCriteria: [
                    "Score based on correct answers and speed"
                ],
                incharges: {
                    teacher: {
                        name: "Ms. Ayesha Khan",
                        email: "ayeshak.csn@cambridgeschool.edu.in",
                        mobile: "9810890596",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Hardik Kumar" },
                        { name: "Arya Singh Tyagi" },
                        { name: "Raunak Nayan" },
                        { name: "Manya Aggarwal" },
                        { name: "Avika Sharma" }
                    ]
                },
                registration: {
                    rules: "Team numbers will be allotted at the registration desk on the day of the event",
                    link: "https://forms.gle/Nbkx2jvWz8RuqHd18"
                }
            }
        ]
    },
    {
        eventName: "AUREUS",
        subEvents: [
            {
                name: "Bid Blitz",
                venue: "Seminar Room",
                date: "Thursday, November 20, 2025",
                time: "9:00 a.m.",
                classesEligible: "X-XII",
                duration: "2 hours",
                participants: "A team of 2 students",
                rules: [
                    "The teams will manage virtual funds to bid for the players using strategy and the game sense.",
                    "Player details and the auction guidelines will be shared beforehand for preparation via WhatsApp group.",
                    "The auction will run until completion with no fixed time limit.",
                    "Teams must strictly fulfil the required squad composition.",
                    "Use of gadgets/ digital devices are not allowed during the auction and will lead to disqualification.",
                    "The decision of the judges will be final and binding."
                ],
                judgementCriteria: [
                    "Auction Strategy",
                    "Overall Strength and the balance of the final squad"
                ],
                incharges: {
                    teacher: {
                        name: "Mr. Mayank Arora",
                        email: "mayanka.csn@cambridgeschool.edu.in",
                        mobile: "9811933187",
                        contactTiming: "any working day between 2 p.m. to 4 p.m."
                    },
                    student: [
                        { name: "Saksham Kohli" },
                        { name: "Mehar Kaur" }
                    ]
                },
                registration: {
                    rules: "The first eight registered teams will qualify for the auction",
                    link: "https://forms.gle/81U3stCbeXUuzJpz6"
                }
            },
            {
                name: "Think Tank",
                venue: "Library",
                date: "Thursday, November 20, 2025",
                time: "9:00 a.m.",
                classesEligible: "IX-XII",
                duration: "6 minutes per team for Preliminary Round, 6 minutes per team for Final Round",
                participants: "A team of 2 students",
                rules: [
                    "A team of two students from Class IX to XII shall participate in a group discussion on a topic related to the theme of Image 2025- वसुधैव कुटुम्बकम्",
                    "Preliminary Round: Topic: \"Bridging the Gap: Reducing Global Inequalities for a Harmonious Future\". The top four teams will be shortlisted for the final round.",
                    "Final Round: Topic: To be announced on the spot",
                    "Time: 20 minutes for preparation, 6 minutes for presentation. (Global perspectives related to Environmentally sustainable and responsible lifestyle choices, Economic Policies, Social Issues, War and Peace, Armed Conflicts, etc.)",
                    "Participants will not be allowed to use any external material or notes, as reference during the presentation.",
                    "Judges will ask questions and may provide feedback on your presentation.",
                    "Exceeding the time limit of 6 mins (for the preliminary round) and 6 mins (for the final round), as applicable will lead to negative marking.",
                    "No Wi-Fi connectivity will be provided by the organizing school.",
                    "The teams shall not reveal or wear their own identity or the identity of their school such as school uniform, I-card, taking school name while making presentation, etc.",
                    "No character assassination, naming any individual (living or dead) is allowed. The same will lead to disqualification of the team.",
                    "The teams shall speak without overlapping/interrupting other speakers.",
                    "Mutual respect for each other's views shall be appreciated.",
                    "Students should be dressed in formal attire.",
                    "The decision of the panel of experts shall be final and binding in all situations, even though not mentioned otherwise in the list of rules, in the interest of justice."
                ],
                judgementCriteria: [
                    "Depth of Knowledge: Critical Thinking, Clarity of thought and Coherence of the argument",
                    "Originality and Innovation, Communication Skills",
                    "Relevance and Applicability",
                    "Time Management",
                    "Confidence and Conviction: Adaptability and Flexibility"
                ],
                incharges: {
                    teacher: [
                        {
                            name: "Mr. Jamal Ashraf",
                            email: "jamala.csn@cambridgeschool.edu.in",
                            mobile: "9990544434",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        },
                        {
                            name: "Ms. Jennifer D' Castro",
                            email: "jenniferd.csn@cambridgeschool.edu.in",
                            mobile: "9899188954",
                            contactTiming: "any working day between 2 p.m. to 4 p.m."
                        }
                    ],
                    student: [
                        { name: "Swadha Upadhyay" },
                        { name: "Juwariyah Mahmood" }
                    ]
                },
                registration: {
                    rules: "A maximum of 10 entries will be allowed to register through the link provided on a first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
                    link: "https://forms.gle/kHXxt2XZta7qudf89"
                }
            }
        ]
    }
];

const EventWebsite: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<SubEvent | null>(null);
    const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

    const toggleEventExpansion = (eventName: string) => {
        const newExpanded = new Set(expandedEvents);
        if (newExpanded.has(eventName)) {
            newExpanded.delete(eventName);
        } else {
            newExpanded.add(eventName);
        }
        setExpandedEvents(newExpanded);
    };

    const handleSubEventClick = (subEvent: SubEvent) => {
        setSelectedEvent(subEvent);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Main Content Area */}
            <div className="flex-1 p-8 mr-80">
                {selectedEvent ? (
                    <EventDetails event={selectedEvent} />
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to IMAGE 2025</h1>
                        <h2 className="text-2xl text-gray-600 mb-6">वसुधैव कुटुम्बकम्</h2>
                        <p className="text-gray-700">
                            Select an event from the sidebar to view details.
                        </p>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-white shadow-xl fixed right-0 h-full overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Events</h2>
                    <nav>
                        {Events.map((event, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleEventExpansion(event.eventName)}
                                    className="w-full text-left px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex justify-between items-center"
                                >
                                    <span className="font-semibold">{event.eventName}</span>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform ${expandedEvents.has(event.eventName) ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {expandedEvents.has(event.eventName) && (
                                    <div className="mt-2 space-y-1">
                                        {event.subEvents.map((subEvent, subIndex) => (
                                            <button
                                                key={subIndex}
                                                onClick={() => handleSubEventClick(subEvent)}
                                                className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${selectedEvent?.name === subEvent.name
                                                        ? 'bg-blue-100 text-blue-800 font-medium'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {subEvent.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

const EventDetails: React.FC<{ event: SubEvent }> = ({ event }) => {
    const teacherArray = Array.isArray(event.incharges.teacher)
        ? event.incharges.teacher
        : [event.incharges.teacher];

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{event.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <DetailItem label="Venue" value={event.venue} />
                <DetailItem label="Date" value={event.date} />
                <DetailItem label="Time" value={event.time} />
                <DetailItem label="Classes Eligible" value={event.classesEligible} />
                <DetailItem label="Duration" value={event.duration} />
                <DetailItem label="Participants" value={event.participants} />
            </div>

            <Section title="Rules">
                <ol className="list-decimal list-inside space-y-2">
                    {event.rules.map((rule, index) => (
                        <li key={index} className="text-gray-700">{rule}</li>
                    ))}
                </ol>
            </Section>

            <Section title="Judgement Criteria">
                <ul className="list-disc list-inside space-y-2">
                    {event.judgementCriteria.map((criteria, index) => (
                        <li key={index} className="text-gray-700">{criteria}</li>
                    ))}
                </ul>
            </Section>

            <Section title="In-Charges">
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Teacher(s):</h4>
                        {teacherArray.map((teacher, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-md mb-2">
                                <p className="font-medium">{teacher.name}</p>
                                <p className="text-sm text-gray-600">Email: {teacher.email}</p>
                                <p className="text-sm text-gray-600">Mobile: {teacher.mobile}</p>
                                <p className="text-sm text-gray-600">Contact Timing: {teacher.contactTiming}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Student(s):</h4>
                        <div className="flex flex-wrap gap-2">
                            {event.incharges.student.map((student, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {student.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Registration">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700 mb-3">{event.registration.rules}</p>
                    <a
                        href={event.registration.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Register Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </Section>
        </div>
    );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{label}</h3>
        <p className="text-gray-800 mt-1">{value}</p>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {title}
        </h2>
        {children}
    </div>
);

// Add Tailwind CSS styles
const styles = `
  @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
`;

// Create a style element and append it to the document head
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

export default EventWebsite;