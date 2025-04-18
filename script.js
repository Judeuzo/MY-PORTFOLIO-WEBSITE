

////////// THIS BLOCK OF DICTIONARIES CONTAIN DATA TO BE LOADED INTO THE DOM

let portfolioSection=document.querySelector('.portfolioSection');

let count=0;

let fullstackSection={
    header:'Fullstack and mobile developer',
    summary:'Highly skilled and versatile Full Stack & Mobile Developer with over 4 years of experience designing, developing, and deploying end-to-end solutions for web and mobile applications. Proficient in a broad range of technologies including JavaScript, HTML5, CSS3, React Native and Django. Experienced in both front-end and back-end development, with a strong focus on creating seamless user experiences and optimizing performance across multiple platforms. Adept at building scalable, responsive, and high-performance applications, as well as integrating third-party services and APIs. Passionate about staying up to date with industry trends and best practices, and committed to delivering clean, efficient, and maintainable code. Proven ability to collaborate effectively with cross-functional teams, deliver projects on time, and exceed client expectations.',
    skills:'ADOBE ANIMATE, ADOBE ILLUSTRATOR, ADOBE AFTER EFFECTS, ADOBE PREMIER PRO, ADOBE PHOTOSHOP',
    portfolio: [
        'https://kugjaymedia.com/',

        'https://judeuzo.tiiny.site/',

        'https://fendxstore.com/',

        'https://webthemez.com/demo/race-car-wash-website-bootstrap-html-template/',

        'https://webthemez.com/demo/express-car-wash-html5-responsive-web-template/',

        'https://webthemez.com/demo/courage-bootstrap-4-corporate-business-template/',

        'https://webthemez.com/demo/admirer-business-website-bootstrap-theme/',

        'https://webthemez.com/demo/housing-interior-design-bootstrap-4-website-template/',

        'https://webthemez.com/demo/swift-car-wash-html-website-template/'
    ],
    experience:{
        title:['Front End Developer','FullStack Developer','FullStack & Mobile'],
        text:['Kugjay Media','BDMS GLOBAL GROUP LIMITED ','SM DIGITAL SYSTEMS']
    }
}

let animationArtist={
    header:'Animation Artsit',
    summary:'I am an enthusiastic Visual Artist who is very versatile in 3D & 2D design and animation, Graphics Design, Motion design ,UI / UX Design and Social Media management . I have 8 good years of working experience. I am Very conversant with high end creative software like Adobe Photoshop, Premier Pro, Adobe illustrator, Corel Draw, Adobe Animate, Adobe After Effects , Figma, Sketch , Adobe XD ,Canva and Blender 3D. I have been involved in a vast range of projects in the past which have gifted me the opportunity to expand the range of my skill set over the years. I have been engaged in Projects with reputable establishments like Coca Cola, Pepsi, First Bank, Union Bank, Five Alive, Bold So drink, Lacasera drink and a decent amount of top Celebrities.',
    skills:'HTML , CSS, JAVASCRIPT , REACT, REACT NATIVE,ADOBE XD, SKETCH, FIGMA',
    portfolio: [
        "https://www.behance.net/embed/project/167458485?ilo0=1",
            "https://www.behance.net/embed/project/157695177?ilo0=1",
            "https://www.behance.net/embed/project/157695443?ilo0=1",
            'https://www.behance.net/embed/project/139664561?ilo0=1',
            'https://www.behance.net/embed/project/132670503?ilo0=1' 
    ],
    experience:{
        title:['GRAPHICS DESIGNER / 2D AMIMATOR / SOCIAL MEDIA OFFICER','GRAPHICS DESIGNER / 2D AMIMATOR & MOTION ARTIST','GRAPHICS DESIGNER & AMIMATOR , UI/UX DESIGNER'],
        text:['Sapphire Media Studios…','Nectar Studios…','Kugjay Media…']
    }

}

