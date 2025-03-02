import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    contact_image,
    about_image,
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Shankhamay Ghosh',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Dhaka'
        }
    },
    {
        _id: 'doc2',
        name: 'Asst. Prof. Dr. Sharmin Akter Liza',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '15 Years',
        fees: 60,
        address: {
            line1: '27th Cross, Mirpur',
            line2: 'Circle, Ring Road, Dhaka'
        }
    },
    {
        _id: 'doc3',
        name: 'DDr. Asif Imran Siddiqui',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 Years',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Asso. Prof. Dr. Kuntal Roy',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Anika',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. S.M. Hasan Shahriar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Shubhendu Paul',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rk Hasan',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Jannatul Fardaous',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Sarah Johnson',
        image: doc1,
        speciality: 'Cardiologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        fees: 70,
        address: {
            line1: 'Gulshan Avenue',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Mohammad Rahman',
        image: doc2,
        speciality: 'Neurologist',
        degree: 'MBBS, FCPS',
        experience: '12 Years',
        fees: 80,
        address: {
            line1: 'Banani Main Road',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Fatima Ahmed',
        image: doc3,
        speciality: 'Pediatrician',
        degree: 'MBBS, DCH',
        experience: '6 Years',
        fees: 55,
        address: {
            line1: 'Dhanmondi Road 27',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Kamal Hassan',
        image: doc4,
        speciality: 'Orthopedic',
        degree: 'MBBS, MS',
        experience: '15 Years',
        fees: 90,
        address: {
            line1: 'Uttara Sector 10',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Nusrat Jahan',
        image: doc5,
        speciality: 'Gynecologist',
        degree: 'MBBS, FCPS',
        experience: '10 Years',
        fees: 75,
        address: {
            line1: 'Bashundhara Block B',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Rafiq Islam',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDV',
        experience: '7 Years',
        fees: 65,
        address: {
            line1: 'Mohammadpur Ring Road',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Sabrina Khan',
        image: doc7,
        speciality: 'Psychiatrist',
        degree: 'MBBS, FCPS',
        experience: '9 Years',
        fees: 85,
        address: {
            line1: 'Mirpur DOHS',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Imran Hossain',
        image: doc8,
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS',
        experience: '11 Years',
        fees: 70,
        address: {
            line1: 'Khilgaon Main Road',
            line2: 'Dhaka, Bangladesh'
        }
    }
]