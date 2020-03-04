export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Tyson Vonn Beck.',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 I am Tyson Vonn Beck.',
                        //Line 2 For Header
                        'Full-Stack Web Engineer',
                        //Line 3 For Header
                        'from Seattle'
    ],
        //Contact Email
        contactEmail:'tysonvonnbeck@msn.com',
        // Add Your About Text Here
        abouttext: "I have over 15 years experience in IT, primarily in Quality Assurance with some time as an Assitant Producer. I've loved working in games, both for console and for social/mobile. I hope to add to my journey in tech with my new skills in web development.",
        aboutImage:'https://tysonvonnbeck.github.io/updatedportfolio/images/Profile.png',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Spontaneity', //Project Title - Add Your Project Title Here
             service:'Front-End Design, Back-End Development', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://res.cloudinary.com/tyson/image/upload/v1583357354/projects/adventure_jf9mw2.png",
             //Project URL - Add Your Project Url Here
             url:'https://aqueous-savannah-60861.herokuapp.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Top 3',
                service: 'Front-End Design',
                imageSrc: "https://res.cloudinary.com/tyson/image/upload/v1583357354/projects/Top_3_ga72eg.png",
                url: 'https://top3recommendations.herokuapp.com/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Parlor Flix',
                service: 'Front-End Design',
                imageSrc: "https://res.cloudinary.com/tyson/image/upload/v1583357353/projects/Parlor_Flix_fftjna.png",
                url: 'https://tysonvonnbeck.github.io/ProjectOne/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Random Password Generator',
                service: 'Full Development',
                imageSrc: "https://res.cloudinary.com/tyson/image/upload/v1583357353/projects/RPWG_hq8ymv.png",
                url: 'https://tysonvonnbeck.github.io/RandomPWgen/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/tysonvonnbeck'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/tyson-beck-0120b29b/'
            },
            {
                name: 'Resume',
                url: 'https://tysonvonnbeck.github.io/updatedportfolio/documents/Tyson%20Vonn%20Beck%202020.pdf'
            },
            {
                name: 'Writing',
                url: 'https://tysonvonnbeck.com'
            }

        ]
    }