let graphicsDesigner={
    header:'Graphics Designer & Motion Artist',
    summary:'I am an enthusiastic Visual Artist who is very versatile in 3D & 2D design and animation, Graphics Design, Motion design ,UI / UX Design and Social Media management . I have 8 good years of working experience. I am Very conversant with high end creative software like Adobe Photoshop, Premier Pro, Adobe illustrator, Corel Draw, Adobe Animate, Adobe After Effects , Figma, Sketch , Adobe XD ,Canva and Blender 3D. I have been involved in a vast range of projects in the past which have gifted me the opportunity to expand the range of my skill set over the years. I have been engaged in Projects with reputable establishments like Coca Cola, Pepsi, First Bank, Union Bank, Five Alive, Bold So drink, Lacasera drink and a decent amount of top Celebrities.',
    skills:'ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR, COREL DRAW, CANVA PRO',
    portfolio: [
            "https://www.behance.net/embed/project/167457067?ilo0=1",
            "https://www.behance.net/embed/project/167457187?ilo0=1",
            "https://www.behance.net/embed/project/167457453?ilo0=1",
            'https://www.behance.net/embed/project/167457275?ilo0=1',
            'https://www.behance.net/embed/project/167410861?ilo0=1',
            'https://www.behance.net/embed/project/165925519?ilo0=1',
            'https://www.behance.net/embed/project/157695289?ilo0=1',
            'https://www.behance.net/embed/project/157694333?ilo0=1',
            'https://www.behance.net/embed/project/157694427?ilo0=1',
            'https://www.behance.net/embed/project/157694251?ilo0=1',
            'https://www.behance.net/embed/project/157694159?ilo0=1',
            'https://www.behance.net/embed/project/157694047?ilo0=1',
            'https://www.behance.net/embed/project/157693715?ilo0=1',
            'https://www.behance.net/embed/project/157691831?ilo0=1',
            'https://www.behance.net/embed/project/157691201?ilo0=1',
            'https://www.behance.net/embed/project/157690933?ilo0=1',
            'https://www.behance.net/embed/project/157690743?ilo0=1',
            'https://www.behance.net/embed/project/157690595?ilo0=1',
    ],
    experience:{
        title:['GRAPHICS DESIGNER / 2D AMIMATOR / SOCIAL MEDIA OFFICER','GRAPHICS DESIGNER / 2D AMIMATOR & MOTION ARTIST','GRAPHICS DESIGNER & AMIMATOR , UI/UX DESIGNER','GRAPHICS DESIGNER & AMIMATOR , UI/UX DESIGNER'],
        text:['Sapphire Media Studios…','Nectar Studios…','Kugjay Media…','Eloti Design Studios...']
    }

}

let threeD={
    header:'3D Artist',
    summary:'I am an enthusiastic Visual Artist who is very versatile in 3D & 2D design and animation, Graphics Design, Motion design ,UI / UX Design and Social Media management . I have 8 good years of working experience. I am Very conversant with high end creative software like Adobe Photoshop, Premier Pro, Adobe illustrator, Corel Draw, Adobe Animate, Adobe After Effects , Figma, Sketch , Adobe XD ,Canva and Blender 3D. I have been involved in a vast range of projects in the past which have gifted me the opportunity to expand the range of my skill set over the years. I have been engaged in Projects with reputable establishments like Coca Cola, Pepsi, First Bank, Union Bank, Five Alive, Bold So drink, Lacasera drink and a decent amount of top Celebrities.',
    skills:'BLENDER 3D, ADOBE PHOTOSHOP',
    portfolio: [
            "https://www.behance.net/embed/project/172802353?ilo0=1",
            "https://www.behance.net/embed/project/167458171?ilo0=1",
            "https://www.behance.net/embed/project/165925725?ilo0=1" ,
            'https://www.behance.net/embed/project/165925641?ilo0=1'
    ],
    experience:{
        title:['GRAPHICS DESIGNER / 2D AMIMATOR / 3D ARTIST','3D ARTIST / 2D AMIMATOR & MOTION ARTIST','3D ARTIST & AMIMATOR , UI/UX DESIGNER'],
        text:['Sapphire Media Studios…','Nectar Studios…','Kugjay Media…']
    }

}

let surveyor={
    header:'GIS Analyst & Surveyor',
    summary:'GIS Analyst with 3+ years of experience in using geographic information systems (GIS) to collect, analyze, and visualize spatial data. Proven ability to apply GIS skills to solve complex problems in a variety of industries, including government, engineering, and environmental management. Expertise in using GIS software to create maps, reports, and presentations that communicate complex spatial information in a clear and concise manner. With my skills in coding Python, My Sql and Javascript i believe this affords me an even better advantage to solve problems and actualise results more efficiently in this proffession . A Dynamic land surveyor with 3+ years of experience in all aspects of surveying, including boundary surveying, topographic surveying, construction staking, and GIS. Proven ability to accurately collect and analyze data, produce high- quality maps and reports, and communicate complex technical information to a variety of stakeholders. Expertise in using a variety of surveying equipment and software, including GPS, total stations, and AutoCAD.',
    skills:'ARC GIS, Q GIS, AUTOCAD, TOTAL STATION, PYTHON, SQL, MICROSOFT EXEL',
    portfolio: [
        "GEOLOGICAL MAP OF NIGERIA.png","geo7_2ag.jpg"
    ],
    experience:{
        title:['GIS ANALYST & SURVEYOR','GIS ANALYST & SURVEYOR'],
        text:['Geoinformatics Consult','First Friuts Survey Consults']
    }

}

//////////////////////////////////////// THIS BLOCK OF CODE LOADS THE DICTIONARIES INTO THE DOM


let portfolios=[fullstackSection,animationArtist,graphicsDesigner,threeD,surveyor]


function loadIframe(x){
    let iframes=[];
 x.portfolio.forEach(element => {
    append=`<iframe loading='lazy' src="${element}" frameborder="0"></iframe>`;
    iframes.push(append);
 });

 return(iframes);     
}

// for(i=0;i<portfolios.length;i++){
//     let iframeWrapper=document.querySelectorAll('.portfolioLinksWrapper')
//     //iframeWrapper[i].innerHTML=loadIframe(portfolios[i]).join('')
//     // loadIframe(portfolios[i]).forEach(element=>{
//     //     element.addEventListener('click',()=>{
//     //         // window.open(loadIframe(portfolios[i]).element.src)
//     //         console.log(loadIframe(portfolios[i]).element.src)
//     //     })
//     // })
// }

let iframeWrapper=document.querySelectorAll('.portfolioLinksWrapper')
iframeWrapper.forEach(element => {
    newIframe=element.children
    for(i=0;i<newIframe.length;i++){
        newIframe[i].addEventListener('click',()=>{
            window.open(newIframe[i].src)
            Alert(newIframe[i].src)
        })
    }
});

//////////////////////////////////////// THIS BLOCK OF CODE HANDLES THE ONCLICK FUNCTIONS

let menuIcon=document.querySelector('.menuIcon')
let menu=document.querySelector('.nav .menu')
let nav=document.querySelector('.nav')
let openCloseMenue=document.querySelectorAll('#menu')

/////////// THIS FUNCTION OPENS & CLOSES UP THE MENUE
openCloseMenue.forEach(element=>{
    element.addEventListener('click',handleMenuOpenClose)
})

function handleMenuOpenClose(){
    if(menu.style.width !=='350px'){
        menu.style.width='350px'
    }
    else{
        menu.style.width='0px'
    }
}


///////////////// THIS BLOCK OF CODE HANDLES THE LOADING MENU FUNCTIONS

let innerMenu=document.querySelector('.menu .innerMenu')
let menuComposition=[];

portfolios.forEach(element => {
    let innerText=`<div>${element.header}</div>`
    menuComposition.push(innerText)
});

innerMenu.innerHTML=menuComposition.join(' ')



/////////// THIS FUNCTION LOADS THE MENU ON THE BUTTON

let button=document.querySelector('.titleWrapper .button')
let titleWrapper=document.querySelector('.titleWrapper')
let buttonChecker=true
let innerDiv2=document.createElement('div')
let innerDiv=document.createElement('div')
let innerMenu2=innerMenu.cloneNode(true)
let sections2=innerMenu2.childNodes
handleSecondaryMenuOnclick(sections2)

button.addEventListener('click',handleSecondaryMenu)

function handleSecondaryMenu(){
    if(buttonChecker){
    innerDiv2.appendChild(innerMenu2)
    innerDiv.appendChild(innerDiv2)
    titleWrapper.appendChild(innerDiv)
    innerMenu2.style.cssText+='background-color:black;padding-right:40px;'
    innerDiv2.style.cssText+='position:absolute;zIndex:3;left:0px;width:100%;display:flex;justify-content: center;'
    innerDiv.style.cssText+='position:relative;width:100%;top:5px;display:flex;'
    buttonChecker=false
    }
    else{
        innerDiv.style.cssText+='display:none;'
        buttonChecker=true

    }
}

/////////// THIS FUNCTION HANDLES THE PORTFOLIO SECTION SCROLL FUNCTIONS

let allPortfolios=document.querySelectorAll('.portfolioSection>*')
let sections=document.querySelectorAll('.innerMenu>*')

handleSecondaryMenuOnclick(sections);

function handleSecondaryMenuOnclick(x){
    x.forEach(element => {
        element.addEventListener('click',()=>{
            for(i=0;i<portfolios.length;i++){
                if(element.innerText==portfolios[i].header){
                    allPortfolios[portfolios.indexOf(portfolios[i])].scrollIntoView({behavior:"smooth"})
                    break
                    
                }
            }
        })
    });

}

/////////// THIS FUNCTION HANDLES THE MAIN SECTION SCROLL FUNCTIONS

let primaryMenu=document.querySelectorAll('.nav .menu>*')
let coreSections=document.querySelectorAll('body>*')

for(i=0;i<primaryMenu.length;i++){
    if(i==1){
        primaryMenu[i].addEventListener('click',()=>{
            coreSections[1].scrollIntoView({behavior:"smooth"})
        })
        
    }
    if(i==4){
        primaryMenu[i].addEventListener('click',()=>{
            coreSections[4].scrollIntoView({behavior:"smooth"})
        })
        
    }
    if(i==5){
        primaryMenu[i].addEventListener('click',()=>{
            coreSections[5].scrollIntoView({behavior:"smooth"})
        })
        
    }
}

/////////// THIS FUNCTION HANDLES THE BACK TO TOP BUTTON

let backToTopButton=document.querySelector('.backToTopWrapper')
backToTopButton.addEventListener('click',()=>{
    coreSections[1].scrollIntoView({behavior:"smooth"})
})






